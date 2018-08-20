var path = require("path");
var cheerio = require("cheerio");
var request = require("request");

module.exports = function (app) {

    app.get("/scrape", function(req, res) {
  
        request("http://www.foxnews.com", function(error, response, html) {
        
          results = [];
          var $ = cheerio.load(html);

          $("h2.title").each(function(i, element) {
      
          var link = $(element).children().attr("href");
          var title = $(element).children().text().split(" ");
          
          results.push(title);
        });
      
        results = [].concat.apply([], results);

        console.log("scrape works");
        console.log(results)
        res.json(results);
      });
      });

};