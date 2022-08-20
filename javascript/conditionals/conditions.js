let nonsense = 'blog trust fund tattooed williamsburg poke roof party';
let hasOk = nonsense.indexOf('ok') > -1; // true
// console.log(hasOk);
if (hasOk) {
  // true, yeet
  console.log('yeet'); // yeet
} else if (nonsense.length > 10) {
  console.log('yo');
} else {
  console.log('no');
}

let hasZoo = nonsense.indexOf('zoo') > -1; // false
// console.log(hasZoo);
let hasFun = nonsense.indexOf('fun') > -1; // true

if (hasZoo && hasOk) {
  console.log('cool');
} else if (hasOk) {
  // true, rad
  console.log('rad');
} else if (hasFun) {
  console.log('dope');
} else {
  console.log('nope');
}

let q = 25;
if (q % 3 === 0 && q % 5 === 0) {
  // false && true, -false
  console.log('both');
} else if (q % 3 === 0 || q % 5 == 0) {
  // false || true -true  either
  console.log('either');
} else {
  console.log('neither');
}

let r = 9;
if (r % 3 === 0 && r % 5 === 0) {
  // true && false  -false
  console.log('both');
} else if (r % 3 === 0 || r % 5 == 0) {
  // true || false  -true either
  console.log('either');
} else {
  console.log('neither');
}

let s = 15;
if (s % 3 === 0 && s % 5 === 0) {
  // true && true both
  console.log('both');
} else if (s % 3 === 0 || s % 5 == 0) {
  console.log('either');
} else {
  console.log('neither');
}
let str =
  'AIICXAIBAAKBgQCuw0YyucjI9bf7yRhIkyg4Ru6kYU7O6fIn2JoFDzCZNkzDdsuXFGh6BXNvbu8\
 uZUT289ERzYP1QjryMEKWzcbtsioyQApL7AgOZyFc3JJ7wvupHhIj2sqxJNtpAh7HQFG08rYh2Pb3HwOm83rb\
 TomM6LnnjooGcoDeuWkuPqXsRlwIDAQABAoGAeQkbPBR5n9y2QLaEjcDGv7dVpFiMGHMaZZVDX34rZPy1EkZNZ\
 qlQU0jopLVvLyLESMh9A7gKhqoyMAbgZPpdb0CvniTJPpKYk24mLBeym8rBMW3XBmKk1xIOcJPGXMxeJW61jxPg\
 6doah0aCIjf8n0Z8t8B81kLFojpECQQDzlCp0Nzka3AVZVPdBuuPg0fzeV8ugpiPEp6wQLjIMDFqYtGoAOEy4J\
 pkmkK7zwsQsHZ8jbOtqIFdRLPrvAkEAruU321Ie1CnYCHX4Q79vLcDeWOUpdzEHp2uzDIfzP1gv7RIktGgSZWKh\
 rnNWdeH4Y0CFb9lu6TQYJwNJvug2QJBANX0m3Uds9P9pLbQlI9WWmAtYqIZrsBElcAjOgAik0uOfawholNiw5B3\
 ADvIYqPkLW4dGk1dO6zxW8ZF83MdMCQHGfhxLuFgsOBSfF7Bj4UX6T9FGhUGSXiqUsd06E2mMRLAjWUUUw82DLwu\
 cxMrSsV4z1aN57asC8YuQ9FkCQGirlVCt4ccXeGLCHcCsI8AYQJFRzbMs381M16jEpnaKUGrtdbMW018gWJ0EoD4t\
 S2YZpr1hEbtiOkPJaaTKQ';

if (str.indexOf('coDe') > -1) {
  console.log('found');
} else {
  console.log('not found');
}
console.log(str.indexOf('coDe'));
