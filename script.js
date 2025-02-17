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

    if (question === "") {
        responseDiv.innerHTML = "🔮 You must ask a question!";
        return;
    }

    if (!question.endsWith("?")) {
        responseDiv.innerHTML = "❓ Please ask a Yes/No question ending with '?'";
        return;
    }

    let randomIndex = Math.floor(Math.random() * responses.length);
    responseDiv.innerHTML = "🎱 " + responses[randomIndex];
}
