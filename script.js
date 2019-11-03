var database = [
    {
    username: "greg",
    password: "need3speed"
    },
    {
        username: "sammie",
        password: "123"
        },
        {
            username: "mike",
            password: "555"
            }
];


var newsfeed = [
    {
        username: "Charles",
        timeline: "So tired from work"
    },
    {
        username:"Sammie",
        timeline: "Javascript is amazinggggggggggggggggggggg :D"
    },
    {
        username:"Craig",
        timeline: "I've been coding so much"
    }
];

function  isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username &&
            database[i].password === password) {
                return true;
            }
    }   
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)){
             console.log(newsfeed);
         } else{
             alert("Sorry, wrong username and password! ");
         }
}

var userNamePrompt= prompt("What\'s your username?");
var passwordPrompt= prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);