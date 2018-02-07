function fromJSONToHTMLTable(input) {
    let html = "<table>\n";
 let table = [];
    for (let i = 0;i<input.length;i ++){
   let obj = JSON.parse(input[i]);
   table.push(obj);
    }
//console.log(table);


    for (let arr of table) {


        let obj = arr;


        html += `     <tr>\n`;

        for (let key in obj) {
            html += `        <td>${htmlEscape(obj[key])}</td>\n`;

        }
        html += `      <tr>\n`


    }

    return html+"</table>";

    function htmlEscape(text) {
        let escapedHTML = text.toString().replace(/[\"&'<>]/g, function (a) {
            return {
                '"': '&quot;', '&': '&amp;', "'": '&#39;',
                '<': '&lt;', '>': '&gt;'
            }[a];
        });
        return escapedHTML;


    }
}

//console.log(fromJSONToHTMLTable(['{\"name\":\"Pesho\",\"position\":\"Promenliva",\"salary\":100000}','{\"name\":\"Teo\",\"position\":\"Lecturer\",\"salary\":1000}']))