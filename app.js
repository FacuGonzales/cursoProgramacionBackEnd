const EXPRESS = require('express');
const app = EXPRESS();
// const handlebars = require('express-handlebars')

const ProductRoutes = require('./routes/productos');

//-------------- UTILIZANDO HANDLEBARS ------------------------------
// app.engine(
//     "hbs",
//     handlebars({
//         extname: ".hbs",
//         defaultLayout: 'index.hbs',
//     })
// );
// app.set("view engine", "hbs");
// app.set("views", "./views/hbs-templates");

//-------------- UTILIZANDO PUG ------------------------------
// app.set('views', './views/pug-template');
// app.set('view engine', 'pug');

//-------------- UTILIZANDO EJS ------------------------------
app.set('views', './views/ejs-templates');
app.set('view engine', 'ejs');

app.use(EXPRESS.urlencoded({extended: true}))
app.use(EXPRESS.static('public'))
app.use(EXPRESS.json())

app.use('/api', ProductRoutes);

module.exports = app;