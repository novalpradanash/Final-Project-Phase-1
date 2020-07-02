const { Member } = require('../models/index')

class Controller {

    static showData(req, res) {
        Member.findAll()
        .then(data => {
            res.render('members/members', {
            listMembers: data
            })
        })
        .catch(err => {
            res.send(err)
        })
    }


    static getFormAdd(req, res) {
        res.render('members/add')
    }


    static addData(req, res) {
        let error = 0
        let objMember = {
            name: req.body.name,
            email: req.body.email,
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
            res.render('members/edit', {
                listMembers: data
            })
        })
    }



    static editData(req, res) {
        const idInput = req.params.id
        let objMember = {
            name: req.body.name,
            email: req.body.email,
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

        Members.destroy({
          where: {
            id: idInput
          }
        })
          .then(data => {
            res.redirect('/members')
          })
    }

}


module.exports = Controller