const customObjects = [];

function insert_data() {
    const student_name = document.getElementById("student_name").value; // Fixed ID
    const major = document.getElementById("major").value;
    const year = document.getElementById("year").value;
    const campus = document.getElementById("campus").value;

    const newObject = {
        student_name: student_name,
        major: major,
        year: year,
        campus: campus
    };

    customObjects.push(newObject);

    clear_input();
}

function clear_input() {
    document.getElementById("student_name").value = "";
    document.getElementById("major").value = "";
    document.getElementById("year").value = "";
    document.getElementById("campus").value = "";
}

function show_data() {
    const tableBody = document.getElementById("output_table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    customObjects.forEach(obj => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = obj.student_name;
        cell2.textContent = obj.major;
        cell3.textContent = obj.year;
        cell4.textContent = obj.campus;
    });
}

function clear_output() {
    const tableBody = document.getElementById("output_table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
}
