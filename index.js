displayCurrentYear();
function displayCurrentYear() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let copy = document.getElementById('copyright').innerHTML = `&copy; ${year} Gustavo S.`;
}

// let form = document.getElementById('personalDataForm');
// let result = document.getElementById('result');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     let data = document.createElement('div');
//     const firstName = form.elements['firstName'].value;
//     const lastName = form.elements['lastName'].value;
//     const age = form.elements['age'].value;
//     const person = new Person(firstName, lastName, age);

//     result.innerHTML = '';
//     data.innerHTML = 
//             `
//             Nome completo: ${person.fullName()}
//             Idade: ${person.age}`;

//     result.appendChild(data);
// });

// class Person {
 
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     firstName;
//     lastName;
//     age;

//     fullName() { return `${this.firstName} ${this.lastName}` }
// }