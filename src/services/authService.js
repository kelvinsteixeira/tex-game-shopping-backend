const userService = require('./userService')

function authenticate(username, password) {
    let user = userService.getUser(user => user.username == username && user.password == password);
    if (user) {
        if (user.isEnabled) {
            return {
                hasError: false,
                user: {
                    name: user.name,
                    isEnabled: true,
                    token: 'abc123'
                }
            }
        } else {
            return {
                hasError: true,
                errorCode: 'USER_DISABLED'
            }
        }
    } else {
        return {
            hasError: true,
            errorCode: 'AUTH_FAILED'
        }
    }
}

module.exports = {
    authenticate
}