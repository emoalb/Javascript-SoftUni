function solve(string) {

  let regex = /^\_([a-zA-Z]+)$/g;
  let arr = string.split(" ");
    //  let regex  = new RegExp(/\b\_([a-zA-Z]+)[\t\n\r\s]\b/g);
    let words = [];
    for (let i=0;i<=arr.length;i++) {
        let match = regex.exec(arr[i]);
        while (match) {

            words.push(match[1]);
            match = regex.exec(arr[i]);
            // console.log(match);
        }
    }
    console.log(words.join(","));

}
solve("_inva&&&lidVariable _evenMoreInvalidVariable_ _validVariable");