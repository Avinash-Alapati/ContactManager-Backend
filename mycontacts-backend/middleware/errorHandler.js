const {constants} = require("../constants");
const errorHandler = (err , req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title : "Validation Failed" , messsage : err.messsage , stackTrace : err.stack})
            break;
        case constants.UNAUTHORIZED:
            res.json({title : "Unauthorized Access" , messsage : err.messsage , stackTrace : err.stack})
            break;
        case constants.FORBIDDEN:
            res.json({title : "Forbidden Request" , messsage : err.messsage , stackTrace : err.stack})
            break;
        case constants.NOT_FOUND:
            res.json({title : "Not Found" , messsage : err.messsage , stackTrace : err.stack})
            break;
        case constants.SERVER_ERROR:
            res.json({title : "Internal Server Error" , messsage : err.messsage , stackTrace : err.stack})
            break;
        default:
            console.log("No Error , All Good!")
            break;
    }    
}

module.exports = errorHandler;

// To convert the error into json which is acquired by sending empty data in post req