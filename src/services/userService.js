const users = [{
    username: "kteixeira",
    password: "1234",
    isEnabled: false
}, {
    username: "cteixeira",
    password: "5678",
    isEnabled: true
}]

function getUser(predicate) {
    return users.find(predicate);
}

module.exports = {
    getUser
}