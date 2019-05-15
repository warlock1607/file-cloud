const express = require("express");
const expressHbs = require('express-handlebars');
const session = require('express-session');
const Keycloak = require('keycloak-connect');

const { port } = require("./config");

const router = require("./app/router");

const app = express();

// Register 'handelbars' extension with The Mustache Express
app.engine('hbs', expressHbs({extname:'hbs',
  defaultLayout:'layout.hbs',
  relativeTo: __dirname
}));

app.set('view engine', 'hbs');


var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({ store: memoryStore });

app.use(session({
  secret:'thisShouldBeLongAndSecret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use(keycloak.middleware());

app.use("/", keycloak.protect(), router);

app.use( keycloak.middleware( { logout: '/logout'} ));

app.listen(port, () => console.log(`App started at port ${port}`));
