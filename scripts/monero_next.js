
function mn_encode(str, wordset_name) {
    'use strict';
    wordset_name = wordset_name || mn_default_wordset;
    var wordset = mn_words[wordset_name];
    var out = [];
    var n = wordset.words.length;
    for (var j = 0; j < str.length; j += 8) {
        str = str.slice(0, j) + mn_swap_endian_4byte(str.slice(j, j + 8)) + str.slice(j + 8);
    }
    for (var i = 0; i < str.length; i += 8) {
        var x = parseInt(str.substr(i, 8), 16);
        var w1 = (x % n);
        var w2 = (Math.floor(x / n) + w1) % n;
        var w3 = (Math.floor(Math.floor(x / n) / n) + w2) % n;
        out = out.concat([wordset.words[w1], wordset.words[w2], wordset.words[w3]]);
    }
    if (wordset.prefix_len > 0) {
        out.push(out[mn_get_checksum_index(out, wordset.prefix_len)]);
    }
    return out.join(' ');
}