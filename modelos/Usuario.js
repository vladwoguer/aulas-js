class Usuario {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    getUsername() {
        return this.username
    }

    getPassword() {
        return this.password
    }

    setPassword(password){
        this.password = password
    }
    
    setUsername(username) {
        this.username = username
    }


}

module.exports = Usuario
