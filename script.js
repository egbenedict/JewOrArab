const allImages = [
    { src: "images/p1.jpg", alt: "q1", answer: "J" },
    { src: "images/p2.jpg", alt: "q2", answer: "A" },
    { src: "images/p3.jpg", alt: "q3", answer: "J" },
    { src: "images/p4.jpg", alt: "q4", answer: "A" },
    { src: "images/p5.jpg", alt: "q5", answer: "J" },
    { src: "images/p6.jpg", alt: "q6", answer: "A" },
    { src: "images/p7.jpg", alt: "q7", answer: "J" },
    { src: "images/p8.jpg", alt: "q8", answer: "A" },
    { src: "images/p9.jpg", alt: "q9", answer: "J" },
    { src: "images/p10.jpg", alt: "q10", answer: "A" },
    { src: "images/p11.jpg", alt: "q11", answer: "A" },
    { src: "images/p12.jpg", alt: "q12", answer: "A" },
    { src: "images/p13.jpg", alt: "q13", answer: "J" },
    { src: "images/p14.jpg", alt: "q14", answer: "J" },
    { src: "images/p15.jpg", alt: "q15", answer: "A" },
    { src: "images/p16.jpg", alt: "q16", answer: "J" },
    { src: "images/p17.jpg", alt: "q17", answer: "J" },
    { src: "images/p18.jpg", alt: "q18", answer: "J" },
    { src: "images/p19.jpg", alt: "q19", answer: "J" },
    { src: "images/p20.jpg", alt: "q20", answer: "J" },
    { src: "images/p21.jpg", alt: "q21", answer: "A" },
    { src: "images/p22.jpg", alt: "q22", answer: "J" },
    { src: "images/p23.jpg", alt: "q23", answer: "A" },
    { src: "images/p24.jpg", alt: "q24", answer: "A" },
    { src: "images/p25.jpg", alt: "q25", answer: "A" },
    { src: "images/p26.jpg", alt: "q26", answer: "A" },
    { src: "images/p27.jpg", alt: "q27", answer: "A" },
    { src: "images/p28.jpg", alt: "q28", answer: "A" },
    { src: "images/p29.jpg", alt: "q29", answer: "A" },
    { src: "images/p30.jpg", alt: "q30", answer: "A" },
    { src: "images/p31.jpg", alt: "q31", answer: "A" },
    { src: "images/p32.jpg", alt: "q32", answer: "A" },
    { src: "images/p33.jpg", alt: "q33", answer: "A" },
    { src: "images/p34.jpg", alt: "q34", answer: "A" },
    { src: "images/p35.jpg", alt: "q35", answer: "A" },
    { src: "images/p36.jpg", alt: "q36", answer: "A" },
    { src: "images/p37.jpg", alt: "q37", answer: "A" },
    { src: "images/p38.jpg", alt: "q38", answer: "A" },
    { src: "images/p39.jpg", alt: "q39", answer: "A" },
    { src: "images/p40.jpg", alt: "q40", answer: "A" },
    { src: "images/p41.jpg", alt: "q41", answer: "A" },
    { src: "images/p42.jpg", alt: "q42", answer: "A" },
    { src: "images/p43.jpg", alt: "q43", answer: "A" },
    { src: "images/p44.jpg", alt: "q44", answer: "A" },
    { src: "images/p45.jpg", alt: "q45", answer: "J" },
    { src: "images/p46.jpg", alt: "q46", answer: "J" },
    { src: "images/p47.jpg", alt: "q47", answer: "J" },
    { src: "images/p48.jpg", alt: "q48", answer: "J" },
    { src: "images/p49.jpg", alt: "q49", answer: "J" },
    { src: "images/p50.jpg", alt: "q50", answer: "J" },
    { src: "images/p51.jpg", alt: "q51", answer: "J" },
    { src: "images/p52.jpg", alt: "q52", answer: "J" },
    { src: "images/p53.jpg", alt: "q53", answer: "J" },
    { src: "images/p54.jpg", alt: "q54", answer: "J" },
    { src: "images/p55.jpg", alt: "q55", answer: "J" },
    { src: "images/p56.jpg", alt: "q56", answer: "J" },
    { src: "images/p57.jpg", alt: "q57", answer: "J" },
    { src: "images/p58.jpg", alt: "q58", answer: "J" },
    { src: "images/p59.jpg", alt: "q59", answer: "J" },
    { src: "images/p60.jpg", alt: "q60", answer: "J" },
    { src: "images/p61.jpg", alt: "q61", answer: "J" },
    { src: "images/p62.jpg", alt: "q62", answer: "A" },
    { src: "images/p63.jpg", alt: "q63", answer: "A" },
    { src: "images/p64.jpg", alt: "q64", answer: "A" },
    { src: "images/p65.jpg", alt: "q65", answer: "A" },
    { src: "images/p66.jpg", alt: "q66", answer: "A" },
    { src: "images/p67.jpg", alt: "q67", answer: "A" },
    { src: "images/p68.jpg", alt: "q68", answer: "J" },
    { src: "images/p69.jpg", alt: "q69", answer: "A" },
    { src: "images/p70.jpg", alt: "q70", answer: "J" },
    { src: "images/p71.jpg", alt: "q71", answer: "J" },
    { src: "images/p72.jpg", alt: "q72", answer: "J" },
];

const imageSet1 = allImages.slice(0, 18);
// newImageSet = shuffle(allImages.slice(18, 72));
// const imageSet2 = newImageSet.slice(0, 18);
// const imageSet3 = newImageSet.slice(18, 36);
// const imageSet4 = newImageSet.slice(36, 54);

// console.log(imageSet1);
// console.log(imageSet2);
// console.log(imageSet3);
// console.log(imageSet4);
const imageSet2 = [
    { src: 'images/p27.jpg', alt: 'q27', answer: 'A' },
    { src: 'images/p20.jpg', alt: 'q20', answer: 'J' },
    { src: 'images/p64.jpg', alt: 'q64', answer: 'A' },
    { src: 'images/p58.jpg', alt: 'q58', answer: 'J' },
    { src: 'images/p37.jpg', alt: 'q37', answer: 'A' },
    { src: 'images/p26.jpg', alt: 'q26', answer: 'A' },
    { src: 'images/p50.jpg', alt: 'q50', answer: 'J' },
    { src: 'images/p25.jpg', alt: 'q25', answer: 'A' },
    { src: 'images/p62.jpg', alt: 'q62', answer: 'A' },
    { src: 'images/p32.jpg', alt: 'q32', answer: 'A' },
    { src: 'images/p22.jpg', alt: 'q22', answer: 'J' },
    { src: 'images/p48.jpg', alt: 'q48', answer: 'J' },
    { src: 'images/p35.jpg', alt: 'q35', answer: 'A' },
    { src: 'images/p45.jpg', alt: 'q45', answer: 'J' },
    { src: 'images/p67.jpg', alt: 'q67', answer: 'A' },
    { src: 'images/p56.jpg', alt: 'q56', answer: 'J' },
    { src: 'images/p34.jpg', alt: 'q34', answer: 'A' },
    { src: 'images/p19.jpg', alt: 'q19', answer: 'J' }
];
const imageSet3 = [
    { src: 'images/p59.jpg', alt: 'q59', answer: 'J' },
    { src: 'images/p36.jpg', alt: 'q36', answer: 'A' },
    { src: 'images/p40.jpg', alt: 'q40', answer: 'A' },
    { src: 'images/p46.jpg', alt: 'q46', answer: 'J' },
    { src: 'images/p60.jpg', alt: 'q60', answer: 'J' },
    { src: 'images/p43.jpg', alt: 'q43', answer: 'A' },
    { src: 'images/p33.jpg', alt: 'q33', answer: 'A' },
    { src: 'images/p49.jpg', alt: 'q49', answer: 'J' },
    { src: 'images/p28.jpg', alt: 'q28', answer: 'A' },
    { src: 'images/p66.jpg', alt: 'q66', answer: 'A' },
    { src: 'images/p51.jpg', alt: 'q51', answer: 'J' },
    { src: 'images/p42.jpg', alt: 'q42', answer: 'A' },
    { src: 'images/p55.jpg', alt: 'q55', answer: 'J' },
    { src: 'images/p44.jpg', alt: 'q44', answer: 'A' },
    { src: 'images/p71.jpg', alt: 'q71', answer: 'J' },
    { src: 'images/p63.jpg', alt: 'q63', answer: 'A' },
    { src: 'images/p69.jpg', alt: 'q69', answer: 'A' },
    { src: 'images/p24.jpg', alt: 'q24', answer: 'A' }
];
const imageSet4 = [
    { src: 'images/p61.jpg', alt: 'q61', answer: 'J' },
    { src: 'images/p70.jpg', alt: 'q70', answer: 'J' },
    { src: 'images/p41.jpg', alt: 'q41', answer: 'A' },
    { src: 'images/p53.jpg', alt: 'q53', answer: 'J' },
    { src: 'images/p39.jpg', alt: 'q39', answer: 'A' },
    { src: 'images/p65.jpg', alt: 'q65', answer: 'A' },
    { src: 'images/p57.jpg', alt: 'q57', answer: 'J' },
    { src: 'images/p72.jpg', alt: 'q72', answer: 'J' },
    { src: 'images/p30.jpg', alt: 'q30', answer: 'A' },
    { src: 'images/p54.jpg', alt: 'q54', answer: 'J' },
    { src: 'images/p47.jpg', alt: 'q47', answer: 'J' },
    { src: 'images/p29.jpg', alt: 'q29', answer: 'A' },
    { src: 'images/p21.jpg', alt: 'q21', answer: 'A' },
    { src: 'images/p68.jpg', alt: 'q68', answer: 'J' },
    { src: 'images/p31.jpg', alt: 'q31', answer: 'A' },
    { src: 'images/p23.jpg', alt: 'q23', answer: 'A' },
    { src: 'images/p38.jpg', alt: 'q38', answer: 'A' },
    { src: 'images/p52.jpg', alt: 'q52', answer: 'J' }
];

const imageSets = [imageSet1, imageSet2, imageSet3, imageSet4];

function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
return array;
}

var questionIndex = 0;

// Select 10 random images
// const selectedQuestions = shuffle(allImages).slice(0, 18);
let selectedQuestions = imageSets[questionIndex];

function run(index) {
    selectedQuestions = imageSets[index];
    const questionList = document.getElementById("question-list");
    questionList.innerHTML = "";
    selectedQuestions.forEach((question, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `
        <img src="${question.src}" alt="${question.alt}">
        <div class="options">
            <label>
                <input type="radio" name="${question.alt}" value="${question.answer === "J" ? 1 : 0}" required> <b>Jew</b>
            </label>
            <label>
                <input type="radio" name="${question.alt}" value="${question.answer === "J" ? 0 : 1}" required> <b>Arab</b>
            </label>
        </div>
    `;
    questionList.appendChild(div);
    });
}
document.getElementById("submit-button").addEventListener("click", function () {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const form = document.getElementById("quiz");
    const formData = new FormData(form);
    let score = 0;
    let total = 0;

    const keyList = [] 
    for (let q of selectedQuestions) {
        keyList.push(q.alt);
    }

    // Loop through the form data and sum the scores
    for (let key of keyList) {
        const value = formData.get(key);
        const image = document.querySelector(`[alt="${key}"]`);
        if (value != null) {
            score += parseInt(value);  // Adds up the selected values (0 or 1)
        }
        total += 1;  // Counts the number of questions

        if (value === "1") {
            image.classList.add('correct');
            image.classList.remove('incorrect');
        } else {
            image.classList.add('incorrect');
            image.classList.remove('correct');
        }
    }

    // Display the result in an h3 element right below the element of id title
    const result = document.createElement("h1");
    result.id = "result";
    result.textContent = `You scored ${score} out of ${total}`;

    const tryAgain = document.createElement("button");
    tryAgain.id = "try-again";
    tryAgain.textContent = "Try Again?";
    tryAgain.addEventListener("click", function () {
        questionIndex = (questionIndex + 1) % imageSets.length;
        run(questionIndex);
        result.remove();
        tryAgain.remove();
    });
    // make background color green
    if (score >= 10) {
        result.style.backgroundColor = "#75ff93";
    } else {
        result.style.backgroundColor = "#ff7575";
    }
    // remove existing result and button if they exist
    const existingResult = document.getElementById("result");
    if (existingResult) {
        existingResult.remove();
    }
    const existingButton = document.getElementById("try-again");
    if (existingButton) {
        existingButton.remove();
    }

    document.getElementById("title").insertAdjacentElement("afterend", tryAgain);
    document.getElementById("title").insertAdjacentElement("afterend", result);

});

run(0);