// Define tick and cross icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

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
let selectedDisciplines = []; // Array to store the selected disciplines
let filteredQuestions = []; // Array to store filtered questions
let userAnswers = []; // Array to store user answers

// for cout answer for each discipline
let disciplineScores = {
    Pato: { correct: 0, total: 0 },
    Farmaco: { correct: 0, total: 0 },
    AnatoP: { correct: 0, total: 0 }
};

// Function to select disciplines
function selectDisciplines() {
    const checkboxes = document.querySelectorAll('input[name="discipline"]:checked');
    selectedDisciplines = Array.from(checkboxes).map(checkbox => checkbox.value);
    filteredQuestions = questions.filter(question => selectedDisciplines.includes(question.discipline));
    filteredQuestions = shuffleArray(filteredQuestions).slice(0, 10); // Select 10 random questions
    filteredQuestions.forEach((question, index) => question.numb = index + 1); // Renumber questions from 1 to 10
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// if continueQuiz button clicked
continue_btn.onclick = () => {
    selectDisciplines();
    if (selectedDisciplines.length === 0) {
        alert("Elegí una materia!");
        return;
    }
    info_box.classList.remove("activeInfo"); // hide info box
    quiz_box.classList.add("activeQuiz"); // show quiz box
    showQuetions(0); // calling showQuestions function
    queCounter(1); // passing 1 parameter to queCounter
    next_btn.classList.add("show"); // hide the next button
    prev_btn.classList.add("show"); // hide the previous button
    // Hide the comment section
    document.getElementById("comment_section").classList.add("hidden"); // Add hidden class
}

// Add event listener for keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        next_btn.click(); // Trigger next button click
    } else if (event.key === 'ArrowLeft') {
        prev_btn.click(); // Trigger previous button click
    }
});

/////////////////////////////////////////////////////////////////////////////////////
//  **************************** BOTONES DE NAVEGACIÓN *************************** //
/////////////////////////////////////////////////////////////////////////////////////

//// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < filteredQuestions.length - 1) { // if question count is less than total question length
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
    if (result_box.classList.contains("activeResult")) {
        // Hide the result box and show the quiz box
        result_box.classList.remove("activeResult");
        quiz_box.classList.add("activeQuiz");
        showQuetions(que_count); // Show the current question
        queCounter(que_numb); // Update the question counter
        next_btn.classList.add("show"); // Show the next button
        prev_btn.classList.add("show"); // Show the previous button
    } else if (que_count > 0) { // Check if there is a previous question
        que_count--; // Decrement the question count
        que_numb--; // Decrement the question number
        showQuetions(que_count); // Call showQuestions function
        queCounter(que_numb); // Update the question counter
        clearInterval(counter); // Clear counter
        clearInterval(counterLine); // Clear counterLine

        // Hide the previous button if on the first question
        if (que_count === 0) {
            prev_btn.classList.remove("show");
        }
    }
}

//////////////////////////////////////////////////////////////////
//           ******ESTO LLAMA LAS PREGUNTAS********             //
//////////////////////////////////////////////////////////////////
// getting questions and options from array
// getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
    const info_preg = document.querySelector(".info_preg"); // Assuming you have an element with class "info_preg"

    // Creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + filteredQuestions[index].numb + ". " + filteredQuestions[index].question + '</span>';

    // Check if the question has an image
    if (filteredQuestions[index].image) {
        que_tag += '<img src="' + filteredQuestions[index].image + '" alt="Question Image" style="max-width: 100%; height: auto; margin-top: 10px;">';
    }

    // Add info_quest to the info_preg element
    let info_quest_tag = '<span style="color: grey;">' + filteredQuestions[index].info_quest + '</span>';

    let option_tag = '';
    for (let i = 0; i < filteredQuestions[index].options.length; i++) {
        option_tag += '<div class="option"><span>' + filteredQuestions[index].options[i] + '</span></div>';
    }

    que_text.innerHTML = que_tag; // Adding new span tag inside que_tag
    info_preg.innerHTML = info_quest_tag; // Adding new span tag inside info_preg
    option_list.innerHTML = option_tag; // Adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // Highlight the previously selected answer if it exists
    if (userAnswers[index]) {
        for (let i = 0; i < option.length; i++) {
            if (option[i].textContent === userAnswers[index]) {
                option[i].classList.add("selected"); // Highlight the selected answer
                option[i].classList.add("disabled"); // Disable the option

                // Check if the answer was correct or incorrect
                if (filteredQuestions[index].answer.includes(userAnswers[index])) {
                    option[i].classList.add("correct"); // Add correct class
                } else {
                    option[i].classList.add("incorrect"); // Add incorrect class
                }
            } else if (filteredQuestions[index].answer.includes(option[i].textContent)) {
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

    // Display the comment for the question
    const commentSection = document.getElementById("comment_section");
    commentSection.innerHTML = filteredQuestions[index].comment;
    commentSection.classList.remove("hidden"); // Remove hidden class to show the comment section
}

////////////////////////////////////////////////////////////////////////////////
//          *************** OPCIÓN SELECCIONADA ******************           //
///////////////////////////////////////////////////////////////////////////////
// if user clicked on option
function optionSelected(answer) {
    clearInterval(counter); // clear counter
    clearInterval(counterLine); // clear counterLine
    let userAns = answer.textContent; // getting user selected option
    let correctAns = filteredQuestions[que_count].answer; // getting correct answer from array
    const allOptions = option_list.children.length; // getting all option items
    const commentSection = document.getElementById("comment_section"); // Get the comment section

    // Store the user's answer
    userAnswers[que_count] = userAns; // Store the answer in the array

    // Increment total questions for the respective discipline
    const discipline = filteredQuestions[que_count].discipline;
    disciplineScores[discipline].total += 1;

    if (correctAns.includes(userAns)) { // if user selected option is in the array's correct answers
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
            if (correctAns.includes(option_list.children[i].textContent)) { // if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); // adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }

    // Display the comment for the question
    commentSection.innerHTML = filteredQuestions[que_count].comment;
    commentSection.classList.remove("hidden"); // Remove hidden class to show the comment section

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // once user select an option then disabled all options
    }
    next_btn.classList.add("show"); // show the next button if user selected any option
}

///////////////////////////////////////////////////////////////////
//  esta función crea el resultado, con cada pregunta
/////////////////////////////////////////////////////////////////
function showResult() {
    info_box.classList.remove("activeInfo"); // hide info box
    quiz_box.classList.remove("activeQuiz"); // hide quiz box
    result_box.classList.add("activeResult"); // show result box
    const scoreText = result_box.querySelector(".score_text");

    // Clear previous results
    const questionResultsContainer = result_box.querySelector(".question_results");
    questionResultsContainer.innerHTML = ''; // Clear previous question results

    let totalCorrect = 0;
    let totalQuestions = filteredQuestions.length; // Total number of questions

    // Calculate overall percentage
    for (const discipline in disciplineScores) {
        const { correct } = disciplineScores[discipline];
        totalCorrect += correct;
    }
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
    if (userScore > 7) { // if user scored more than 70%
        scoreText.innerHTML += `<span>Excellente <p>${userScore}</p> / <p>${filteredQuestions.length}</p></span>`;
    } else if (userScore > 5) { // if user scored more than 60%
        scoreText.innerHTML += `<span>Bien! <p>${userScore}</p> / <p>${filteredQuestions.length}</p></span>`;
    } else { // if user scored less than 60%
        scoreText.innerHTML += `<span>Seguí intentando.<p>${userScore}</p> / <p>${filteredQuestions.length}</p></span>`;
    }

    // Organize question results by discipline
    const disciplineQuestions = {};
    for (let i = 0; i < filteredQuestions.length; i++) {
        const discipline = filteredQuestions[i].discipline;

        // Initialize the discipline array if it doesn't exist
        if (!disciplineQuestions[discipline]) {
            disciplineQuestions[discipline] = [];
        }

        // Push the question number into the corresponding discipline array
        disciplineQuestions[discipline].push({
            number: filteredQuestions[i].numb,
            correct: filteredQuestions[i].answer.includes(userAnswers[i])
        });
    }

    // Create a grid for each discipline
    for (const discipline in disciplineQuestions) {
        const disciplineContainer = document.createElement('div');
        disciplineContainer.classList.add('discipline_container');
        disciplineContainer.innerHTML = `<h3>${discipline.charAt(0).toUpperCase() + discipline.slice(1)}:</h3>`;

        const questionGrid = document.createElement('div');
        questionGrid.classList.add('question_grid');

        // Create boxes for each question number
        disciplineQuestions[discipline].forEach(question => {
            const questionBox = document.createElement('div');
            questionBox.classList.add('question_box');
            questionBox.textContent = question.number;

            // Add color based on correctness
            if (question.correct) {
                questionBox.style.backgroundColor = 'green'; // Correct answer
            } else {
                questionBox.style.backgroundColor = 'red'; // Incorrect answer
            }

            questionGrid.appendChild(questionBox);
        });

        disciplineContainer.appendChild(questionGrid);
        questionResultsContainer.appendChild(disciplineContainer);
    }
}

function queCounter(index) {
    // creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> / <p>' + filteredQuestions.length ;
    bottom_ques_counter.innerHTML = totalQueCounTag; // adding new span tag inside bottom_ques_counter
}


/////////////////////////////////////////////////////////////////
//      ********    REINICIAR PRUEBA *********                //
////////////////////////////////////////////////////////////////
quit_quiz.onclick = () => {
    // Reset variables
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    userAnswers = [];
    disciplineScores = {
        Pato: { correct: 0, total: 0 },
        Farmaco: { correct: 0, total: 0 },
        AnatoP: { correct: 0, total: 0 }
    };

    // Re-select questions from the same disciplines
    filteredQuestions = questions.filter(question => selectedDisciplines.includes(question.discipline));
    filteredQuestions = shuffleArray(filteredQuestions).slice(0, 10); // Select 10 random questions
    filteredQuestions.forEach((question, index) => question.numb = index + 1); // Renumber questions from 1 to 10

    result_box.classList.remove("activeResult"); // hide result box
    quiz_box.classList.add("activeQuiz"); // show quiz box
    showQuetions(0); // calling showQuestions function
    queCounter(1); // passing 1 parameter to queCounter
    next_btn.classList.add("show"); // show the next button
    prev_btn.classList.add("show"); // show the previous button
    // Hide the comment section
    document.getElementById("comment_section").classList.add("hidden"); // Add hidden class
}



// Add event listener for changeDiscipline button
const changeDisciplineBtn = document.querySelector(".changeDiscipline");
changeDisciplineBtn.onclick = () => {
    // Reset variables
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    userAnswers = [];
    disciplineScores = {
        Pato: { correct: 0, total: 0 },
        Farmaco: { correct: 0, total: 0 },
        AnatoP: { correct: 0, total: 0 }
    };

    // Clear selected disciplines
    selectedDisciplines = [];

    // Hide result box and quiz box, show info box
    result_box.classList.remove("activeResult");
    quiz_box.classList.remove("activeQuiz");
    info_box.classList.add("activeInfo");
}



//////////////////////////////////////////////////
//      ********** BUSCADOR ***********         //
//////////////////////////////////////////////////


// ...existing code...

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.buscador');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length > 0) {
            const results = questions.filter(q => q.question.toLowerCase().includes(query));
            displayResults(results);
        } else {
            searchResults.style.display = 'none';
        }
    });

    function displayResults(results) {
        searchResults.innerHTML = '';
        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');

                const infoQuest = document.createElement('p');
                infoQuest.textContent = result.info_quest;
                infoQuest.style.color = 'gray';
                resultItem.appendChild(infoQuest);

                const questionText = document.createElement('p');
                questionText.innerHTML = result.question; // Use innerHTML to render HTML content
                resultItem.appendChild(questionText);

                const optionsList = document.createElement('ul');
                result.options.forEach(option => {
                    const optionItem = document.createElement('li');
                    optionItem.innerHTML = option; // Use innerHTML to render HTML content
                    if (result.answer.includes(option)) {
                        optionItem.style.fontWeight = 'bold';
                    }
                    optionsList.appendChild(optionItem);
                });
                resultItem.appendChild(optionsList);

            

                searchResults.appendChild(resultItem);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    }
});

// ...existing code...


