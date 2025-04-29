const express = require('express');
const path = require('path');
const app = express();

const homeRoutes = require('./routing/home');
const productRoutes = require('./routing/products');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);
app.use(productRoutes);

app.listen(3000, () => {
  console.log('Serwer działa na porcie 3000');
});
