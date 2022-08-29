// Given a name, "greetCustomer" returns a greeting based on how many times
// that customer has visited the restaurant. Please refer to the customerData object.
// The greeting should be different, depending on the name on their reservation.
// Your function should not alter the customerData object to update the number of visits.
// Do not hardcode to the exact sample data. This is a BAD IDEA:
// if (firstName === 'Joe') {
// do something

// Case 1 - Unknown customer ( Name is not present in customerData ):
let customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

let greetCustomer = (firstName) => {
  // console.log(visits);
  if (customerData[firstName] === undefined) {
    return 'Welcome is this your first time?';
  }
  let visitsObject = customerData[firstName];
  if (visitsObject.visits === 1) {
    return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
  } else {
    return `Welcome back, ${firstName}! So glad to see you again!`;
  }
};
let output = greetCustomer('Joe');
console.log(output);

// Case 1 - Unknown customer ( Name is not present in customerData ):
// --> 'Welcome! Is this your first time?'
// Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

// var output = greetCustomer('Joe');
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
// // Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

// var output = greetCustomer('Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
