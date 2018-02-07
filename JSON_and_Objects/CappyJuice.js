function solve(input) {
    let products = {};
let bottles = {};
    for (let i = 0; i < input.length; i++) {
        let arr = input[i].split(" => ");
        if(products[arr[0]]===undefined) products[arr[0]] =  Number(arr[1]);
        else products[arr[0]]+= Number(arr[1]);


        if(products[arr[0]]>=1000){
            if(bottles[arr[0]] ===undefined){
                bottles[arr[0]] = products[arr[0]];
                products[arr[0]]=0;
            }
            else {
                bottles[arr[0]] += products[arr[0]];
                products[arr[0]]=0;
            }
            };

        }

       // console.log(arr);
        //log(products);

    for (let product of Object.keys(bottles)){
        bottles[product]+=products[product];
bottles[product]=Math.floor(bottles[product]/1000);
if(bottles[product]!==0)console.log(product + " => " + bottles[product]);
            }

}
//solve(['Kiwi => 234','Pear => 2345','Watermelon => 3456','Kiwi => 4567','Pear => 5678','Watermelon => 6789']);


