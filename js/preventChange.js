// © Copyright 2022 www.cph101.com
// This file was originally made by cph101
// Do not rebrand if you are distributing it
// © Copyright 2022 www.cph101.com

const originalContents = document.body.innerHTML;
const originalHead = document.head.innerHTML;

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
