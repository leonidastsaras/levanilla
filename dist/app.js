const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//static files (css, js, images, fonts, videos)
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');


//routing
app.get('/', (req, res) => {
  //res.send('<h1>Home page</h1>');
  //res.sendFile("./views/home.html", { root: __dirname });
  res.render("home");
});

app.get('/about', (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});

app.get('/contact', (req, res) => {
  //res.sendFile("./views/contact.html", { root: __dirname });
  res.render("contact");
});

app.get('/bath', (req, res) => {
  //res.sendFile("./views/bath.html", { root: __dirname });
  res.render("bath");
});

app.get('/soap', (req, res) => {
  //res.sendFile("./views/soap.html", { root: __dirname });
  res.render("soap");
});

app.get('/e-shop', (req, res) => {
  //res.sendFile("./views/e-shop.html", { root: __dirname });
  res.render("e-shop");
});

app.get('/faq', (req, res) => {
  //res.sendFile("./views/faq.html", { root: __dirname });
  res.render("faq");
});

app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404");
});