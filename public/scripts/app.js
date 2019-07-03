'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    // constructor is implicitly run when a new instance of Person is created.
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        // this provides a default value if one isn't provided when the class constructor is called.
        this.name = name;
        this.age = age;
    }
    // getGreeting must be explicity called in order to run.


    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            // return 'Hi, ' + this.name + '!';
            // We can interpolate by using backticks, to avoid concatenation and whitespace errors:
            return 'Hi, I\'m ' + this.name + '!';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' years old.';
        }
    }]);

    return Person;
}();

var me = new Person('Lisa Trevis', 42);
console.log(me);

var other = new Person();
console.log(other);

console.log(me.getGreeting());
console.log(me.getDescription());

console.log(other.getGreeting());
console.log(other.getDescription());

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major;
        }
        // We can completely override a method in the parent class, using the same name:

    }, {
        key: 'getDescription',
        value: function getDescription() {
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

            if (this.hasMajor()) {
                // description = description + 'some string' is the same as:
                description += ' Their major is ' + this.major + '.';
            }
            return description;
        }
    }]);

    return Student;
}(Person);

var me2 = new Student('Lisa Trevis', 42, 'Software Engineering');
console.log(me2);
console.log(me2.hasMajor());
console.log(me2.getDescription());

// To pass in age without name in this case, use undefined for the first arg:
var other2 = new Student('Melissa', undefined, 'Opera');
console.log(other2);
console.log(other2.hasMajor());
console.log(other2.getDescription());

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'getGreeting',
        value: function getGreeting() {
            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);

            if (this.homeLocation) {
                greeting += ' I\'m visiting from ' + this.homeLocation + '.';
            }
            return greeting;
        }
    }]);

    return Traveler;
}(Person);

var me3 = new Traveler('Lisa Trevis', 42, 'Alameda');
var other3 = new Traveler(undefined, undefined, 'Minneapolis');

console.log(me3.getGreeting());
console.log(other3.getGreeting());
