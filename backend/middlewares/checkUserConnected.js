class Auth {
    ensureAuthenticated(request, response, next) {
        if(request.user) {
            return next()
        }
        response.redirect('/login')
    }

    forwardAuthenticated(request, response, next) {
        if(!request.user) {
            return next()
        }
        response.redirect('/')
    }
}

export default new Auth();