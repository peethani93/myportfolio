function generate_random_value() {
    // Parse the input values as integers
    let a = parseInt(document.getElementById("input_a").value);
    let b = parseInt(document.getElementById("input_b").value);

    // Check if the inputs are valid numbers
    if (isNaN(a) || isNaN(b) || a >= b) {
        document.getElementById("output_div").innerHTML = "Please enter valid numbers where A < B.";
        return;
    }

    // Generate a random value between A and B
    let random_value = Math.floor(Math.random() * (b - a)) + a;

    // Display the random value
    document.getElementById("output_div").innerHTML = random_value;
}
