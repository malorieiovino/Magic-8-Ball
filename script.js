function shakeBall() {
    let responses = [
        "Yes, definitely!",
        "It is certain.",
        "Without a doubt.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Cannot predict now.",
        "Don't count on it.",
        "My sources say no.",
        "Very doubtful."
    ];

    let question = document.getElementById("question").value.trim();
    let responseDiv = document.getElementById("response");
    let magicBall = document.getElementById("magicBall");

    if (question === "") {
        responseDiv.innerHTML = "🔮 You must ask a question!";
        responseDiv.style.opacity = "1";
        return;
    }

    if (!question.endsWith("?")) {
        responseDiv.innerHTML = "❓ Please ask a Yes/No question ending with '?'";
        responseDiv.style.opacity = "1";
        return;
    }

    // Start shaking and spinning the ball (without sound)
    magicBall.classList.add("shake", "spin");

    // Fade-out the previous response
    responseDiv.style.opacity = "0";

    // Stop shaking and spinning after 1.5 seconds and show the answer
    setTimeout(() => {
        magicBall.classList.remove("shake", "spin");
        let randomIndex = Math.floor(Math.random() * responses.length);
        responseDiv.innerHTML = "🎱 " + responses[randomIndex];
        responseDiv.style.opacity = "1";
    }, 1500); // Time for the shaking effect
}
