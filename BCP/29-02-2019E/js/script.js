// Selecting all required elements

const info_box = document.querySelector(".info_box");

const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");

const next_btn = document.querySelector(".footerNav .next_btn");
const prev_btn = document.querySelector(".footerNav .prev_btn"); // Select the previous button
const bottom_ques_counter = document.querySelector(".footerNav .total_que");

// Define restart_quiz after selecting the result_box
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// Initialize variables
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
// for cout answer for each discipline
let disciplineScores = {
    Bacterio: { correct: 0, total: 0 },
    Parasito: { correct: 0, total: 0 },
    Fisiopato: { correct: 0, total: 0 },
    Farmaco: { correct: 0, total: 0 },
    Biofisica: { correct: 0, total: 0 },
    AnatoP: { correct: 0, total: 0 }
};
// Initialize total questions for each discipline
questions.forEach(question => {
    const discipline = question.discipline;
    if (disciplineScores[discipline]) {
        disciplineScores[discipline].total += 1; // Increment total questions for the discipline
    }
});



// if exitQuiz button clicked

let userAnswers = []; // Array to store user answers

// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // hide info box
    quiz_box.classList.add("activeQuiz"); // show quiz box
    showQuetions(0); // calling showQuestions function
    queCounter(1); // passing 1 parameter to queCounter
    next_btn.classList.add("show"); // hide the next button
    prev_btn.classList.add("show"); // hide the previous button
}

// if restartQuiz button clicked
//restart_quiz.onclick = () => {
//    quiz_box.classList.add("activeQuiz"); // show quiz box
//    result_box.classList.remove("activeResult"); // hide result box
//
//    que_count = 0;
//    que_numb = 1;
//    userScore = 0;
//    widthValue = 0;
//    showQuetions(que_count); // calling showQuestions function
//    queCounter(que_numb); // passing que_numb value to queCounter
//    clearInterval(counter); // clear counter
//    clearInterval(counterLine); // clear counterLine
//
//    next_btn.classList.remove("show"); // hide the next button
//    prev_btn.classList.remove("show"); // hide the previous button
//}



// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { // if question count is less than total question length
        que_count++; // increment the que_count value
        que_numb++; // increment the que_numb value
        showQuetions(que_count); // calling showQuestions function
        queCounter(que_numb); // passing que_numb value to queCounter
        clearInterval(counter); // clear counter
        clearInterval(counterLine); // clear counter

        // Hide the comment section
        document.getElementById("comment_section").classList.add("hidden"); // Add hidden class

        prev_btn.classList.add("show"); // show the previous button
    } else {
        clearInterval(counter); // clear counter
        clearInterval(counterLine); // clear counter
        showResult(); // calling showResult function
    }
}

// if Previous Que button clicked
prev_btn.onclick = () => {
    if (que_count > 0) { // Check if there is a previous question
        que_count--; // Decrement the question count
        que_numb--; // Decrement the question number
        showQuetions(que_count); // Call showQuestions function
        queCounter(que_numb); // Update the question counter
        clearInterval(counter); // clear counter
        clearInterval(counterLine); // clear counterLine

        // Hide the previous button if on the first question
        if (que_count === 0) {
            prev_btn.classList.remove("show");
        }
    }
}

// getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    // Creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';

    // Check if the question has an image
    if (questions[index].image) {
        que_tag += '<img src="' + questions[index].image + '" alt="Question Image" style="max-width: 100%; height: auto; margin-top: 10px;">';
    }

    let option_tag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        option_tag += '<div class="option"><span>' + questions[index].options[i] + '</span></div>';
    }
    que_text.innerHTML = que_tag; // Adding new span tag inside que_tag
    option_list.innerHTML = option_tag; // Adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // Highlight the previously selected answer if it exists
    if (userAnswers[index]) {
        for (let i = 0; i < option.length; i++) {
            if (option[i].textContent === userAnswers[index]) {
                option[i].classList.add("selected"); // Highlight the selected answer
                option[i].classList.add("disabled"); // Disable the option

                // Check if the answer was correct or incorrect
                if (userAnswers[index] === questions[index].answer) {
                    option[i].classList.add("correct"); // Add correct class
                } else {
                    option[i].classList.add("incorrect"); // Add incorrect class
                }
            } else if (option[i].textContent === questions[index].answer) {
                // Highlight the correct answer if the user selected the wrong one
                option[i].classList.add("correct"); // Add correct class
            }

            // Disable all options for previously answered questions
            option[i].classList.add("disabled"); // Disable the option
        }
    }

    // Set onclick attribute to all available options only if the question is not previously answered
    if (!userAnswers[index]) {
        for (let i = 0; i < option.length; i++) {
            option[i].setAttribute("onclick", "optionSelected(this)");
        }
    }
}

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// if user clicked on option
function optionSelected(answer) {
    clearInterval(counter); // clear counter
    clearInterval(counterLine); // clear counterLine
    let userAns = answer.textContent; // getting user selected option
    let correctAns = questions[que_count].answer; // getting correct answer from array
    const allOptions = option_list.children.length; // getting all option items
    const commentSection = document.getElementById("comment_section"); // Get the comment section

    // Store the user's answer
    userAnswers[que_count] = userAns; // Store the answer in the array

    // Increment total questions for the respective discipline
    const discipline = questions[que_count].discipline;
    disciplineScores[discipline].total += 1;

    if (userAns === correctAns) { // if user selected option is equal to array's correct answer
        userScore += 1; // upgrading score value with 1
        disciplineScores[discipline].correct += 1; // increment correct answers for the discipline
        answer.classList.add("correct"); // adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); // adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); // adding red color to incorrect selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); // adding cross icon to incorrect selected option
        console.log("Wrong Answer");

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent === correctAns) { // if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); // adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }

    // Display the comment for the question
    commentSection.innerHTML = questions[que_count].comment;

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // once user select an option then disabled all options
    }
    next_btn.classList.add("show"); // show the next button if user selected any option
}

///////////////////////////////////////////////////////////
// esta muestra el % de cada disciplina 
///////////////////////////////////////////////////////////
//function showResult() {
//    info_box.classList.remove("activeInfo"); // hide info box
//    quiz_box.classList.remove("activeQuiz"); // hide quiz box
//    result_box.classList.add("activeResult"); // show result box
//    const scoreText = result_box.querySelector(".score_text");
//
//    // Calculate percentages for each discipline
//    let resultText = '';
//    for (const discipline in disciplineScores) {
//        const { correct, total } = disciplineScores[discipline];
//        const percentage = total > 0 ? (correct / total) * 100 : 0;
//        resultText += `<p>${discipline.charAt(0).toUpperCase() + discipline.slice(1)}: ${correct} de ${total} (${percentage.toFixed(2)}%)</p>`;
//    }
//
//    // Display overall score
//    if (userScore > 42) { // if user scored more than 3
//        scoreText.innerHTML = `<span>Excellent <p>${userScore}</p> de <p>${questions.length}</p></span>` + resultText;
//    } else if (userScore > 36) { // if user scored more than 1
//        scoreText.innerHTML = `<span>Good! <p>${userScore}</p> de <p>${questions.length}</p></span>` + resultText;
//    } else { // if user scored less than 1
//        scoreText.innerHTML = `<span>Bad result: <p>${userScore}</p> de <p>${questions.length}</p></span>` + resultText;
//    }
//}


///////////////////////////////////////////////////////////////////
//  esta función crea círculos porcentuales para cada disciplina en circulo
/////////////////////////////////////////////////////////////////
function showResult() {
    info_box.classList.remove("activeInfo"); // hide info box
    quiz_box.classList.remove("activeQuiz"); // hide quiz box
    result_box.classList.add("activeResult"); // show result box
    const scoreText = result_box.querySelector(".score_text");

    // Clear previous results
    const disciplineResultsContainer = result_box.querySelector(".discipline_results");
    disciplineResultsContainer.innerHTML = '';

    let totalCorrect = 0;
    let totalQuestions = 0;

    // Calculate percentages for each discipline
    for (const discipline in disciplineScores) {
        const { correct, total } = disciplineScores[discipline];
        totalCorrect += correct;
        totalQuestions += total;

        const percentage = total > 0 ? (correct / total) * 100 : 0;

        // Create a circle element for the discipline
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.setProperty('--percentage', percentage + '%'); // Set the percentage for the conic gradient
        circle.innerHTML = `<span><p>${discipline.charAt(0).toUpperCase() + discipline.slice(1)}: ${percentage.toFixed(2)}%</p></span>`;
        
        // Append the circle to the discipline results container
        disciplineResultsContainer.appendChild(circle);
    }

    // Calculate overall percentage
const overallPercentage = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

// Create a circle for the overall score
const overallCircle = document.createElement('div');
overallCircle.classList.add('mainCircle');
overallCircle.style.setProperty('--percentage', overallPercentage + '%'); // Set the percentage for the conic gradient

// Set the color based on the overall percentage
if (overallPercentage < 60) {
    overallCircle.style.backgroundColor = 'red'; // Set circle color to red
} else {
    overallCircle.style.backgroundColor = 'green'; // Set circle color to green
}

overallCircle.innerHTML = `<span><p>Total: ${overallPercentage.toFixed(2)}%</p></span>`;

    // Insert the overall circle into the result box
    result_box.querySelector('.score_text').innerHTML = ''; // Clear previous score text
    result_box.querySelector('.score_text').appendChild(overallCircle); // Add overall circle

    // Display overall score text
    if (userScore > 42) { // if user scored more than 70%
        scoreText.innerHTML += `<span>Excellente <p>${userScore}</p> / <p>${questions.length}</p></span>`;
    } else if (userScore > 35) { // if user scored more than 60%
        scoreText.innerHTML += `<span>Bien! <p>${userScore}</p> / <p>${questions.length}</p></span>`;
    } else { // if user scored less than 60%
        scoreText.innerHTML += `<span>Seguí intentando.<p>${userScore}</p> / <p>${questions.length}</p></span>`;
    }
}
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
function queCounter(index) {
    // creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> / <p>' + questions.length ;
    bottom_ques_counter.innerHTML = totalQueCounTag; // adding new span tag inside bottom_ques_counter
}
