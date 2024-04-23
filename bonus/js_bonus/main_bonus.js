let password;
const UserName = prompt('Inserisci il tuo nome');
console.log(UserName);
const UserLastName = prompt ('Inserisci il tuo cognome');
console.log(UserLastName);
const UserFavoriteColor = prompt('Inserisci il tuo cognome preferito');
console.log(UserFavoriteColor);
password = `${UserName}${UserLastName}${UserFavoriteColor}`;
console.log(`${password}21`);
document.getElementById("password").innerHTML = `${password}21`;

