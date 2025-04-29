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

let result = arr.filter( (el) => (el.email || el["<email"]) | el.email.search(/(([\w]+.[\w]+)|[\w]+)@((yahoo.com)|(gmail.com))/gm));
console.log(result);
