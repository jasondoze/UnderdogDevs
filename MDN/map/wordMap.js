const words =
  'Lorem ipsum dolor sit amet, velit latine reprehendunt in sea. Albucius suavitate an sit, in veri tractatos pro. Mel at omnium aliquando repudiandae, tractatos delicatissimi cu quo. Vix verterem mediocritatem ut, ut per fabulas vocibus. Has eripuit omittam iudicabit ad. Ad has gubergren adolescens, ut harum iisque dignissim duo, solum adolescens definitiones eu eos. Qui nihil vidisse aliquip ne. Recteque sadipscing ut ius, ei justo maiestatis sit. Eum eu quaeque adolescens. Verterem probatus eu his. Legere cetero suscipiantur no pro, aperiri eruditi per ea, utamur moderatius mea et. Ex mazim verterem mea. Ius ut exerci platonem, pro duis nonumy libris eu. Probo epicuri ad nam. Euismod appetere postulant eos an, at eum autem petentium. Homero suscipit eu eos. Ex brute equidem sed. Alii sint vis cu, est modo saepe cu. Enim choro sententiae vis cu. Id minim elitr utinam duo, et pri tollit repudiare.Erant utamur eos at, vel ad aliquip convenire, at expetenda similique intellegat usu. Vix ne mundi possit iudicabit, cu mel natum clita, eam soluta efficiendi ut. Nec cu congue suscipiantur definitionem, sea cu enim modus debet. Nam similique cotidieque consequuntur ex, eam cu causae fabulas. Mel dolorem delicata te.';

const splitter = words.replace(/[\.,!\?]/g, '').split(' ');
console.log(splitter);

// create a new map
const wordMap = new Map();
// loop through the words
splitter.forEach((word) => {
  // set count to 0
  let count = 0;
  // if the word exists as a key in the map
  if (wordMap.has(word)) {
    // retrieve the value for that key and store it in count variable
    count = wordMap.get(word);
  }
  // if word is not present, add it as a new key with a count of 1
  wordMap.set(word, count + 1);
});
console.log(wordMap);

const wordsArray = [...wordMap.entries()];
console.log(wordsArray);
