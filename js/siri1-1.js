function calculateGrade() {
    const score = parseInt(document.getElementById("score").value);
    let grade = "";

    if (isNaN(score)) {
        grade = ""; // Clear the grade if input is not a number
    } else if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("grade").textContent = grade;
}
