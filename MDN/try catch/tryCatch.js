try {
  console.log('start of the trys');

  unicycle;

  console.log('end of the trys -never reached');
} catch (err) {
  console.log('error occurred: ' + err);
} finally {
  console.log('Always run no matter what');
}
console.log('...then the exectuion continues');

let json = '{"age": 33}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError('incomplete data: no name');
  }
  console.log(user.name);
} catch (error) {
  console.log('JSON error: ' + error);
}
