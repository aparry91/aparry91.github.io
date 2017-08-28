let para = document.createElement("P");
let lives = 10;
let chosenWord;
let winningPhrase = []

let requestURL = 'https://raw.githubusercontent.com/zeke/an-array-of-french-words/master/corpus.txt';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();
request.onload = function () {
    let requestData = request.response.split("\n");
    chosenWord = (requestData[Math.floor(Math.random() * requestData.length)].replace(/[!@#$%^&*()-=_+|;':",.<>?']/, "")).toUpperCase();
    console.log(chosenWord);
    updateHangman();
    updateLives();
    popArr();
}

function end() {
    responsiveVoice.speak("Tu as atteint le bout de la ligne, mon ami. Insérez pendaison brutale ici.", "French Female");
}

function updateHangman() {
    let img = document.getElementById("image");

    if (lives === 10) {
        img.setAttribute("src", "img/hm.png");
    } else if (lives === 9) {
        img.setAttribute("src", "img/hm1.png");
    } else if (lives === 8) {
        img.setAttribute("src", "img/hm2.png");
    } else if (lives === 7) {
        img.setAttribute("src", "img/hm3.png");
    } else if (lives === 6) {
        img.setAttribute("src", "img/hm4.png");
    } else if (lives === 5) {
        img.setAttribute("src", "img/hm5.png");
    } else if (lives === 4) {
        img.setAttribute("src", "img/hm6.png");
    } else if (lives === 3) {
        img.setAttribute("src", "img/hm7.png");
    } else if (lives === 2) {
        img.setAttribute("src", "img/hm8.png");
    } else if (lives === 1) {
        img.setAttribute("src", "img/hm9.png");
    } else if (lives === 0) {
        img.setAttribute("src", "img/hm10.png");
        end();
    }
}

function updateLives() {
    let img2 = document.getElementById("lives");

    if (lives === 10) {
        img2.setAttribute("src", "img/Life10.png");
    } else if (lives === 9) {
        img2.setAttribute("src", "img/Life9.png");
    } else if (lives === 8) {
        img2.setAttribute("src", "img/Life8.png");
    } else if (lives === 7) {
        img2.setAttribute("src", "img/Life7.png");
    } else if (lives === 6) {
        img2.setAttribute("src", "img/Life6.png");
    } else if (lives === 5) {
        img2.setAttribute("src", "img/Life5.png");
    } else if (lives === 4) {
        img2.setAttribute("src", "img/Life4.png");
    } else if (lives === 3) {
        img2.setAttribute("src", "img/Life3.png");
    } else if (lives === 2) {
        img2.setAttribute("src", "img/Life2.png");
    } else if (lives === 1) {
        img2.setAttribute("src", "img/Life1.png");
    } else if (lives === 0) {
        img2.setAttribute("src", "img/dead.png");
    }
}

function reloadGame() {
    location.reload();
}
/**           document.getElementById("characters").innerHTML = "";
    continue;
    popArr();
    let requestData = request.response.split("\n");
    chosenWord = (requestData[Math.floor(Math.random() * requestData.length)].replace(/[!@#$%^&*()-=_+|;':",.<>?']/, "")).toUpperCase();
    console.log("new word: " + chosenWord);
    }

/**           lives = 10;
    updateHangman();
    document.getElementById("status").innerHTML = ""; **/
//           let winningPhrase = [];
//           popArr();
//           printStored();

function printStored(){
    document.getElementById("characters").innerHTML = (winningPhrase.join(" "));
}

function Pos(){
let n = document.getElementById("Guess").value.toUpperCase();
for (let i = 0 ; i < chosenWord.length; i++)
if (chosenWord.charAt(i) === document.getElementById("Guess").value.toUpperCase());

}

function winningCombo(){
let img = document.getElementById("image");
    for (let i = 0; i < winningPhrase.length; i++)
    if (winningPhrase[i] === '_') {
       return;
    }
document.getElementById("status").innerHTML= "Congratulations you guessed the word!";
img.setAttribute("src", "img/victory.jpg");
}

function popArr(){
    for (i=0; chosenWord.length; i++){
    if (chosenWord.length != winningPhrase.length){
    winningPhrase.push("_");
    } else {
    console.log(winningPhrase.join(" "));
    document.getElementById("characters").innerHTML = winningPhrase.join(" ");
    break;
    }
    }
}

document.onsubmit = enter;
function enter(e) {
if (e.which == 13) { 
    guessLetter();
    document.getElementById("Guess").reset();
}
}

function guessLetter() {
    let n = document.getElementById("Guess").value.toUpperCase().charAt(0);
    let count = 0;
    

    document.getElementById("History").innerHTML += n + ", ";
    
                console.log(n + ", " + count);
    
    if (lives > 0) {
        if (n != winningPhrase)
        console.log("lives:" + lives)
        for (i = 0; i < chosenWord.length; i++) { 
        if (n === chosenWord.charAt(i)) {
            count++;
            console.log("Position of letter: " + n + ", is at: " + i);
            winningPhrase[i] = n;
            console.log("letter " + n + ", was stored in the array.")
            console.log(winningPhrase)
            winningCombo()
            printStored()
        }
        }
            console.log("letter found : " + count + " time(s).")
    

        if (count === 0) {
            lives--;
            updateHangman();
            updateLives();
            console.log("You have: " + lives + ", lives remaining");

        } else if (count > 0) {
            console.log("the letter: " + Guess.value + ", was found" + count + " time(s)");
        } else {

        }

    } else {
        console.log("GAMEOVER")
    }
    return false;
}
