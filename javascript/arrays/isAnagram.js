const isAnagram = (stringA, stringB) => {
  const normalize = (string) => {
    // remove non alphabetic chars
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  };
  return normalize(stringA) === normalize(stringB);
};
console.log(isAnagram('Night', 'Thing'));
console.log(isAnagram('Statue of Liberty', 'Built to stay free'));
