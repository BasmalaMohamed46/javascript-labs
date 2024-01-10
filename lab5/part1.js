class PersonClass {
    constructor(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }

    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = "happy";
        } else if (hours < 7) {
            this.sleepMood = "tired";
        } else {
            this.sleepMood = "lazy";
        }
    }

    eat(meals) {
        switch (meals) {
            case 3:
                this.healthRate = 100;
                break;
            case 2:
                this.healthRate = 75;
                break;
            case 1:
                this.healthRate = 50;
                break;
            default:
                console.error("Invalid number of meals");
        }
    }

    buy(items) {
        this.money -= items * 10;
    }
}

class Employee extends PersonClass {
    static idCounter = 0;
    #id;
    #salary;

    constructor(fullName, money, sleepMood, healthRate, email, workMood, salary, isManager) {
        super(fullName, money, sleepMood, healthRate);
        this.#id = ++Employee.idCounter;
        this.email = email;
        this.workMood = workMood;
        this.#salary = salary;
        this.isManager = isManager;
    }

    work(hours) {
        if (hours === 8) this.workMood = "happy";
        else if (hours > 8) this.workMood = "tired";
        else this.workMood = "lazy";
    }

    set salary(value) {
        if (value >= 1000) this.#salary = value;
        else this.#salary = 1000;
    }

    get salary() {
        return this.#salary;
    }

    set id(value) {
        if (value >= 0) {
            this.#id = value;
        }
    }
    set healthRate(value) {
        if (value >= 0 && value <= 100) {
            this._healthRate = value;
        } else {
            console.error("Invalid health rate value");
        }
    }

    get healthRate() {
        return this._healthRate;
    }

    get id() {
        return this.#id;
    }
}

class Office {
    constructor() {
        this.employees = [];
    }

    hire(newEmployee) {
        this.employees.push(newEmployee);
        return `Hired employee: ${newEmployee.fullName} with ID ${newEmployee.id}`;
    }

    getAllEmployees() {
        if (this.employees.length === 0) {
            return "No employees";
        }

        var employeeInfo = this.employees.map(emp => {
            if (emp.isManager) {
                return `Manager: ${emp.id}, ${emp.email}, ${emp.workMood}, ${emp.healthRate}`;
            } else {
                return `Employee: ${emp.id}, ${emp.email}, ${emp.workMood}, ${emp.salary}, ${emp.healthRate}`;
            }
        });

        return employeeInfo.join('\n');
    }

    getEmployee(empId) {
        var employee = this.employees.find(emp => emp.id === empId);
        if (employee) {
            if (employee.isManager) {
                return `Manager: ${employee.id}, ${employee.email}, ${employee.workMood}, ${employee.healthRate}`;
            } else {
                return `Employee: ${employee.id}, ${employee.email}, ${employee.workMood}, ${employee.salary}, ${employee.healthRate}`;
            }
        } else {
            return "Employee not found.";
        }
    }

    fire(empId) {
        var index = this.employees.findIndex(emp => emp.id === empId);
        if (index !== -1) {
            var employee = this.employees[index];
            this.employees.splice(index, 1);
            return `Fired employee: ${employee.fullName} with ID ${employee.id}`;
        } else {
            return "Employee not found.";
        }
    }
}

function menu() {
    var office = new Office();

    do {
        var choice = prompt("Menu: \n 1- Add employee (enter 'add') \n 2- Get employee (enter 'get') \n 3- Fire employee (enter 'fire') \n 4- Get all employees (enter 'all') \n 5- Exit (enter 'q')");
        switch (choice) {
            case "add":
                var isMngr = prompt("1- Add manager (enter 'mngr') \n 2- Add employee (enter 'nrml')");
                var isManager;
                if(isMngr === "mngr") {
                    var isManager = true;
                }
                else {
                    var isManager = false;
                }
                var fullName = prompt("Enter full name");
                var money = prompt("Enter money");
                var sleepMood = prompt("Enter sleep mood");
                var healthRate = prompt("Enter health rate");
                var email = prompt("Enter employee email");
                var workMood = prompt("Enter work mood");
                var salary = prompt("Enter salary");

                var newEmployee = new Employee(fullName, money, sleepMood, healthRate, email, workMood, salary, isManager);

                alert(office.hire(newEmployee));
                break;
            case "get":
                var empId = prompt("Enter employee id");
                alert(office.getEmployee(parseInt(empId)));
                break;
            case "fire":
                var empIdToFire = prompt("Enter employee id");
                alert(office.fire(parseInt(empIdToFire)));
                break;
            case "all":
                alert(office.getAllEmployees());
                break;
            case "q":
                choice= null;
                return;
        }
    } while (choice);
}

menu();
