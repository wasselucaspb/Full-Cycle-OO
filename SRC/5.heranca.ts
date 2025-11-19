export class User {
  constructor(
    private name: string,
    private age: number,
    private department: string // Added department parameter
  ) { }
  getReportEmployees(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`);
  }
}
export class Manager extends User { }

export class Administrator extends User {
  getReportAdmins(): void {
    console.log('getReportAdmins');
  }
}

const manager = new Manager('Bob', 40, 'Sales');
manager.getReportEmployees();

const admin = new Administrator('Carol', 35, 'IT');
admin.getReportEmployees();
admin.getReportAdmins();
