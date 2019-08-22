let express = require("express");
let request = require("request")
let app = express();
let PORT = 3000;

app.set("view engine", "ejs");

// request("", function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         let parseBody = JSON.parse(body)
//         console.log(parseBody)
//     } else {
//         console.log("ERROR", error)
//     }

// })


//"http://omdbapi.com/?s=star&apikey=thewdb" API
app.get("/results", function(req, res) {
    request("http://omdbapi.com/?s=star&apikey=thewdb", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            let parseBody = JSON.parse(body)
            console.log(parseBody.Search[0])
            res.render("resultsDisplay", {
                moviesData: parseBody
            })
        } else {
            console.log("ERROR", error)
            res.send(error)
        }
    })
})

app.listen(PORT, function() {
    console.log("the SERVER is now ON " + "http://localhost:" + PORT)
})