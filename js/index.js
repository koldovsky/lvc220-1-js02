// // for (var i = 10; i >= 2; i--) {
// //     if (i % 2 === 0) {
// //         document.write(i);
// //         document.write('<br>');
// //     }
// // }

// var studentAges = [20, 23, 35, 31];
// studentAges.push(50);
// //document.write(studentAges);
// // for (var i = 0; i < studentAges.length; i++) {
// //     document.write(studentAges[i] + '<br>');
// // }

// // Variant 1
// studentAges.forEach(function (el) {
//     document.write(el + '<br>');
// });

// // // Variant 2
// // studentAges.forEach(printStudent);
// // function printStudent(el) {
// //     document.write(el + '<br>');
// // }


// Dictionary, Hash Table

// var students = {
//     Ira: 23,
//     Petro: 29,
//     Ivan: 34
// }

// // document.write(students['Petro']);

// students['Maryan'] = 40;

// // document.write('<br>');

// // document.write(students['Maryan']);

// var counter = 0;
// for (var key in students) {
//     counter++;
//     document.write(key + ' : ' + students[key]);
//     document.write('<br>');
// }
// document.write('Number of items: ' + counter);

var petro = {
    name: 'Petro',
    age: 30,
    say: function () {
        document.write('My name is ' + this.name + 
         ' my age is ' + this.age + '<br>');
    }
}

petro.say();

function Student (name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        document.write('My name is ' + this.name + 
         ' my age is ' + this.age + '<br>');
    }
    return this;
}

var ivan = new Student('Ivan', 20);
ivan.say();
var ira = new Student('Ira', 26);
ira.say();

