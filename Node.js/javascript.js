var employee = {
    name: 'John',
    age: 40,
    skills: [
        {lang: 'java', exp: 3},
        {lang: 'C#', exp: 2},
        {lang: 'Web', exp: 4}
    ]
}

console.log(employee);

var company = {
    name: 'Acc',
    user: function(){
        return employee["name"];
    }
}

console.log(company["user"]());