var result = 0
var values = process.argv.slice(2)
var result = 0
values.forEach(value => {
    result += Number(value)
});
console.log(result);