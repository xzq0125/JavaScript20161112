/**
 * Created by Tse on 2016/11/12.
 */

//定义函数
// function add(a, b) {
//     return a + b;
// }
//
// alert(add(11,22));

//定义类
// var Person = {
//     name:"xzq",
//     age:20,
//     paly:function () {
//         return "玩";
//     }
// }
//
// alert(Person.paly())


//定义类
// function Person() {
//
// }
// //原型量
// Person.prototype = {
//     name:"xzq",
//     age:20,
//     play:function () {
//         return "玩";
//     }
// }
// var p = new Person();
// document.write(p.play());


//闭包
(function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.play = function () {
        document.write("Person" + this.name);
    }

    window.Person = Person;
}());

(function () {

    function Student(name) {
        this.name = name;
    }

    Student.prototype = new Person("dssd");
    var superPlay = Student.prototype.play();
    Student.prototype.play = function () {
         //superPlay.call(this)
        document.write("Student" + this.name);
    }
    window.Student = Student;
}());

var stu = new Student("xzq")
stu.play()


































