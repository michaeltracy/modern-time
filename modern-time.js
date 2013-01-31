// ==UserScript==
// @id             www.timecard.lmsg.external.lmco.com-a926d894-7437-4497-9791-3ce0c2419506@scriptish
// @name           Modern Time
// @version        0.1
// @namespace      
// @author         Michael Tracy <mike.a.tracy@gmail.com>
// @description    Restyling etime to work better on modern browsers
// @include        *.timecard.lmsg.external.lmco.com/*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js
// @run-at         document-end
// ==/UserScript==

GM_addStyle('body > table, form > table { margin: 0 auto; }');

$('input[name*="S_LOGIN_ID"]').attr('type', 'text');
$('form[name="login"]').removeAttr('onsubmit').removeAttr('target');
$('p').filter(function() {
   return ! $.trim($(this).text());
}).remove();
