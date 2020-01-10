var fs =require('fs');

// var read_str  = fs.readFileSync('hi.txt', 'Utf8');
// console.log(read_str);
fs.readFile("hi.txt", "utf8", function(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
