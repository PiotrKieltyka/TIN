/*jshint globalstrict: true, devel: true, node:true */
      'use strict';

function sum() {
    var s = 0;
    for (var i = 0; i < arguments.length; i++)  {
        s += arguments[i];
     }
    return s;
}