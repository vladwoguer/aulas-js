class Usuario {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    getUsername() {
        return this.username
    }
}

module.exports = Usuario