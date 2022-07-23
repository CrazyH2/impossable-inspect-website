const originalContents = document.body.innerHTML;
const originalHead = document.head.innerHTML;

function checkEdit() {
  import {show_hide} from ‘./preventCopy.js’
  if (show_hide == "stop")
    // Everything is hidden
  } else {
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
}

window.setInterval(checkEdit, 0005);
