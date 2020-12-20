var fs = require('fs');
var pdf = require('html-pdf');
module.exports.html_pdf= async (req, res) => {
    var options = { format: "letter" };
 var temp="Degree Certificate of Mr.{name}";
  
var temp2=temp.replace(/{name}/g,req.body.Name)
var year=req.body.year
 var html=`<h1> Degree Certificate</h1> 
 <p>${temp2}</p> <p>Completed in ${year}</P>
 <h1>Thank You</h1>`
 
    pdf.create(html, options).toFile('./Degree.pdf', function(err, result) {
        if (err) return console.log(err);
        console.log(result); // { filename: '/app/businesscard.pdf' }
        res.send(result)
      });


  
      console.log("completed")
}