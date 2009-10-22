
// No Links Please!
// version 0.2
//
// ==UserScript==
// @name          No Links Please!
// @namespace     http://jamesclarke.info
// @description   disable links from everywhere but google
// @include       *
// @exclude       http://www.google.tld/search*
// @exclude       http://www.google.tld/ig*
// @exclude       http://maps.google.tld/*
// @exclude       http://*search.yahoo.com/*
// @exclude       https://mail.google.com/*
// @exclude       http://mail.google.com/*
// @exclude       http://www.google.tld/calendar/*
// @exclude       http://portal.acm.org/*
// @exclude       http://citeseer.ist.psu.edu/*
// ==/UserScript==

var links, a, href, replacement;

links = document.evaluate(
    "//a[@href]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
for (var i = 0; i < links.snapshotLength; i++) {
    a = links.snapshotItem(i);
    replacement = document.createElement('span');
    if (a.hasChildNodes()) {
        for (var j = 0; j < a.childNodes.length; j++) {
            replacement.appendChild(a.childNodes[j]);
        }
    }
    a.parentNode.replaceChild(replacement, a);
}

