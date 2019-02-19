//require the just installed express app
var express = require('express');
//then we call express
var app = express();
var axios = require('axios');
var bodyParser = require("body-parser");

var bestSellers=[]
var task=[]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');

/*
axios.get('https://rubybookre.herokuapp.com/dymocks')
  .then(response => {
    bestSellers = response.data
    console.log(bestSellers);

  })
  .catch(error => {
    console.log(error);
  });
  
  */
//takes us to the root(/) URL
app.get('/', function(req, res){
   res.render('index',{task:task,bestSellers:bestSellers});
});

app.get('/aboutus',function(req,res){

  res.render('aboutus')
});

app.get('/investmentoption',function(req,res){

  res.render('investmentoption')
});

app.get('/investmentrelation',function(req,res){
  
  res.render('investmentrelation')
});

app.get('/missionandvalue',function(req,res){
 
  res.render('missionandvalue')
});

app.get('/newsandmedia',function(req,res){
  
  res.render('newsandmedia')
});

app.get('/partners',function(req,res){

  res.render('partners')
});

app.get('/projects',function(req,res){
  res.render('projects')
});


/*
app.post('/addtask', function (req, res) {
    console.log("called")
    var newTask = req.body.newtask;

//test
//add the new task from the post route into the array
    task.push(newTask);
    console.log(task)
//after adding to the array go back to the root route
    res.redirect("/");
});

app.post('/removetask',function(req,res){

  var taskChecked = req.body.check
  for(i=0;i<taskChecked.length;i++){
    var index =  task.indexOf(taskChecked[i])
    console.log(index)
      task.splice(index,1)
  }
console.log("task finished:" + taskChecked)
console.log(task)
  taskCompleted.push(taskChecked)
  res.redirect("/")
});

*/
//the server is listening on port 3000 for connections
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});