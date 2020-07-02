const { Book , Member , Transaction } =  require('../models/index')
class Controller {

    static showData(req, res) {
        
    }

    static getFormAdd(req, res) {

    }

    static addData(req, res) {

    }

    static getFormEdit(req, res) {

    }

    static editData(req, res) {

    }

    static deleteData(req, res) {
        const idInput = req.params.id

        Transaction.destroy({
          where: {
            id: idInput
          }
        })
          .then(data => {
            if (req.session.isLoggedIn) {
                res.redirect('/transaction')
            }
            else {
                res.redirect('/transaction')
            }
          })

    }

}


module.exports = Controller