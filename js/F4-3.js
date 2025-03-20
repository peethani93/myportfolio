let colors = ["red", "green", "blue", "gray", "ocean_blue"];

function generate_random_value() {
    let a = parseInt(document.getElementById("input_a").value);
    let b = parseInt(document.getElementById("input_b").value);

    // Check if inputs are valid
    if (isNaN(a) || isNaN(b) || a >= b) {
        document.getElementById("result").innerHTML = "Please enter valid numbers where A < B.";
        return;
    }

    let randomNumber = Math.floor((b - a) * Math.random() + a);
    document.getElementById("result").innerHTML = "Random Number: " + randomNumber;

    let size = colors.length;
    let idx = Math.floor(Math.random() * size);
    document.getElementById("result").style.color = colors[idx];
}

