var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);
function SumNPrint(x1, x2) {
    x3 = x1 + x2;
    console.log(x3);
}
SumNPrint(x, y);
SumNPrint(A, B);
if (C.length > z) {
    console.log(C);
} else {
    console.log("good job!");
}
const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];
function findTheBanana(L) {
    L.forEach((fruit, index) => {
        if (fruit === "Banana") {
            alert(`found the Banana in ${index}`);
        }
    });
}
// findTheBanana(L1);
// findTheBanana(L2);
function greetingFunc() {
    if (!window.location.pathname.endsWith('/index.html')) {
        return;
    }
    const d = new Date();
    const h = d.getHours();
    const E = document.getElementById("greeting");
    if (h < 12) {
        E.innerHTML = "Good morning, my name is Benjamin";
    } else if (h >= 12 && h < 18) {
        E.innerHTML = "Good afternoon, my name is Benjamin";
    } else if (h >= 18 && h < 20) {
        E.innerHTML = "Good evening, my name is Benjamin";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        E.innerHTML = "Good night, my name is Benjamin";
    }
}
greetingFunc();
function addYear() {
    const d = new Date();
    const y = d.getFullYear();
    document.getElementById("copyYear").textContent = "© " + y + " designed 🎨 and coded 🧑🏽‍💻 by Benjamin Najib";
}

addYear();
// function showList() {
//     document.getElementById("lis").style.display = "block";
//     document.getElementById("but").style.display = "none";
// }
if (window.location.pathname.endsWith('/index.html')) {
    $(function() {
        $("#longIntro").hide()
        $("#readLess").hide();
    });
    
    $("#readMore").click(function(){
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });
    
    $("#readLess").click(function(){
        $("#readMore").show();
        $("#longIntro").hide();
        $("#readLess").hide();
    });
}

function validate() {
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");
    var msg = document.getElementById("validatemsg");
    if (!userName.checkValidity() ||!userEmail.checkValidity() ||!userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you"
    }
}

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            document.getElementById("adviceText").innerText = "Failed to fetch advice.";
            console.error('Fetch error:', error);
        });
}
