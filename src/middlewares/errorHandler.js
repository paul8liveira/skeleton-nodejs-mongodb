import insights from './third-party/azure-insights';
import i18nMongooseError from 'mongoose-i18n-error';
let mongooseErrorHandler = new i18nMongooseError();

let log = (err, req, res, next) => {
    insights.trackException(err);
    next(err);
};

let handler = (err, req, res, next) => {
    res.status(err.status || 500).send({
        success: false,
        message: err.message
    });
};

module.exports = {
    log: log,
    handler: mongooseErrorHandler.handler(function(err, req, res, next) {
        res.status(err.status || 500).json(err);
    })
}