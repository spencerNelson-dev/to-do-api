var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config
const db = require('./db/mongoose')
const cors = require('cors')
const passport = require('passport')

// oauth stuff
require('./bin/stratagies/googleOauth2')
require('./bin/stratagies/facebookOauth')
require('./bin/stratagies/bearer')

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
const taskApiRouter = require('./routes/api/v1/api-tasks')
const userApiRouter = require('./routes/api/v1/api-users')

var app = express();

//connect to db
db.connect(app.locals)
  .then(dbConnection => {

    console.log("connected")

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(cors())
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/img', express.static( path.join(__dirname, 'img')));

    app.use(passport.initialize())

    //app.use('/', indexRouter);
    app.use('/users', userApiRouter);
    app.use('/tasks', taskApiRouter)

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });

    // clean up function
    process.on('SIGINT', () => {
      db.close()
      console.log('DBClosed')
      process.exit()
    })


  })// end of connect
  .catch(error => {
    console.log(error)
  })

module.exports = app;
