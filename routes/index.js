const express = require('express');
const App = express();
const router = App.Router();
const helmet = require("helmet");

const excelRouter = require("../routes/excelRouter");
App.use(helmet());
App.disable("x-powered-by");

/**
 * @param {string,Object} : dd
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/exceltest",excelRouter);

module.exports = router;
