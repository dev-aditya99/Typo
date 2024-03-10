const playingArea = document.querySelector("#id_for_div_playing_area_text");
const wordValue = document.querySelector("#id_for_span_playing_area_text");
const writtenWords = document.querySelector("#id_for_textarea");
const hitedWordvalue = document.querySelector("#id_for_hited_span_value_list");
const targetWordvalue = document.querySelector("#id_for_target_span_value_list");
const timer = document.querySelector(".const_span_list_values");
const EasyplayGame = document.querySelector("#easy_button_game_mode");
const MediumplayGame = document.querySelector("#medium_button_game_mode");
const HardplayGame = document.querySelector("#hard_button_game_mode");
const playGame = document.querySelector("#id_for_div_game_play_button");
const gameStartMenu = document.querySelector("#id_for_div_game_starting_menu");
const showGameOver = document.querySelector("#id_for_div_game_ending_menu");
const restartGame = document.querySelector("#id_for_restart_button");

const gameBgMusic = new Audio("Music/Game_bg_music_1.mp3");
const correctAnswer = new Audio("Music/Correct_answer_sfx_1.mp3");
const wrongAnswer = new Audio("Music/Wrong_answer_sfx_1.mp3");

showGameOver.style.display = "none";
playingArea.style.display = "none";
playGame.style.display = "none";


let hitedWord = 0;
let targetWordEasyMode = 50;
let targetWordMediumMode = 100;
let targetWordHardMode = 200;


let valueOfsec;
let sec = 0;
let modeValue = 0;


var wordsString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Apple", "Boy", "Cat", "Dog", "Elephant", "Fish", "Gun", "Hen", "Ink", "Jug", "Kite", "Lion", "Monkey", "Neck", "Orange", "Parrot", "Queen", "Rose", "Ship", "Tiger", "Umbralla", "Van", "Water", "X-ray", "Yark", "Zebra", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "apple", "boy", "cat", "dog", "elephant", "fish", "gun", "hen", "ink", "jug", "kite", "lion", "monkey", "neck", "orange", "parrot", "queen", "rose", "ship", "tiger", "umbralla", "van", "water", "x-ray", "yark", "zebra"];


var wordsStringForHardMOde = ["Shree Ganesh", "april", "umbralla", "January", "Ink", "ship", "november", "Tuesday", "Elephant", "June", "Orange", "Parrot", "tiger", "March", "van", "September", "October", "November", "Sunday", "Monday", "December", "Wednesday", "Thursday", "X-ray", "Cat", "Friday", "Yark", "Apple", "Boy", "Dog", "Fish", "Gun", "Hen", "Jug", "Kite", "Saturday", "Lion", "Monkey", "Neck", "thursday", "Queen", "Van", "Water", "tuesday", "Zebra", "january", "february", "April", "Rose", "Ship", "Tiger", "Umbralla", "May", "march", "may", "june", "apple", "august", "monday", "friday", "orange", "gun", "december", "july", "sunday", "saturday", "boy", "cat", "september", "dog", "fish", "hen", "ink", "october", "jug", "kite", "lion", "monkey", "neck", "parrot", "July", "elephant", "August", "queen", "rose", "water", "February", "x-ray", "yark", "zebra", "wednesday", "Ascetic", "avoiding", "physical", "pleasures", "religious", "reasons", "because ", "Abnegation", "someone", "made", "something", "reject", "sometime", "Action", "Archetypal", "having", "all-the", "qualities", "particular", "lifestyle", "typeof", "Quantities", "Aggrandize", "power", "adding", "young", "wealth", "health", "Bottom", "Doggle", "individual", "country", "Anachronistic", "chronologically", "wrong", "placing", "for something", "Alacrity", "willingness", "eagerness", "Convivial", "Demagogue", "persuading", "character", "Zero", "behaviour", "understanding", "Construe", "others", "Cajole", "not", "about", "mutual", "feeling", "trust", "of", "expressing", "long way", "something in", "demanding ", "Camaraderie", "being", "political", "leader", "will", "Cognizant", "manipulate", "skills", "unfair", "criticism", "teaching", "moral lesson", "Eclectic", "Callous", "Generating", "ideas", "shocking", "huge way", "Embezzlement", "to steal", "Enervate", "Clamour", "energy", "period", "Ephemeral", "short", "Circumlocution", "Equanimity", "mind", "Fatuous", "Gratuitous"];

var wordsStringForMediumMOde = ["Water", "tuesday", "Zebra", "january", "february", "April", "Rose", "Ship", "Tiger", "Umbralla", "May", "march", "may", "june", "apple", "august", "monday", "friday", "orange", "gun", "december", "july", "sunday", "saturday", "boy", "cat", "september", "dog", "fish", "hen", "ink", "october", "jug", "kite", "lion", "monkey", "neck", "parrot", "Alacrity", "willingness", "eagerness", "Convivial", "Demagogue", "persuading", "character", "Zero", "behaviour", "understanding", "Construe", "others", "Cajole", "not", "about", "mutual", "feeling", "trust", "of", "expressing", "long way", "something in", "demanding ", "Camaraderie", "being", "political", "July", "elephant", "August", "queen", "rose", "water", "February", "x-ray", "yark", "zebra", "wednesday", "Ascetic", "avoiding ", "physical", "pleasures", "religious", "reasons", "because ", "Abnegation", "someone", "made", "something", "reject", "sometime", "Action", "Archetypal", "having", "all-the", "qualities", "particular", "lifestyle", "typeof", "Quantities", "Aggrandize", "power", "adding", "young", "wealth", "health", "Bottom", "Doggle", "individual", "country", "Anachronistic", "chronologically", "wrong", "placing", "for something", "Shree Ganesh", "april", "umbralla", "January", "Ink", "ship", "november", "Tuesday", "Elephant", "June", "Orange", "Parrot", "tiger", "March", "van", "September", "october", "November", "Sunday", "Monday", "December", "Wednesday", "Thursday"];


let randomNumber = (Math.random() * 1000) / 5;
let mathFloornumber = Math.floor(randomNumber);
let speed;
let autO = 0;
let timerIntervalHolder = "";


EasyplayGame.addEventListener("click",
    function () {
        modeValue = 10;
        placeValueForEasyMode();
        playGame.style.display = "";
    }
)

MediumplayGame.addEventListener("click",
    function () {
        modeValue = 30;
        placeValueForMediumMode();
        playGame.style.display = "";
    }
)

HardplayGame.addEventListener("click",
    function () {
        modeValue = 70;
        placeValueForHardMode();
        playGame.style.display = "";
    }
)


if (modeValue == 0) {
    playGame.addEventListener("click",
        function () {

        }
    )
}

playGame.addEventListener("click",
    function () {
        if (modeValue == 10) {
            easyMode();
        }
        if (modeValue == 30) {
            mediumMode();
        }
        if (modeValue == 70) {
            HardMode();
        };
        gameBgMusic.play();
        hideGameStartMenu();
        writtenWords.focus();
    }
)


const gamePlan = () => {
    if (writtenWords.value != "") {
        if (writtenWords.value == wordValue.innerText) {
            correctAnswer.play();
            wordValue.innerText = "";
            writtenWords.value = "";

            if (modeValue == 10) {
                placeValueForEasyMode();
                targetWordEasyMode--;
                targetWordvalue.innerText = targetWordEasyMode + " Words";
                document.querySelector("#_id_span_target_words_class").innerText = "Target : 50 words";
            }
            if (modeValue == 30) {
                placeValueForMediumMode();
                targetWordMediumMode--;
                targetWordvalue.innerText = targetWordMediumMode + " Words";
                document.querySelector("#_id_span_target_words_class").innerText = "Target : 100 words";
            }
            if (modeValue == 70) {
                placeValueForHardMode();
                targetWordHardMode--;
                targetWordvalue.innerText = targetWordHardMode + " Words";
                document.querySelector("#_id_span_target_words_class").innerText = "Target : 200 words";
            };
            hitedWord++;
            hitedWordvalue.innerText = hitedWord;
        }
    }
}

const easyMode = () => {
    sec = 120;
    targetWordvalue.innerText = targetWordEasyMode + " Words";

    timerIntervalHolder = setInterval(function () {
        if (hitedWord == 50 || hitedWord == 100 || hitedWord == 200 || sec < 0) {
            GameOver();
        } else {
            TiMeR();
        }

    }, 1000);
}

const mediumMode = () => {
    targetWordvalue.innerText = targetWordMediumMode + " Words";
    sec = 90;

    timerIntervalHolder = setInterval(function () {
        if (hitedWord == 100 || sec < 0) {
            GameOver();
        } else {
            TiMeR();
        }
    }, 1000)
}

const HardMode = () => {
    targetWordvalue.innerText = targetWordHardMode + " Words";
    sec = 60;

    timerIntervalHolder = setInterval(function () {
        console.log("Running");
        if (hitedWord == 200 || sec < 0) {
            GameOver();
        } else {
            TiMeR();
        }
    }, 1000)
}

const TiMeR = () => {
    if (sec < 10) {
        document.getElementById("id_for_timer_span_value_list").innerText = "0" + sec + "s";
    } else {
        document.getElementById("id_for_timer_span_value_list").innerText = sec + "s";
    }
    sec--;
}

const hideGameStartMenu = () => {
    gameStartMenu.style.display = "none";
    playingArea.style.display = "";
}


const placeValueForEasyMode = () => {
    wordValue.innerText = wordsString[Math.floor((Math.random() * 1000) / 11)];
}

const placeValueForMediumMode = () => {
    wordValue.innerText = wordsStringForMediumMOde[Math.floor((Math.random() * 1000) / 7.4)];
}

const placeValueForHardMode = () => {
    wordValue.innerText = wordsStringForHardMOde[Math.floor((Math.random() * 1000) / 5.49)];
}


const GameOver = () => {
    clearInterval(timerIntervalHolder);
    gameBgMusic.pause();
    playingArea.style.display = "none";
    writtenWords.disabled = true;

    document.querySelector("#_id_span_hited_words_class").innerText = "Hited Words : " + hitedWord;
    if (modeValue == 10) {
        document.querySelector("#_id_span_time_class").innerText = "Time : " + (119 - sec) + "s";
    }
    if (modeValue == 30) {
        document.querySelector("#_id_span_time_class").innerText = "Time : " + (89 - sec) + "s";
    }
    if (modeValue == 70) {
        document.querySelector("#_id_span_time_class").innerText = "Time : " + (59 - sec) + "s";
    };

    showGameOver.style.display = "";
}


restartGame.addEventListener("click",
    function () {
        document.location.reload();
    }
)

writtenWords.addEventListener("input", gamePlan);