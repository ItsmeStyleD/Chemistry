const questions = [
    {
        question: "What does accuracy refer to in scientific measurements?",
        answers: [
            { text: "How close measurements are to each other", correct: false},
            { text: "How close a measurement is to the true value", correct: true},
            { text: "The number of measurements taken", correct: false},
            { text: "The ability to measure quickly", correct: false},
        ]
    },
    {
        question: "Which of the following best describes precision?",
        answers: [
            { text: "Measurements are always accurate", correct: false},
            { text: "Measurements are close to each other", correct: true},
            { text: "Measurements are taken at different times", correct: false},
            { text: "Measurements are compared to a standard value", correct: false},
        ]
    },
    {
        question: "Which of the following scenarios shows a precise but not accurate measurement?",
        answers: [
            { text: "An object's true weight is 10 kg, and the readings are 10.0 kg, 9.9 kg, and 10.1 kg", correct: false},
            { text: "An object's true weight is 10 kg, and the readings are 9.8 kg, 9.8 kg, and 9.8 kg", correct: true},
            { text: "An object's true weight is 10 kg, and the readings are 11 kg, 12 kg, and 10.5 kg", correct: false},
            { text: "An object's true weight is 10 kg, and the readings are exactly 10 kg each time", correct: false},
        ]
    },
    {
        question: "Why is it important for measurements to be both accurate and precise?",
        answers: [
            { text: "It ensures measurements are taken quickly", correct: false},
            { text: "It minimizes the cost of experiments", correct: false},
            { text: "It provides reliable and consistent data", correct: true},
            { text: "It allows measurements to be repeated indefinitely", correct: false},
        ]
    },
    {
        question: "Which of the following statements is true?",
        answers: [
            { text: "Precision guarantees accuracy", correct: false},
            { text: "Accuracy guarantees precision", correct: false},
            { text: "Precision and accuracy are the same", correct: false},
            { text: "Precision is independent of accuracy", correct: true},
        ]
    },
    {
        question: "Which of the following numbers has exactly three significant figures?",
        answers: [
            { text: "0.0450", correct: true},
            { text: "450", correct: false},
            { text: "0.04500", correct: false},
            { text: "450.0", correct: false},
        ]
    },
    {
        question: "How many significant figures are in the number 0.00780?",
        answers: [
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ]
    },
    {
        question: "When performing multiplication or division, how many significant figures should the final answer have?",
        answers: [
            { text: "The same number as the original value with the most significant figures", correct: false},
            { text: "The same number as the original value with the fewest significant figures", correct: true},
            { text: "The average of the significant figures in all original values", correct: false},
            { text: "One more than the original value with the fewest significant figures", correct: false},
        ]
    },
    {
        question: "Which of the following statements is true regarding significant figures?",
        answers: [
            { text: "Leading zeros are always significant.", correct: false},
            { text: "Trailing zeros are only significant if there's a decimal point present.", correct: true},
            { text: "All zeros are always significant.", correct: false},
            { text: "In any number, only non-zero digits are significant.", correct: false},
        ]
    },
    {
        question: "When adding 123.45 and 6.7, to how many decimal places should the result be rounded?",
        answers: [
            { text: "1 decimal place", correct: true},
            { text: "2 decimal places", correct: false},
            { text: "3 decimal places", correct: false},
            { text: "4 decimal places", correct: false},
        ]
    },
    {
        question: "Which of the following formulas correctly represents the density (𝜌) of a substance?",
        answers: [
            { text: "𝜌 = 𝑚 / 𝑉", correct: true},
            { text: "𝜌 = 𝑉 / 𝑚", correct: false},
            { text: "𝜌 = 𝑚 × 𝑉", correct: false},
            { text: "𝜌 = 𝑉² / 𝑚", correct: false},
        ]
    },
    {
        question: "Which unit is commonly used to measure the density of a substance?",
        answers: [
            { text: "Kilograms per square meter (kg/m²)", correct: false},
            { text: "Kilograms per cubic meter (kg/m³)", correct: true},
            { text: "Grams per square centimeter (g/cm²)", correct: false},
            { text: "Meters per second (m/s)", correct: false},
        ]
    },
    {
        question: "What method can be used to determine the volume of an irregularly shaped solid object?",
        answers: [
            { text: "Using a hydrometer", correct: false},
            { text: "Using a pycnometer", correct: false},
            { text: "Water displacement in a graduated cylinder", correct: true},
            { text: "Applying the ideal gas law", correct: false},
        ]
    },
    {
        question: "Which of the following devices is typically used to measure the density of liquids?",
        answers: [
            { text: "Gas pycnometer", correct: false},
            { text: "Hydrometer", correct: true},
            { text: "Thermometer", correct: false},
            { text: "Barometer", correct: false},
        ]
    },
    {
        question: "Which factor is NOT involved in the formula for calculating the density of a gas using the ideal gas law?",
        answers: [
            { text: "Pressure (𝑃)", correct: false},
            { text: "Volume (𝑉)", correct: true},
            { text: "Temperature (𝑇)", correct: false},
            { text: "Molar mass (𝑀)", correct: false},
        ]
    },
    {
        question: "Which of the following correctly represents the name for the compound FeCl₃?",
        answers: [
            { text: "Iron chloride", correct: false},
            { text: "Iron(III) chloride", correct: true},
            { text: "Iron trichloride", correct: false},
            { text: "Ferric chloride", correct: false},
        ]
    },
    {
        question: "What prefix is used to indicate two atoms of an element in a covalent compound?",
        answers: [
            { text: "Mono-", correct: false},
            { text: "Di-", correct: true},
            { text: "Tri-", correct: false},
            { text: "Tetra-", correct: false},
        ]
    },
    {
        question: "Which of the following is true about naming ionic compounds?",
        answers: [
            { text: "The anion's name always ends in '-ate.'", correct: false},
            { text: "The cation is always written after the anion.", correct: false},
            { text: "Roman numerals indicate the charge of transition metals.", correct: true},
            { text: "Polyatomic ions are ignored in the naming process.", correct: false},
        ]
    },
    {
        question: "What is the IUPAC name for the organic compound with the formula C₂H₄?",
        answers: [
            { text: "Ethane", correct: false},
            { text: "Ethene", correct: true},
            { text: "Ethyne", correct: false},
            { text: "Ethanol", correct: false},
        ]
    },
    {
        question: "When naming a covalent compound, which of the following endings is typically used for the second element?",
        answers: [
            { text: "-ate", correct: false},
            { text: "-ite", correct: false},
            { text: "-ide", correct: true},
            { text: "-ous", correct: false},
        ]
    }
];






const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
    document.getElementById("show1").innerHTML = " ";
    document.getElementById("show2").innerHTML = " ";
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        document.getElementById("show1").innerHTML = "Correct!";
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        document.getElementById("show2").innerHTML = "Wrong!";
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
            
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    if (score >= 16) {
        questionElement.style.color = "green";
    }
    else{
        questionElement.style.color = "red";
    }
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Answer Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        questionElement.style.color = "#001e4d";
        startQuiz();
    }
})

startQuiz();