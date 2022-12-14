/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

*/

function getDomain(url) {
  // Use a regular expression to match the domain name in the URL
  const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
  const matches = url.match(domainRegex);

  // If the URL doesn't match the regex, return null
  if (!matches) return null;

  // Get the captured group (i.e. the domain name) from the matches
  const domain = matches[1];

  // Split the domain name by dots and take the first part (i.e. the name)
  const parts = domain.split('.');
  const name = parts[0];

  return name;
}

console.log(getDomain('https://github.com/carbonfive/raygun')); // Returns "github"
console.log(getDomain('http://www.zombie-bites.com')); // Returns "zombie-bites"
console.log(getDomain('http://www.google.co')); // Returns "google"
console.log(getDomain('https://www.cnet.com')); // Returns "cnet"

console.log(getDomain('google.com')); // Returns "google"
console.log(getDomain('google.co.jp')); // Returns "google"

console.log(getDomain('xakep')); // Returns "xakep"

console.log(getDomain('youtube.com')); // Returns "youtube"
console.log(getDomain('qnet.com')); // Returns "qnet"
