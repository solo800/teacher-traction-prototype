const express = require('express');
const mainRouter = express.Router();

module.exports = function () {
    mainRouter.route('/')
        .get((req, res) => {
            res.send('here I am');
        });

    return mainRouter;
};