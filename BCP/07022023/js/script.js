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
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // show quiz box
    result_box.classList.remove("activeResult"); // hide result box

    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); // calling showQuestions function
    queCounter(que_numb); // passing que_numb value to queCounter
    clearInterval(counter); // clear counter
    clearInterval(counterLine); // clear counterLine

    next_btn.classList.remove("show"); // hide the next button
    prev_btn.classList.remove("show"); // hide the previous button
}



// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { // if question count is less than total question length
        que_count++; // increment the que_count value
        que_numb++; // increment the que_numb value
        showQuetions(que_count); // calling showQuestions function
        queCounter(que_numb); // passing que_numb value to queCounter
        clearInterval(counter); // clear counter
        clearInterval(counterLine); // clear counterLine

        prev_btn.classList.add("show"); // show the previous button
    } else {
        clearInterval(counter); // clear counter
        clearInterval(counterLine); // clear counterLine
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
    let correcAns = questions[que_count].answer; // getting correct answer from array
    const allOptions = option_list.children.length; // getting all option items

    // Store the user's answer
    userAnswers[que_count] = userAns; // Store the answer in the array

    if (userAns == correcAns) { // if user selected option is equal to array's correct answer
        userScore += 1; // upgrading score value with 1
        answer.classList.add("correct"); // adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); // adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); // adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); // adding cross icon to correct selected option
        console.log("Wrong Answer");

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { // if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); // adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // once user select an option then disabled all options
    }
    next_btn.classList.add("show"); // show the next button if user selected any option
}

function showResult() {
    info_box.classList.remove("activeInfo"); // hide info box
    quiz_box.classList.remove("activeQuiz"); // hide quiz box
    result_box.classList.add("activeResult"); // show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 42) { // if user scored more than 3
        // creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Genio! 🎉, Sacaste <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag; // adding new span tag inside score_Text
    } else if (userScore > 36) { // if user scored more than 1
        let scoreTag = '<span>Bien 😎, sacaste <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else { // if user scored less than 1
        let scoreTag = '<span>Bue 😐, ponete a estudiar, sacaste <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function queCounter(index) {
    // creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> / <p>' + questions.length ;
    bottom_ques_counter.innerHTML = totalQueCounTag; // adding new span tag inside bottom_ques_counter
}
