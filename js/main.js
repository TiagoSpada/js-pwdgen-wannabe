let password;
const UserName = prompt('Inserisci il tuo nome');
const UserLastName = prompt ('Inserisci il tuo cognome');
const UserFavoriteColor = prompt('Inserisci il tuo cognome preferito');
password = `${UserName}${UserLastName}${UserFavoriteColor}`;
document.getElementById("password").innerHTML = `${password}21`;

