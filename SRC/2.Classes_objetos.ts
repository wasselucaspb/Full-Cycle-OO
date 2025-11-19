
export class User{
  private name: string;
   private age: number;  

  constructor(nameC: string = "", ageC: number){
    if(ageC <=0 || ageC >150){
      throw new Error("--Invalid age--");
    }
    this.name = nameC;
    this.age = ageC;
    console.log(`user created: ${this.name} - ${this.age} years`);
  }
  changeName(newAge:number):void{
    if(newAge <=0 || newAge >150){
      throw new Error("--Invalid age--");
    }
    this.age = newAge;
  }
}

const user1 = new User("Lucas", 33);
console.log(user1);
user1.changeName(15);
console.log(user1);
const user2 = new User("Ana", 28);
console.log(user2);
user2.changeName(32);
console.log(user2);
