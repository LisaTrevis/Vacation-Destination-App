class Person {
    // constructor is implicitly run when a new instance of Person is created.
    constructor(name = 'Anonymous', age = 0) { // this provides a default value if one isn't provided when the class constructor is called.
        this.name = name;
        this.age = age;
    }
    // getGreeting must be explicity called in order to run.
    getGreeting() {
        // return 'Hi, ' + this.name + '!';
        // We can interpolate by using backticks, to avoid concatenation and whitespace errors:
        return `Hi, I'm ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

const me = new Person('Lisa Trevis', 42);
console.log(me);

const other = new Person();
console.log(other);

console.log(me.getGreeting());
console.log(me.getDescription());

console.log(other.getGreeting());
console.log(other.getDescription());


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    // We can completely override a method in the parent class, using the same name:
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            // description = description + 'some string' is the same as:
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

const me2 = new Student('Lisa Trevis', 42, 'Software Engineering');
console.log(me2);
console.log(me2.hasMajor());
console.log(me2.getDescription());

// To pass in age without name in this case, use undefined for the first arg:
const other2 = new Student('Melissa', undefined, 'Opera');
console.log(other2);
console.log(other2.hasMajor());
console.log(other2.getDescription());


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me3 = new Traveler('Lisa Trevis', 42, 'Alameda');
const other3 = new Traveler(undefined, undefined, 'Minneapolis');

console.log(me3.getGreeting());
console.log(other3.getGreeting());