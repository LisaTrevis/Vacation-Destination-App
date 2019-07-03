class Person {
    // constructor is implicitly run when a new instance of Person is created.
    constructor(name = 'Anonymous') { // this provides a default value if one isn't provided when the class constructor is called.
        this.name = name;
    }
    // getGreeting must be explicity called in order to run.
    getGreeting() {
        // return 'Hi, ' + this.name + '!';
        // We can interpolate by using backticks, to avoid concatenation and whitespace errors:
        return `Hi, ${ this.name }!`
    }
}

const me = new Person('Lisa Trevis'); // Results in Person { name: Lisa Trevis }
console.log(me);

const other = new Person(); // Results in Person { name: Anonymous }
console.log(other);

console.log(me.getGreeting());