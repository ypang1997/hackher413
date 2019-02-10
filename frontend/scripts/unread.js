
let unread = document.querySelector('#firstConvo');
let unreadImg = document.querySelector('#firstImg');
unread.onclick = function() {
    unread.classList.remove("unread");
    unreadImg.classList.remove("unreadimg");
};