//old version
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.fulName = function() {
    return this.name + ' ' + this.surname;
}

Person.prototype.printInfo = function() {
    console.log(this.fulName());
}
var pera = new Person('Pera', 'Peric');
pera.printInfo();



function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.getData = function() {
    return this.name + ' ' + this.surname + ', salary: ' + this.salary;
};
Employee.prototype.getSalary = function() {
    console.log(this.salary);
};
Employee.prototype.increaseSalary = function() {
    this.salary = this.salary * 1.1;
};

var pera = new Employee('Pera', 'Peric', 'manager', 1200);
console.log(pera);



function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getSpecialization = function() {
    console.log(this.specialization);
}




function Manager(name, surname, job, salary, specialization, department) {
    Developer.call(this, name, surname, job, salary, specialization);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function() {
    console.log(this.department);
};
Manager.prototype.changeDepartment = function(newDepartment) {
    this.department = newDepartment;
};

var pera = new Manager('Pera', 'Peric', 'manager', 1500, 'sales');
console.log(pera);
pera.changeDepartment('marketing');
console.log(pera);



