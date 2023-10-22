
const userInput = document.body.querySelector("form input:nth-of-type(1)");

console.log(userInput.value)

const cardDisplay = document.body.querySelector("section").style;

const image = document.body.querySelector("img");
const headline = document.body.querySelector("h2:nth-of-type(2)");
const explaination = document.body.querySelector("p");
const headlineStatic = "Your horoscope is "


function show() {
    event.preventDefault();
    console.log(userInput.value)
    if (userInput.value.toLowerCase() === "jan"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_aquarius.png";
        headline.textContent = "AQUARIUS"
        explaination.textContent = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
    }
    if (userInput.value.toLowerCase() === "feb"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_pisces.png";
        headline.textContent = "PISCES"
        explaination.textContent = "Communication is very important today—written, spoken, and even nonverbal body language will all…"
    }
    if (userInput.value.toLowerCase() === "mar"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_aries.png";
        headline.textContent = "ARIES"
        explaination.textContent = "Today your patience might be tested when one or more of your projects gets put on hold by someone… "
    }
    if (userInput.value.toLowerCase() === "apr"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_taurus.png";
        headline.textContent = "TAURUS"
        explaination.textContent = "Your intense energy makes you a great candidate for a leadership position right now, so if you are… "
    }
    if (userInput.value.toLowerCase() === "may" || userInput.value.toLowerCase() === "mai"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_gemini.png";
        headline.textContent = "GEMINI"
        explaination.textContent = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that… "
    }
    

    if (userInput.value.toLowerCase() === "jun"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_cancer.png";
        headline.textContent = "CANCER"
        explaination.textContent = "Too many different elements in your life are overlapping with each other right now—and it's your… "
    }else
    if (userInput.value.toLowerCase() === "jul"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_leo.png";
        headline.textContent = "LEO"
        explaination.textContent = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your… "
    }else
    if (userInput.value.toLowerCase() === "aug"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_virgo.png";
        headline.textContent = "VIRGO"
        explaination.textContent = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all… "
    if (userInput.value.toLowerCase() === "sep"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_libra.png";
        headline.textContent = "LIBRA"
        explaination.textContent = "Pick a cultural event that's coming up and get some tickets for it today. "
    }else
    if (userInput.value.toLowerCase() === "oct"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_scorpio.png";
        headline.textContent = "SCORPIO"
        explaination.textContent = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
    }else
    if (userInput.value.toLowerCase() === "nov"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_sagittarius.png";
        headline.textContent = "SAGITTARIUS"
        explaination.textContent = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
    }else
    if (userInput.value.toLowerCase() === "dec" || userInput.value.toLowerCase() === "dez"){
        cardDisplay.display = "block";
        image.src = "https://www.horoscopedates.com/img/icon_capricorn.png";
        headline.textContent = "CAPRICORN"
        explaination.textContent = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity."
        } 
    }
}