//var str="41a80cd3707c6b8e015c95bbe73f2461de407ba5677cbd205d528a6eb89d7e0d";

//nazacatek!!! nacte se verze mnemonic words
window.onload = function(){
    mnDictTag = document.getElementById('mnDict');
}

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

    ////

    document.getElementById("binary").value=out;
    ////
    return out.join(' ');
}

function mn_swap_endian_4byte(str) {
    'use strict';
    if (str.length !== 8) throw 'Invalid input length: ' + str.length;
    return str.slice(6, 8) + str.slice(4, 6) + str.slice(2, 4) + str.slice(0, 2);
}


function mn_get_checksum_index(words, prefix_len) {
    var trimmed_words = "";
    for (var i = 0; i < words.length; i++) {
        trimmed_words += words[i].slice(0, prefix_len);
    }
    var checksum = crc32.run(trimmed_words);
    var index = checksum % words.length;
    return index;
}