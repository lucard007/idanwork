let userInfo = [];
let one = document.getElementById("fname");
let two = document.getElementById("lname");
let three = document.getElementById("number");
let four = document.getElementById("email");
let five = document.getElementById("password");

// let fname =  one.value;
//     let lname = two.value;
//     let number = Number(three.value);
//     let email = four.value;
//     let password = five.value;

if (localStorage.getItem("userInfo") === null) {
        localStorage.setItem("userInfo", "[]")
}

function signUp() {
    let fname =  one.value;
    let lname = two.value;
    let number = Number(three.value);
    let email = four.value;
    let password = five.value;

    let userObj = {
        fname,
        lname,
        number,
        email,
        password
    }

    let storedArray = localStorage.getItem("userInfo");
    let parsedArr = JSON.parse(storedArray);
    userInfo = [...parsedArr, userObj];
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.href = "ak.html";

        // one.focus();
        // one.value = "";
        // two.value = "";
        // three.value = "";
        // four.value = "";
        // five.value = "";
}

function editDetails() {
    let storedArray = localStorage.getItem("userInfo");
    let parsedArr = JSON.parse(storedArray);
    let fname = prompt("Enter new First Name: ", parsedArr.fname);
    let lname = prompt("Enter new Last Name: ", parsedArr.lname);
    let number = prompt("Enter new Phone Number: ", parsedArr.number);
    let email = prompt("Enter new Email Adress: ", parsedArr.email);
    let password = prompt("Enter new Password: ", parsedArr.password);

    let newObj = {
        fname,
        lname,
        number,
        email,
        password
    }

    parsedArr = newObj;
    localStorage.setItem("userInfo", JSON.stringify(parsedArr));
    window.location.href = "ak.html";
}
