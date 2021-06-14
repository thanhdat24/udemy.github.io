

// Đợi các thư viện load xong hết rồi mới chạy code 
/* Truncate Card Title */
window.addEventListener("load", function () {
  truncateCardTitle();
});

function truncateCardTitle() {
  var cardList = document.getElementsByClassName("card-title");
  for (var i = 0; i < cardList.length; i++) {
    var text = cardList[i].innerHTML;
    var nextText = truncateString(text, 35);
    cardList[i].innerHTML = nextText;
  }
}

function truncateString(str, num) {
  if (str.length > num) return str.slice(0, num) + "...";
  else return str;
}

/* Sidebar Mini */

var toggleBtn = document.querySelector(".sidebarMini__button");
var sidebarMini = document.querySelector(".sidebarMini");
var switchBtn = document.querySelector("#checkbox");
toggleBtn.addEventListener("click",function(){
  sidebarMini.classList.toggle("is-opened");
});

switchBtn.addEventListener("click", function () {
  document.querySelector('body').classList.toggle("darkMode");
});