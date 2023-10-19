let arr = [{
    "name":"Soubhik",
    "_id":"okaosdk"
},
{
    "name":"Siddhid",
    "_id":"okaosdk"
},
{
    "name":"Sarbojeet",
    "_id":"okaosdk"
}];



arr.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

console.log(arr);
