interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string) {
    this.name = n;
    this.age = 30;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1 = new Person("Max");

user1.greet("Hi there - I am");
