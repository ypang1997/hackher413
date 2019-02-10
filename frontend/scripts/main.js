let message1 = document.querySelector('.msg1');
let message2 = document.querySelector('.msg2');
let message3 = document.querySelector('.msg3');

let input = document.querySelector('#message');
let arrayMsg = [message1, message3];
let arrayOther = [message2,]

let counter = 0;

let button = document.getElementById("send-btn");
console.log(button);


button.onclick = function() {
    console.log('click');
    for (let i = 0; i < arrayMsg.length; i++) {
        if(arrayMsg[i].classList.contains("displayNone")) {
            arrayMsg[i].classList.remove("displayNone");
            input.value = "";
            setTimeout(function(){ 
                alert("Hello"); }, 4000);

            break;
        }
        
    }
};
