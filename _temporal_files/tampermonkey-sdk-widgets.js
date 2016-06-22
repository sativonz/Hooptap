// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    console.log(typeof window.angular);
    var firstScriptTag = document.getElementsByTagName('head')[0];
    var bundle = document.createElement('script');
    bundle.src = "http://localhost:8080/bundle.js";
    bundle.type = "text/javascript";

    firstScriptTag.appendChild(bundle);
})();