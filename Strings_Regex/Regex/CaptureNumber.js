function solve(inputArray) {
  let numbers =[];
  let regex = /\d+/g;
    let text = "";
  for (let i= 0;i<inputArray.length;i++){
      let currentSentence = inputArray[i];
      text+=currentSentence;
  }
  //console.log(text);
  let match = regex.exec(text);
  while (match){
      numbers.push(match[0]);
      match = regex.exec(text);
 // console.log(match);
  }
  console.log(numbers.join(" "));
}
/* solve( ['The300',
'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']); */