const students = [];

function insert_info() {
    const firstName = document.getElementById("firstName").value;
    const major = document.getElementById("major").value;
    const year = document.getElementById("year").value;
    const campus = document.getElementById("campus").value;

    const student = {
        firstName: firstName,
        major: major,
        year: year,
        campus: campus,
        description: function() {
            return "This is " + this.firstName + " studying " + this.major + " from " + this.campus + " campus in the year of " + this.year + ".";
        }
    };

    students.push(student);

    // Clear input fields after insertion
    document.getElementById("firstName").value = "";
    document.getElementById("major").value = "";
    document.getElementById("year").value = "";
    document.getElementById("campus").value = "";
}

function show_info() {
    let allDetails = "";
    for (let i = 0; i < students.length; i++) {
        allDetails += students[i].description() + "<br>";
    }
    document.getElementById("student_info").innerHTML = allDetails;
}
