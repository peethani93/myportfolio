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

function insert() {
    let student_name = document.getElementById("student_name").value;
    let major = document.getElementById("major").value;
    let year = document.getElementById("year").value;
    let university = document.getElementById("university").value;

    if (student_name) {
        let nameParts = student_name.split(" ");
        student.first_name = nameParts[0];
        student.last_name = nameParts[1] || '';
    }
    if (major) {
        student.major = major;
    }
    if (year) {
        student.year = year;
    }
    if (university) {
        student.university = university;
    }

    alert("Student information updated!");
}

function student_name() {
    document.getElementById("student_info").innerHTML = student.first_name + " " + student.last_name;
}

function major() {
    document.getElementById("student_info").innerHTML = student.major;
}

function university() {
    document.getElementById("student_info").innerHTML = student.university;
}
