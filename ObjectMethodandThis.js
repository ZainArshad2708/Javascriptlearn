const person = {
    name: "Zain",
    greet(){
        console.log(this.name);
    }
}
person.greet();
const car = {
    brand: "Honda",
    showBrand(){
        console.log(`Brand: ${this.brand}`);
    }
}
car.showBrand();
const student={
    name:"Ali",
    introduce(){
        console.log(`I am ${this.name}`);
    }
};
const anotherStudent = {
    name : "Hassan",
    introduce: student.introduce
}
anotherStudent.introduce();
//coding task, add a method showInfo()
const laptop = {
    brand : "HP",
    model : "EliteBook",
    showInfo(){
        console.log(this.brand, this.model);

    }
};
laptop.showInfo();
//create a bank account that increases and decrease balance
const bankAccount={
    balance : 1000,
    deposit(amount){
        this.balance+=amount;
    },
    withdraw(amount){
        this.balance-=amount;
    }
}
bankAccount.deposit(500);
bankAccount.withdraw(200);
console.log(bankAccount.balance);