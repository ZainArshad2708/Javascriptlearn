const user1={
    name: "Zain",
};
console.log(user1.address?.city);
const user2 = {
    address:{
        city:"Karachi",
    }
} ;
console.log(user2.address?.city);
const student = {};
console.log(student.school?.name);
//coding task
const employee = {
    name: "Ahmed",
    company: {
        name:"xyzCompany",
    }
};
//use optional chaining ro print the company name
console.log(employee.company?.name);