const { Member } = require('../models/index')

class Controller {

    static showData(req, res) {
        Member.findAll({
            order: [['name', 'ASC']]
        })
        .then(data => {

            if (req.session.isLoggedIn) {
                res.render('members/members', {
                    listMembers: data
                    })
            }
            else {
                res.redirect('/admins')
            }
        })
        .catch(err => {
            res.send(err)
        })
    }


    static getFormAdd(req, res) {
        
        if (req.session.isLoggedIn) {
            res.render('members/add')
        }
        else {
            res.redirect('/admins')
        }
    }


    static addData(req, res) {
        let error = 0
        let objMember = {
            name: req.body.name,
            address: req.body.address,
            phone_number: req.body.phone_number
        }
        for (let key in objMember) {
            if (objMember[key] === '') {
                error ++
            }
        }
        if (error > 0) {
            res.send(`Empty Value is Invalid!`)
        } else {
            Member.create(objMember)
            .then (data => {
                res.redirect('/members')
            })
            .catch(err => {
                res.send(err)
            })
        }
    }



    static getFormEdit(req, res) {
        const idInput = req.params.id
        Member.findOne({
            where: {
                id: idInput
            }
        })
        .then (data => {
            if (req.session.isLoggedIn) {
                res.render('members/edit', {
                    dataMember: data
                })
            }
            else {
                res.redirect('/admins')
            }

        })
    }



    static editData(req, res) {
        let error = 0
        const idInput = req.params.id
        let objMember = {
            name: req.body.name,
            address: req.body.address,
            phone_number: req.body.phone_number
        }
        for (let key in objMember) {
            if (objMember[key] === '') {
                error ++
            }
        }
        if (error > 0) {
            res.send(`Empty Value is Invalid!`)
        } else {
            Member.update(
                objMember,
                {
                    where: {
                        id: idInput
                    }
                })
            .then (data => {
                res.redirect('/members')
            })
            .catch(err => {
                res.send(err)
            })
        }
    }



    static deleteData(req, res) {
        const idInput = req.params.id

        Member.destroy({
          where: {
            id: idInput
          }
        })
          .then(data => {
            if (req.session.isLoggedIn) {
                res.redirect('/members')
            }
            else {
                res.redirect('/admins')
            }
          })

    }

}


module.exports = Controller