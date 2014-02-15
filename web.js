var express = require('express');
var fs = require('fs');
var hbs = require('hbs');
var Quote = require('./models/Quote.js');
var routes = require('./routes');

var app = express();
app.use(express.logger());

app.configure(function(){
	app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());
    app.use(express.cookieParser());
	app.use(express.session({secret: '1234567890QWERTY'}));
});

var blogEngine = require('./dailyquotare');
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());


var restaurants=[
					{	
						name:"Bärengasse",
						menu:
							[
								{
									name:"RAVIOLI „BÄRENGASSE“",
									description:"Mit Rindsfilet und Gemüse gefüllt, dazu Salbeibutter und Parmesan",
									price:33
								},
								{
									name:"GEMÜSERISOTTO",
									description:"Weissweinrisotto mit grilliertem, mediterranem Gemüse",
									price:24
								},
							]
					}, 
					{	
						name:"Bohemia",
						menu:
							[
								{
									name:"Beetroot Potato Salad“",
									description:"in Salz gebackene Randen, Kartoffeln, Chornichos und Schalotten",
									price:19
								},
								{
									name:"Shrimps Fettuccine",
									description:"Fettuccine mit Black Tiger Crevetten, Ofentomaten, Rosmarin, Thymian und Dill",
									price:28
								},
							]
					},
					{	
						name:"Aura",
						menu:
							[
								{
									name:"Beef burger",
									description:"mit Kabissalat und gebackenen Kartoffelecken",
									price:32
								},
								{
									name:"Grillierte Black Tiger Krevetten",
									description:"mit Kräutern und Knoblauch",
									price:42
								},
							]
					}
				];

app.get('/', function(req, res){
	req.session.user;
	req.session.user={firstname:"John",lastname:"Doe"};

	 Quote.findAllQuotes(function(p) {
    	res.render('launchscreen',{title:""});
  	});
});

app.get('/definereservationrequest', function(req, res){
	 Quote.findAllQuotes(function(p) {
    	res.render('definereservationrequest',{title:"",test:req.session.test});
  	});
});

app.get('/add', function(req, res){
	res.render('add', {title:"Battle"});
});



app.post('/requestconfirmation', function(req, res){
	req.session.restaurantname = req.body.restaurantname;
	res.render('requestconfirmation', {title:"Battle", restaurantname:req.session.restaurantname, lastname:req.session.user.lastname});
	}
);

app.post('/selectrestaurant', function(req, res){
	req.session.date = req.body.date;
	req.session.restime = req.body.restime;
	req.session.guest = req.body.guest;

	res.render('selectrestaurant',{
		title:"",
		restaurants: restaurants,
		footer: "<div class='row'><div class='col-xs-4'><a href='/definereservationrequest'><div class='backbutton'></div></a></div><div class='col-xs-4'></div><div class='col-xs-4'><a href='/foodselection'><div class='forwardbutton'></div></a></div></div>"});

});
app.get('/selectrestaurant', function(req, res){
	res.render('selectrestaurant',{
		title:"",
		restaurants: restaurants,
		footer: "<div class='row'><div class='col-xs-4'><a href='/definereservationrequest'><div class='backbutton'></div></a></div><div class='col-xs-4'></div><div class='col-xs-4'><a href='/foodselection'><div class='forwardbutton'></div></a></div></div>"});

});

app.post('/requestreservation', function(req, res){
		res.redirect("/selectrestaurant");
	}
);

app.get('/foodselection', function(req, res){

	var menu = restaurants.filter(function (restaurant) { return restaurant.name == req.session.restaurantname });

	res.render('foodselection', {
		title:"",
		menus: menu[0].menu,
		footer: "<div class='row'><div class='col-xs-4'><a href='/selectrestaurant'><div class='backbutton'></div></a></div><div class='col-xs-4'></div><div class='col-xs-4'><a href='/submitorder'><div class='forwardbutton'></div></a></div></div>"});
});

app.get('/submitorder', function(req, res){

	res.render('submitorder', {
		title:"",
		footer: "<div class='row'><div class='col-xs-4'><a href='/foodselection'><div class='backbutton'></div></a></div><div class='col-xs-4'></div><div class='col-xs-4'></div></div>"});
});

app.get('/orderconfirmation', function(req, res){
	res.render('orderconfirmation', {
		title:"",
		lastname:req.session.user.lastname,
		restime:req.session.restime,
		date:req.session.date,
		restaurant:req.session.restaurantname
	});
});

/*
app.get('/', function(req, res){
	 res.redirect('/showroom');
});

app.get('/upload', function(req, res){
	res.render('upload', {title:"Battle"});
});

app.post('/uploadsubmit', function(req, res){
	fs.readFile(req.files.image.path, function (err, data) {

		var imageName = req.files.image.name
		var imgId;
		/// If there's an error
		if(!imageName){
			console.log("There was an error")
			res.redirect("/");
			res.end();

		} else {
			var description = req.body.description;
  			Sneaker.addSneaker(description, function(err, sneaker) {
    		if (err) throw err;
    		var newPath = __dirname + '/public/img/uploads/fullsize/' + sneaker._id +'.png';

		 	/// write file to uploads/fullsize folder
		  	fs.writeFile(newPath, data, function (err) {

		  	/// redirect to root
		  	res.redirect("/");
		  });
  		});		  
		}
	});
});



app.get('/battle', function(req, res){
	res.render('battle', {title:"Battle"});
});

app.get('/showroom', function(req, res){
	Sneaker.findAllSneaker(function(p) {
    	res.render('showroom',{title:"My Blog", sneakers:p});
  	});
});

app.get('/showroom/popular', function(req, res){
	Sneaker.findAllSneakerPopular(function(p) {
    	res.render('showroom',{title:"Popular", sneakers:p});
  	});
});

app.get('/showroom/new', function(req, res){
	Sneaker.findAllSneakerNew(function(p) {
    	res.render('showroom',{title:"New", sneakers:p});
  	});
});

app.get('/showroom/editorschoice', function(req, res){
	Sneaker.findAllSneakerEditorChoice(function(p) {
    	res.render('showroom',{title:"Editor's Choice", sneakers:p});
  	});
});


app.get('/sneaker/:id', function(req, res){
	
	Sneaker.findOne(req.params.id, function(p){
		res.render('article',{title:"test", sneaker:p});
	});

});

app.get('/admin', function(req, res){
    	res.render('admin',{title:"Editor's Choice"});
});

*/

app.get('bootstrapelements', function(req, res){
	res.render('bootstrapelements', {title:"bootstrapelements"});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});