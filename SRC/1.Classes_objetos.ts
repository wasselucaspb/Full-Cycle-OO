class User{
  name: string;
  age: number;  

  constructor(name: string = "", age: number){
    this.name = name;
    this.age = age;
    console.log(`user created: ${this.name} - ${this.age} years`);
  }
}

const user1 = new User("Lucas", 25);
console.log(user1);
