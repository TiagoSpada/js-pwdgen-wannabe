let password;
let RandomNumber;
const UserName = prompt('Inserisci il tuo nome');
console.log(UserName);
const UserLastName = prompt ('Inserisci il tuo cognome');
console.log(UserLastName);
const UserFavoriteColor = prompt('Inserisci il tuo cognome preferito');
console.log(UserFavoriteColor);
password = `${UserName}${UserLastName}${UserFavoriteColor}`;
RandomNumber = Math.floor(Math.random() * 100);
console.log(RandomNumber);
console.log(`${password}${RandomNumber}`);
document.getElementById("password").innerHTML = `${password}${RandomNumber}`;

