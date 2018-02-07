function solve(input){
let brands = new Map();
for (let i = 0 ; i<input.length;i++){

    let arr = input[i].split(" | ");
    let brand = arr[0];
    let model = arr[1];
    let price = Number(arr[2]);
    if(!brands.has(brand)){
        brands.set(brand,new Map);

    }
    if(!brands.get(brand).has(model)){
        brands.get(brand).set(model,price);
    }else {
      let oldprice =   brands.get(brand).get(model);
      let newprice = oldprice+price;
        brands.get(brand).set(model,newprice);
    }

    }
for (brand of brands.keys()){

    console.log(brand);
    for (model of brands.get(brand).keys()){
        console.log("###"+ model+ " -> " + brands.get(brand).get(model));
    }

}

}
//solve(["Audi | Q7 | 1000","Audi | Q6 | 100","BMW | X5 | 1000","BMW | X6 | 100","Citroen | C4 | 123", "Volga | GAZ-24 | 1000000","Lada | Niva | 1000000","Lada | Jigula | 1000000","Citroen | C4 | 22","Citroen | C5 | 10"])