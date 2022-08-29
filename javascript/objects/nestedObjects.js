let user = {
  id: 3,
  name: 'Clementine Bauch',
  username: 'Samantha',
  email: 'Nathan@yesenia.net',
  address: {
    street: 'Douglas Extension',
    suite: 'Suite 847',
    city: 'McKenziehaven',
    zipcode: '59590-4157',
    geo: {
      lat: '-68.6102',
      lng: '-47.0653',
    },
  },
  phone: '1-463-555-4447',
  website: 'ramiro.info',
  company: {
    name: 'Romaguera-Jacobson',
    catchPhrase: 'Face to face bifurcated interface',
    corporate_tagline: 'e-enable strategic applications',
  },
};

console.log(user.email);
console.log(user.address.geo.lat);
console.log(user.phone);
console.log(user.company.corporate_tagline);

