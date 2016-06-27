/*jshint globalstrict: true, devel: true, node:true */
'use strict';

String.prototype.erLik = function(text) {
    
    var mainString = this;
    
    function unifyString(phrase){
        phrase = phrase.replace('é', 'e');
        phrase = phrase.replace('è', 'e'); 
        phrase = phrase.replace('ê', 'e');
        phrase = phrase.replace('ó', 'o');
        phrase = phrase.replace('ò', 'o');
        phrase = phrase.replace('ô', 'o');
        phrase = phrase.replace('å', 'aa');
        phrase = phrase.replace('æ', 'ae');
        phrase = phrase.replace('ø', 'oe');
        phrase = phrase.replace('É', 'E');
        phrase = phrase.replace('È', 'E'); 
        phrase = phrase.replace('Ê', 'E');
        phrase = phrase.replace('Ó', 'O');
        phrase = phrase.replace('Ò', 'O');
        phrase = phrase.replace('Ô', 'O');
        phrase = phrase.replace('Å', 'Aa');
        phrase = phrase.replace('Æ', 'Ae');
        phrase = phrase.replace('Ø', 'Oe');
    
        return phrase;
    }
    
    mainString = unifyString(this);
    text = unifyString(text);
    
    if(mainString.match(text)) {
        return true;
    } else {
        return false;
    }   
};