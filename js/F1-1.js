const student = {
    first_name: "Sirisha",
    last_name: "Peethani",
    age: "30",
    grade: "A",
    year: "2025",
    major: "Computer Science",
    university: "Auburn University at Montgomery",
    description: function() {
        return this.first_name + " " + this.last_name + " is a " + this.age + "-year-old " + this.major + " student at " + this.university + ". ";
    }
};

function show_student_info() {
    document.getElementById("student_info").innerHTML = student.description();
}

function Create_Student() {
    // Get values from input fields
    const student_name = document.getElementById("student_name").value;
    const major = document.getElementById("major").value;
    const year = document.getElementById("year").value;
    const university = document.getElementById("university").value;

    // Update the student object with new values
    student.first_name = student_name.split(" ")[0]; // Assuming first name is the first part
    student.last_name = student_name.split(" ")[1] || ""; // Assuming last name is the second part
    student.major = major;
    student.year = year;
    student.university = university;

    alert("Student info updated!");
}
