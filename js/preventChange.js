const originalContents = document.body.innerHTML;
const originalHead = document.head.innerHTML;

import {show_hide} from ‘./preventCopy.js’

function checkEdit() {
  if (document.body.innerHTML == originalContents) {
    // Everything is alright
  } else {
    document.body.innerHTML = originalContents;
  }
  if (document.head.innerHTML == originalHead) {
    // Everything is alright
  } else {
    document.head.innerHTML = originalHead;
  }
}

window.setInterval(checkEdit, 0005);
