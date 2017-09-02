// require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// If our views were static the next line would be uncommented
// app.use(express.static('src/views'));
app.set('views', '../dist/views');
app.set('view engine', 'ejs');

const port = 8081;
const mainRouter = require('../dist/routes/mainRouter')();
//     authRouter = require('./src/routes/authRouter')(),
//     // statsRouter = require('./src/routes/statsRouter')(),
//     fantasyStatsRouter = require('./src/routes/fantasyStatsRouter')(),
//     apiRouter = require('./src/routes/apiRouter')(),
//     testRouter = require('./src/routes/testRouter')();
//
app.listen(port, function (err) {
    console.log(`Running server on port ${port}`);
});

app.use('/', mainRouter);
// app.use('/auth', authRouter);
// // app.use('/stats', statsRouter);
// app.use('/fantasystats', fantasyStatsRouter);
// app.use('/api', apiRouter);
// // app.use('/test', testRouter);

exports = module.exports = app;
