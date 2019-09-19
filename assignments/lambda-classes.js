// CODE here for your Lambda Classes
/*
## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

```js
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
```

#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* speak() logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person{
    constructor (instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${this.subject}.`;
    }
    grade() {
        return `${student.name} receives a perfect score on ${this.subject}.`;
    }
}

#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student {
    constructor (studentAttr) {
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listSubjects() {
        return `${student.name}'s subjects are ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`


  class ProjectManager {
    constructor(PMAttr) {
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode(student) {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
    }
}

STRETCH
 Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly 
  add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/



// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
//```

// ****************************************************************     CLASS PERSON   *************************************************************************
class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    //speak() logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
    // randomly add or subtract points to a student's grade. _Math.random_ will help.
    gradeChangeOfFate(studentObj, max) {
        studentObj.grade = `${Math.floor((Math.random() * max) + 1)}`;
        return `${studentObj.name}'s new grade is ${studentObj.grade}`;
    }
}
// *****************************************************************    CLASS INSTRUCTOR    ********************************************************************
class Instructor extends Person{
    constructor (instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    //* `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    //* `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
    grade(studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}.`;
    }
}
// ***************************************************************       CLASS STUDENT      ***********************************************************************
class Student extends Person{
    constructor (studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }
    //* `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    listSubjects() {
        return `${this.name}'s subjects are ${this.favSubjects}`;
    }
    //* `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    //* `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    //* This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    //* If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
    graduate() {
        if (this.grade > 70) {
            return `This student may graduate because students new grade is ${this.grade} which is above 70 percent.`
        } else {
            return `This student should keep working on some assignments and change their grade and then they can graduate! Because students new grade is ${this.grade} and is below 70 percent`;
        }
    }
}


// *************************************************************       CLASS PROJECT MANAGER   ***********************************************************************
class ProjectManager extends Instructor{
    constructor(PMAttr) {
        super (PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    //* `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    //* `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
    debugsCode(studentObj, subject) {
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
    }
}

// PERSON OBJECTS

  const phillip = new Person({
    name: 'phillip',
    location: 'Utah',
    age: 37
  });

  const pat = new Person({
    name: 'pat',
    location: 'Idaho',
    age: 14
  });

  const pit = new Person({
    name: 'pit',
    location: 'Arizona',
    age: 88
  });

// STUDENT OBJECTS
  const sam = new Student({
    name: 'sam',
    location: 'California',
    age: 44,
    previousBackground: 'Janitor',
    className: 'class of 97',
    favSubjects: ['math', 'science', 'computers'],
    grade: 80
  });
  const satan = new Student({
    name: 'Satan',
    location: 'Hell',
    age: 1989864829281273,
    previousBackground: 'Fallen Angel',
    className: 'never graduated from Heaven',
    favSubjects: ['torture', 'sinning', 'imposter syndrome'],
    grade: 0
  });

// INSTRUCTOR OBJECTS
  const ian = new Instructor({
    name: 'ian',
    location: 'Colorado',
    age: 10,
    specialty: 'getting students to do their homework',
    favLanguage: 'C++',
    catchPhrase:'JUST DO IT'
  });

  const issac = new Instructor({
    name: 'issac',
    location: 'Denver',
    age: 18,
    specialty: 'not getting students to do their homework',
    favLanguage: 'binary',
    catchPhrase:'BOOM SHAKALAKA'
  });

  const iliad = new Instructor({
    name: 'iliad',
    location: 'Greece',
    age: 37,
    specialty: 'fighting monsters',
    favLanguage: 'python',
    catchPhrase:'YEEEEEEAAAH'
  });

// PROJECT MANAGERS OBJECT
  const matthew = new ProjectManager({
    name: 'matthew',
    location: 'Bedrock',
    age: 37,
    gradClassName: 'suprisingly never graduated',
    favInstructor: 'ian'
  });

// PERSON TESTS ALL NAMES START WITH P
    console.log(`This should display phillips name and where he is from using the speak method(): ${phillip.speak()}`);
    console.log(`This should display pat's age (14): ${pat.age}.`);
    console.log(`This should display pit's name and where he is from using the speak method(): ${pit.speak()}`);

// STUDENT TESTS ALL NAMES START WITH S
    console.log(`This should see if student is properly inheriting persons methods using speak() for Satan: ${satan.speak()}`);
    console.log(`This should see if I can display Satans Object: ${satan}`);
    console.log(`This should list Satan's fav subjects: ${satan.listSubjects()}`);
    console.log(`list PR Assignment for Sam: ${sam.PRAssignment('Hanging out')}`);
    console.log(`Satans sprint challenge: ${satan.sprintChallenge('messing with people')}`);
    console.log(`randomly change grade before checking to see if they can graduate: ${ian.gradeChangeOfFate(satan, 100)}`);
    console.log(`checks if satans grade is permissable for graduation: ${satan.graduate()}`);

// INSTRUCTOR TESTS ALL NAMES START WITH I
    console.log(`check inheritance via speak() for instructor iliad: ${iliad.speak()}`);
    console.log(`check demo for instructor issac: ${issac.demo("math")}`);
    console.log(`check grade for instructor ian: ${ian.grade(satan, 'being a BAD BAD Boy')}`);
    console.log(`check grade changer method: ${ian.gradeChangeOfFate(satan, 100)}`);

// PROJECT MANAGERS TEST ALL NAMES START WITH M
    console.log(`check speak() for inheritance to Person class for matthew: ${matthew.speak()}`);
    console.log(`check grade() for inheritance to Instructor class for matthew: ${matthew.grade(sam, "being a class clown")}`);
    console.log(`check standup(): ${matthew.standUp('SUPER GROUP')}`);
    console.log(`check debugcode(): ${matthew.debugsCode(satan, 'being good')}`);
