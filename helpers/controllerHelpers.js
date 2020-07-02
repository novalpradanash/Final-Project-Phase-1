

module.exports = {
    isLoggedIn([req, res], resRender) {
        if (req.session.isLoggedIn) {
             resRender
        }
        else {
             res.redirect('/admins')
        }
    }
}