require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;
const content = {
  tittle: 'Node course',
  name: 'William S.',
};

// setting hbs(Handelbars) as views manager
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//As we have the public folder use in the main route, the next command 'app.get('/' ...' will not be executed
//By default, serve static files, look for 'index.html' file
app.use(express.static('public'));

app.get('/', (req, res) => {
  //In this way, we are sending information through hbs
  res.render('home', content);

  // // //   //Next block of code will not executed because of the use static folder that we used before (DEPRECATED)
  //   res.sendFile(__dirname + '/public/templated-roadtrip/generic.html');
});
app.get('/generic', (req, res) => {
  res.render('generic', content);

  // res.sendFile(__dirname + '/public/templated-roadtrip/generic.html');
});

app.get('/elements', (req, res) => {
  res.render('elements', content);

  //   res.sendFile(__dirname + '/public/templated-roadtrip/elements.html');
  //   res.send('Sapo');
});
app.get('*', (req, res) => {
  //There are two ways to send info to 404 page:
  //by default as following or...
  //   res.send('404 | Page not found');

  res.sendFile(__dirname + '/public/404Page.html');
});

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
