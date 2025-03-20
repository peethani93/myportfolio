class Student {
    constructor(dob) {
        this.dob = new Date(dob);
        this.currentDate = new Date();
        this.currentYear = this.currentDate.getFullYear();
        this.currentMonth = this.currentDate.getMonth() + 1;
        this.currentDay = this.currentDate.getDate();
    }

    getAge() {
        let birthYear = this.dob.getFullYear();
        let birthMonth = this.dob.getMonth() + 1;
        let birthDay = this.dob.getDate();
        let age = this.currentYear - birthYear;
        if (this.currentMonth < birthMonth || (this.currentMonth === birthMonth && this.currentDay < birthDay)) {
            age--;
        }
        return age;
    }

    getCurrentDate() {
        return `${this.currentDay}/${this.currentMonth}/${this.currentYear}`;
    }
}

function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("result").innerText = "Please enter your date of birth.";
        return;
    }

    let student = new Student(dob);
    let age = student.getAge();
    let currentDate = student.getCurrentDate();

    document.getElementById("result").innerText = `Your age is ${age} years.`;
    document.getElementById("date").innerText = `Current Date: ${currentDate}`;
}
