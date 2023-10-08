// Задание 1 "Управление персоналом компании"

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере
// (имя и отдел).

// Пример использования классов:
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// Вывод:
// Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

// --------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 1');
console.log('--------------------------------------------------------------------');

class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, deportment) {
    super(name);
    this.deportment = deportment;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.deportment}`);
  }
}

const employee = new Employee('John Smith');
employee.displayInfo();

const manager = new Manager('Jane Doe', 'Sales');
manager.displayInfo();

// --------------------------------------------------------------------
// Задание 2 "Управление списком заказов"

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса:

// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

// --------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 2');
console.log('--------------------------------------------------------------------');

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.productsArr = [];
    this.totalCost = 0;
  }

  addProduct(product) {
    this.productsArr.push(product);
  }

  getTotalPrice() {
    this.totalCost = 0;
    this.productsArr.forEach((el) => {
      this.totalCost += el.price;
    });

    return `Вывод: ${this.totalCost}`;
  }
}

const order = new Order(12345);

const product1 = new Product('Phone', 500);
order.addProduct(product1);

const product2 = new Product('Headphones', 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600

// --------------------------------------------------------------------
