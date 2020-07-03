const { Admin } = require('../models/index.js')
const bcryptjs = require('bcryptjs')
// const session = require('express-session')

class Controller {


    static getIndex ( req, res ) {
        if (req.session.isLoggedIn) {
            res.render('index')
        }
        else {
            res.redirect('/admins/login')
        }
    }
    static getLoginAdmin ( req, res ) {
        
        if (!req.session.isLoggedIn) {
            res.render('admins/login')
        }
        else {
            res.redirect('/')
        }
    }

    static postLoginAdmin ( req, res ) {
        //ambil data yg sesuai dengan username atau emal
        const d = req.body
        Admin.findOne({ 
            where: {username: d.username}
        })
        .then(data => {

            return bcryptjs.compare(d.password, data.password)
        })
        .then(data => {

            
            if(data) {
                // session.
                req.session.isLoggedIn = true
                res.redirect('/')
            }
            else {
                res.redirect('/admins/login')
            }
        })
        .catch(err => res.send(err))

    }

    static getRegisterAdmin ( req, res ) {
        res.render('admins/register')

    }

    static postRegisterAdmin ( req, res ) {
        let d = req.body

        let username = d.username
        let password = bcryptjs.hashSync(d.password, 10)
        
        
        // res.send([username, password])
        const dataObj = {
            username, password
        }

        Admin.create(dataObj)
            .then(data => {
                res.redirect('/admins/login')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getLogoutAdmin ( req, res ) {
        req.session.destroy()
        res.redirect('/admins/login')
    }

}

module.exports =  Controller