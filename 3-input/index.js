// with a window prompt

/*
    let username = window.prompt("Please enter your name")
    console.log(username)
*/

// with a HTML textbox

let username
document.getElementById("mybutton").onclick = function() {
    username = document.getElementById("mytext").value
    console.log(username)

    document.getElementById("mylabel").innerHTML = "Hello, " + username
}