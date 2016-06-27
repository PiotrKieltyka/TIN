/*jshint globalstrict: true, devel: true, node:true */
'use strict';

var obj = {
            className: 'first bordered'
         };   

function switchClassName(obj, className) {
    if (obj.className.match(className) !== null){
        obj.className = obj.className.replace(" " + className, "");
    } else {
        obj.className += " " + className;
    }
}