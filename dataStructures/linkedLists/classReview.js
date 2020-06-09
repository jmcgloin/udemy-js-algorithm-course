class Student {
	constructor(firstName, lastName, grade = 1) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		Student.count++;
	}

	greet() {
		console.log(`Hello, my name is ${this.firstName} ${this.lastName}.  I am in grade ${this.grade}`);
	}

	advance() {
		this.grade < 4 ? this.grade++ : this.graduate()
	}

	graduate() {
		if(this.grade == 'graduated') return;
		this.grade = 'graduated';
		Student.count--;
		console.log(`Congratulations, ${this.firstName}, you have graduated`)
	}

	static count = 0;

	static studentCount() {
		console.log(`There are ${Student.count} students.`);
	}

}

Student.studentCount();

let studentJ = new Student("Jason", "McGloin", 3);
studentJ.greet();

Student.studentCount();

let studentZ = new Student("ZiYu", "Zhou");
studentZ.greet();

Student.studentCount();


studentJ.advance();
studentJ.advance();
studentZ.advance();
studentZ.advance();

Student.studentCount();

studentJ.greet();
studentZ.greet();