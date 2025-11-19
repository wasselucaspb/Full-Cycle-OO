export class User {	
    constructor(
        private name: string,
        private age: number,
        private address: Address[] // Added addresses parameter
    ) {}  
    showAddresses(): Address[] {
        this.address.forEach(address => {
            console.log(`Street: ${address.street}, City: ${address.city}, Country: ${address.country}`); 
        });
        return this.address;
    }
}

export class Address {
    constructor(
        public street: string,
        public city: string,
        public country: string
    ) {}   
}

const user =  new User('Alice', 30,[
  new Address('123 Main St', 'Wonderland', 'Fiction'),
  new Address('456 Side St', 'Wonderland', 'Fiction'),  
]);
    
user.showAddresses();