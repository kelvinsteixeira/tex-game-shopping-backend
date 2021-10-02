const authService = require('../services/authService')

const get_token = function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    let result = authService.authenticate(username, password);

    if (result.hasError) {
        res.json({
            errorMessage: "There is an error",
            errorCode: result.errorCode
        })
    } else {
        res.json(result.user)
    }
}

module.exports = {
    get_token
}