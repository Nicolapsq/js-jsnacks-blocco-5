const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

console.log(people);

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const newPeople = people.map(nome => nome.name);

console.log(newPeople);
