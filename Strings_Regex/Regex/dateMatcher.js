function dateMatcher(input){

    let dateRegex = /\d{1,2}-\w{3}-\d{4}/g;


    console.log(input.match(dateRegex));
}

dateMatcher(" was born at 14-Jun-1980.\n" +
    "Today is 2333-Sep-2016. Next year starts at\n" +
    "1-Jan-2017 and ends at 31-Dec-2017.");