var express = require('express');
var firebase = require('firebase');
var bodyParser = require('body-parser');
var i = 1;

var app = express()
app.use(bodyParser.json()); //need to parse HTTP request body

var cors = require('cors');
app.use(cors());

var firebaseConfig = {
    apiKey: "AIzaSyAaFZR7vrPOFROa0YENQXskQs9h7imkT-o",
    authDomain: "glassesstoredb.firebaseapp.com",
    databaseURL: "https://glassesstoredb.firebaseio.com",
    projectId: "glassesstoredb",
    storageBucket: "",
    messagingSenderId: "458504403227",
    appId: "1:458504403227:web:af7adefb1de8590b"
};



firebase.initializeApp(firebaseConfig);

//Fetch instances
app.get('/', function (req, res) {

	console.log("HTTP Get Request");
	var glassesReference = firebase.database().ref("/glasses/");

	//Attach an asynchronous callback to read the data
	glassesReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					glassesReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

//Create new instance
app.put('/', function (req, res) {

	console.log("HTTP Put Request");

	var id = req.body.id;
	var brand = req.body.brand
	var color = req.body.color
	var price = req.body.price
	var title = req.body.title
	var type = req.body.type
	var url = req.body.url

	var referencePath = '/glasses/' + 'id_' + id;
	var glassesReference = firebase.database().ref(referencePath);
	glassesReference.set({brand: brand, color: color, price: price, title: title, type: type, url: url}, 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			});
});


//Update existing instance
app.post('/', function (req, res) {

	console.log("HTTP POST Request");

	//var id = req.body.id;
	var brand = req.body.brand
	var color = req.body.color
	var price = req.body.price
	var title = req.body.title
	var type = req.body.type
	var url = req.body.url
	var referencePath = '/glasses/' + 'id_' + i;
	
	var glassesReference = firebase.database().ref(referencePath);
	glassesReference.set({brand: brand, color: color, price: price, title: title, type: type, url: url}, 
				 function(error) {
					if (error) {
						res.send("Data could not be updated." + error);
					} 
					else {
						res.send("Data updated successfully.");
					}
			    });
	i++
	
});

//Delete an instance
app.delete('/:id', function (req, res) {
	var referencePath = '/glasses/' + 'id_' + req.params.id;
	
	var glassesReference = firebase.database().ref(referencePath);
	glassesReference.remove()
	
});

var server = app.listen(5000, function () {
  
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});