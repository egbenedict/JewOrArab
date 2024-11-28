document.getElementById("submit-button").addEventListener("click", function () {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const form = document.getElementById("quiz");
    const formData = new FormData(form);
    let score = 0;
    let total = 0;

    keyList = [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5",
        "q6",
        "q7",
        "q8",
        "q9",
        "q10",
        "q11",
        "q12",
        "q13",
        "q14",
        "q15",
        "q16",
        "q17",
        "q18",
    ];

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
    result.textContent = `You scored ${score} out of ${total}`;
    // make background color green
    result.style.backgroundColor = "#75ff93";
    document.getElementById("title").insertAdjacentElement("afterend", result);

});
