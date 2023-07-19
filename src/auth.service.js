class AuthService {
    _userId  = "xxxx"
    _userEmail = "hello@paytweed.com"

    getAuthUser() {
        return {
            id: this._userId,
            email: this._userEmail
        }
    }

    updateUser({id, email}) {
        if(id) this._userId = id
        if(email) this._userEmail = email
        return this.getAuthUser()
    }
}

module.exports = new AuthService()