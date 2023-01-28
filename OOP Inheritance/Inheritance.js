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

var pera = new Developer('Pera', 'Peric', 'manager', 1500, 'sales');
console.log(pera);


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


//new version

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname)
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return this.name + ' ' + this.surname + ', salary: ' + this.salary;
    }
    getSalary() {
        console.log(this.salary);
    }
    increaseSalary() {
        this.salary = this.salary * 1.1;
    }
}


class Developer extends Employee {
    constructor (name, surname, job, salary, specialization) {
        super(name, surname, job, salary)
        this.specialization;
    }
    getSpecialization() {
        console.log(this.specialization);
    }
}


class Manager extends Developer {
    constructor (name, surname, job, salary, specialization, department) {
        super (name, surname, job, salary, specialization)
        this.department;
    }
    getDepartment() {
        console.log(this.department);
    }
    changeDepartment() {
        this.department = newDepartment;
    }
}



//---Applications---

class Applications {
    constructor (name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
    }
    isCCLicence() {
        return this.licence === 'CC';
    }
    like() {
        return this.stars + 1;
    }
    showStars() {
        console.log(this.stars);
    }
    getData() {
        return this.name + ', ' + this.licence + ', ' + this.stars;
    }
}
var app = new Applications('La La', 'CC', 2);
console.log(app);


class WebApp extends Applications {
    constructor (name, url, technologies, licence, stars) {
        super (name, licence, stars)
        this.url = url;
        this.technologies = technologies;
    }
    getData() {
        return this.name + ', ' + this.url + ', ' + this.technologies + ', ' + this.licence + ', stars: ' + this.stars;
    }
    reactBased() {
        return this.technologies === 'React';
    }
}
var app = new WebApp('La La', 'https:/lala.com', 'React', 'A', 3);
console.log(app);
console.log(app.reactBased());
console.log(app.getData());


class MobileApp extends Applications {
    constructor (name, licence, stars, platforms) {
        super (name, licence, stars)
        this.platforms = platforms;
    }
    getData() {
        var info = super.getData();
        console.log(info + ' ' + this.platforms);
    }
    forAndroid() {
        return this.platforms === 'Android'
    }
}
var app = new MobileApp('La La', 'CC', 4, 'Android');
console.log(app);
console.log(app.getData()); // why undefined?
