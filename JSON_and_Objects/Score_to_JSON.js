function scoreToHTMLTable(scoreJSON) {

let html = "<table>\n";

html += "  <tr><th>name</th><th>score</th></tr>\n";


let arr = JSON.parse(scoreJSON);
for (let obj of arr)
    html += `   <tr><td>${htmlEscape(obj['name'])}`+`</td><td>${obj['score']}</td></tr>\n`;
return html + "</table>";

function htmlEscape(text) {
    let escapedHTML = text.replace(/[\"&'<>]/g, function (a) {
        return {
            '"': '&quot;', '&': '&amp;', "'": '&#39;',
             '<': '&lt;',  '>': '&gt;'
        }[a];
    });
    return escapedHTML;
}


}
console.log(scoreToHTMLTable('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));