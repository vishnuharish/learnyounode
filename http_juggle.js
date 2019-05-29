const http = require('http');
const urls = process.argv.splice(2);
let results = [];

//Allocating the space for the results as per the url order

for( i=0; i < urls.length; i++){
    results[i] = null;
}

//http request for each url
for( i = 0 ; i < urls.length ; i++){
    //anonymous function with the parameter i (index)
    ((i) => {

        http.get(urls[i], (res) => {
            let result = "";
            res.setEncoding('utf8');
            res.on("data", (data) => { 
                //getting the response for the url
                result += data;
            });
            res.on("end", () => {
                //saving the result to results array in the allocated space
                results[i] = result;
                //To make count of the url array and the results array
                let resultsCount = 0;
                for( j=0; j<results.length; j++){
                    if(results[j] != null) resultsCount++
                }
                // once data fetching completed logging the results to the command line
                // if the number of times the loop ran and the count of the results are same, then display the results 
                if(resultsCount === results.length){
                    for(let j=0; j<results.length; j++){
                        console.log(results[j])
                    }    
                }
            });
        });
    })(i)
}

