function authorize(request, response, next) {
    console.log('Authorization');
    next();
}

function clientError(req, res, next) {
    var err = new Error("Not found");
    err.status = 404;
    next(err);
}

function serverError(err, req, res, next) {
    res.status(err.status || 500);
    console.error(err.stack);
    res.json({message: err.message, error: (process.env.NODE_ENV === 'production') ? {} : err.stack});
}

module.exports = {
    authorize: authorize,
    clientError: clientError,
    serverError: serverError
};