let colors = ["red", "blue", "green", "orange"];
let idx = 0;
let size = colors.length;

function generate_shape() {
    let n = parseInt(document.getElementById("user_input").value);
    let text = "";

    // Check if n is a valid number
    if (isNaN(n) || n < 0) {
        document.getElementById("content_div").innerHTML = "Please enter a valid positive number.";
        return;
    }

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            text += "* ";
        }
        text += "<br>";
    }

    document.getElementById("content_div").innerHTML = text;
    document.getElementById("content_div").style.color = colors[idx];
    idx = (idx + 1) % size;
}
