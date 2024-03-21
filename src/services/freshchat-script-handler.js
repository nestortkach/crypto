/* eslint-disable */

const config = require('../../config');

export const freshChatInit = () => {
  function initFreshChat() {
    window.fcWidget.init(config.freshChatConfig);
  }
  function initialize(i, t) {
    var e;
    i.getElementById(t)
      ? initFreshChat()
      : (((e = i.createElement('script')).id = t),
        (e.async = !0),
        (e.src = 'https://wchat.eu.freshchat.com/js/widget.js'),
        (e.onload = initFreshChat),
        i.head.appendChild(e));
  }
  function initiateCall() {
    initialize(document, 'freshchat-js-sdk');
  }
  window.addEventListener
    ? window.addEventListener('load', initiateCall, !1)
    : window.attachEvent('load', initiateCall, !1);
};
