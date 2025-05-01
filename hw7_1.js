var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        "<email":"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

let re = /^[a-zA-Z0-9]+[.]?[a-zA-Z0-9]+(@yahoo.com|@gmail.com)$/gm;
function getArrayWithCorrectEmails (arr,regex) {
    let arrayWithEmails = [];
    arr.forEach(function (currentValue){
        for (const key in currentValue){
            if (key ==="email" || key ==="<email")
                arrayWithEmails.push(currentValue[key]);
        }
    })
    console.log(arrayWithEmails);
return arrayWithEmails.filter(function (email) {
return regex.test(email);
});
}

let newArr = getArrayWithCorrectEmails(arr,re);
console.log(newArr);
