function constructPerson(name = 'Anonymous', age = 0, hobbies = []) {
  const person = {
    name: name,
    age: age,
    hobbies: hobbies,
  };

  return person;
}
console.log(constructPerson());
