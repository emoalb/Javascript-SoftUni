function solve(input){
    let alphabetDatabase = new Map();
for(let i =0;i<input.length;i++){
    let arr = input[i].split(" : ");
    let productName = arr[0];
    let price = arr[1];
    if (!alphabetDatabase.has(productName[0])){
        alphabetDatabase.set(productName[0],new Map())
    }
    if(!alphabetDatabase.get(productName[0]).has(productName)){
        alphabetDatabase.get(productName[0]).set(productName,price);
    }


}
let aphlabetic = Array.from(alphabetDatabase.keys()).sort();
aphlabetic.forEach(w => {
    let microalphabetic = Array.from(alphabetDatabase.get(w).keys()).sort();
    console.log(w);
microalphabetic.forEach(e=>{

    console.log(" " + e + ": "+ alphabetDatabase.get(w).get(e) );



});

});



}

//solve(['Appricot : 20.4','Fridge : 1500','TV : 1499','Deodorant : 10','Boiler : 300','Apple : 1.25','Anti-Bug Spray : 15', 'T-Shirt : 10']);