let colors = ["red", "blue", "green", "orange"];
let idx = 0;
let size = colors.length;

function generate_shape() {
    let n = parseInt(document.getElementById("user_input").value);
    let text = "";
    let i = 0;

    // Check if n is a valid number
    if (isNaN(n) || n < 0) {
        document.getElementById("content_div").innerHTML = "Please enter a valid positive number.";
        return;
    }

    while (i <= n) {
        let j = 0;
        while (j < i) {
            text += "* ";
            j++;
        }
        text += "<br>";
        i++;
    }

    document.getElementById("content_div").innerHTML = text;
    document.getElementById("content_div").style.color = colors[idx];
    idx = (idx + 1) % size;
}
