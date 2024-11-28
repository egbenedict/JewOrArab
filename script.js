document.getElementById("submit-button").addEventListener("click", function() {
    const form = document.getElementById("quiz-form");
    const formData = new FormData(form);
    let score = 0;
  
    // Loop through the form data and sum the scores
    for (let [key, value] of formData.entries()) {
      score += parseInt(value);
    }
  
    // Display the result
    document.getElementById("result").innerText = `Your score is: ${score}/10`;
  });
  