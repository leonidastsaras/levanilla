const express = require('express')
const bodyParser = require('body-parser')
const fs = require('node:fs');

const app = express()
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//static files (css, js, images, fonts, videos)
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');


//routing
app.get('/', (req, res) => {
  //res.send('<h1>Home page</h1>');
  //res.sendFile("./views/home.html", { root: __dirname });
  res.render("home", {
    title: "Le Vanilla | Αρχική σελίδα",
    description: "Ordinary soap is made by combining fats or oils with an alkali (such as lye). The fats and oils react with the alkali to form crude soap. When made properly"
  });
});

app.get('/about', (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", {
    title: "Le Vanilla | Δείτε ποιοι είμαστε",
    description: "Ordinary soap is made by combining fats or oils with an alkali (such as lye). The fats and oils react with the alkali to form crude soap. When made properly"
  });
});

app.get('/contact', (req, res) => {
  res.render("contact", {
    title: "Le Vanilla | Επικοινωνία",
    description: "Ordinary soap is made by combining fats or oils with an alkali (such as lye). The fats and oils react with the alkali to form crude soap. When made properly"
  });
});

app.post('/contact', (req, res) => {
  console.log(req.body);
  let contact = req.body;
  contact = JSON.stringify(contact);
  fs.appendFile('contact.txt', contact + "\n", (err) => {
    if (err) {
      console.error(err);
    } else {
      res.render("thankyou", {
        title: "Le Vanilla | Επιτυχήε εγγραφή",
        description: "Ordinary soap is made by combining fats or oils with an alkali (such as lye). The fats and oils react with the alkali to form crude soap. When made properly",
        message: "Ευχαριστούμε που επικοινωνήσατε μαζί μας"
      });
    }
  });
});

app.get('/bath', (req, res) => {
  //res.sendFile("./views/bath.html", { root: __dirname });
  res.render("bath", {
    title: "Le Vanilla | Αξεσουάρ μπάνιου",
    description: "Ordinary soap is made by combining fats or oils with an alkali (such as lye). The fats and oils react with the alkali to form crude soap. When made properly"
  });
});

app.get('/soap', (req, res) => {
  //res.sendFile("./views/soap.html", { root: __dirname });
  res.render("soap", {
    title: "Le Vanilla | Σαπούνια και άλλα",
    description: "Ordinary soap is made by combining fats or oils with an alkali (such as lye). The fats and oils react with the alkali to form crude soap. When made properly"
  });
});

app.get('/e-shop', (req, res) => {
  //res.sendFile("./views/e-shop.html", { root: __dirname });
  res.render("e-shop", {
    title: "Le Vanilla | Αγοράστε τώρα",
    description: "Ordinary soap is made by combining fats or oils with an alkali (such as lye). The fats and oils react with the alkali to form crude soap. When made properly"
  });
});

app.get('/faq', (req, res) => {
  //res.sendFile("./views/faq.html", { root: __dirname });
  res.render("faq", {
    title: "Le Vanilla | Συχνές ερωτήσεις",
    description: "Ordinary soap is made by combining fats or oils with an alkali (such as lye). The fats and oils react with the alkali to form crude soap. When made properly"
  });
});

app.post('/register', (req, res) => {
  const email = req.body.email;

  fs.appendFile('email.txt', email + "\n", (err) => {
    if (err) {
      console.error(err);
    } else {
      res.render("thankyou", {
        title: "Le Vanilla | Επιτυχήε εγγραφή",
        description: "Ordinary soap is made by combining fats or oils with an alkali (such as lye). The fats and oils react with the alkali to form crude soap. When made properly",
        message: "Ευχαριστούμε για την εγγραφή σας"
      });
    }
  });
});

app.get('/test', (req, res) => {
  res.render("test", { title: "this is a test atitle" });
});

app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404");
});