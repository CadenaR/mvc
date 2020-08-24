let express = require('express'); 
let bodyParser = require('body-parser');
let app = express();

let webRoutes = require('./routes/web');
let appConfig = require('./configs/app');

let methodOverride = require('method-override')

let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';
let hbs = exphbs.create({extname: extNameHbs});


app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.use('/', webRoutes);


app.listen(appConfig.express_port, function() { 
    console.log('The app is running on port ' + appConfig.express_port); 
});