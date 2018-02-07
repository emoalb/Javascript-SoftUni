function solve(text) {
let regex = /www.[A-Za-z0-9\-]+[.]+[.a-z]+/g;
let match = regex.exec(text);
while (match){
    console.log(match[0]);
    match = regex.exec(text);
}
}
solve("\"Best Hotel Services!\" - www.rebel21.sedecrem.moc");