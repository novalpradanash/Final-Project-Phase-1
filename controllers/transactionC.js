const { Book , Member , Transaction } =  require('../models/index')
class Controller {

    static showData(req, res) {
        Transaction.findAll()
        .then(data => {
          res.render('transactions/transaction', {
            listTransaction : data
          })
        })
        .catch(err => {
          console.log(err)
        })
    }

    static getFormAdd(req, res) {
      
    }

    static addData(req, res) {
      let error = 0
      let objTransaction = {
        bookId: req.body.bookId,
        memberId: req.body.memberId,
        borrowed_date: req.body.borrowed_date,
      }
      for (let key in objTransaction) {
        if (objTransaction[key] === '') {
          error ++
        }
      }
      if (error > 0) {
        res.send(`Empty value is invalid!`)
      } else {
        Transaction.create(objTransaction)
        .then(data => {
          res.redirect('/transactions')
        })
        .catch(err => {
          console.log(err)
        })
      }
  
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