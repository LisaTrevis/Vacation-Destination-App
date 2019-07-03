'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    // constructor is implicitly run when a new instance of Person is created.
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';

        _classCallCheck(this, Person);

        // this provides a default value if one isn't provided when the class constructor is called.
        this.name = name;
    }
    // getGreeting must be explicity called in order to run.


    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            // return 'Hi, ' + this.name + '!';
            // We can interpolate by using backticks, to avoid concatenation and whitespace errors:
            return 'Hi, ' + this.name + '!';
        }
    }]);

    return Person;
}();

var me = new Person('Lisa Trevis'); // Results in Person { name: Lisa Trevis }
console.log(me);

var other = new Person(); // Results in Person { name: Anonymous }
console.log(other);

console.log(me.getGreeting());
