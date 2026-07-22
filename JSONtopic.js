const person={
    name: "Zain",
    age :22
//basic javascript object
}
// {
//     "name":"Zain",
//     "age":22
//     //JSON structure
// }
//convert JSON to normal javascript text
// JSON.parse()
const jsonText = '{"name":"Ali","age":20}';
const cJson = JSON.parse(jsonText);
console.log(cJson.name);
//convert javascript file into JSON
//JSON.stringify()
const newperson = {
    name:"zain",
    age:22
}
const json = JSON.stringify(newperson);
console.log(json);
//Question, why is it important
//why we need JSON
const country={
    city: "Lahore",
};
const result = JSON.stringify(country);
console.log(typeof result);
//practice question
const book={
    title: "JavaScript",
    pages:300
}
const jsonBook = JSON.stringify(book);
console.log(jsonBook);

