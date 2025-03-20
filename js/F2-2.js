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
            return "This is " + this.firstName + " " + this.major + " from " + this.campus + " campus in the year of " + this.year + ".";
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
    const tableBody = document.getElementById("student_table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear existing rows

    for (let i = 0; i < students.length; i++) {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = students[i].firstName;
        cell2.textContent = students[i].major;
        cell3.textContent = students[i].year;
        cell4.textContent = students[i].campus;
    }
}
