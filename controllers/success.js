
const mailer = require('nodemailer')
const pdfDoc = require('pdfkit')
const fs = require('fs')
const path = require('path')



module.exports.success = (req, res) => {
    res.render('success', {
        username: req.user.username
    })



    try {
        let status = req.query.status
        let id = req.query.transaction_id
        let ref = req.query.tx_ref


        // sends mail to the clinet onn transaction success
        if (status == "successful") {

            // creates pdf
            const pdfPath = path.join('resources', req.user.email + '.pdf')
            const doc = new pdfDoc({ size: 'A4'});


            doc.pipe(fs.createWriteStream(pdfPath))
            doc.text('Your transaction is Successful; take note of your transaction details belows')
            doc.text(`Transaction ID: ${id} \n Transaction Status: ${status} \n Transaction ref: ${ref} \n Transaction Amount: 1000 \n Registration Number: ${req.user.username} \n Student's Name: ${req.user.name} \n Student's Email: ${req.user.email}`)
            doc.text('Take the print out to the HOD for final processing')
            doc.end()



            const transporter = mailer.createTransport({
                host: 'smtp.office365.com',
                port: 587,
                auth: {
                    user: 'effiongutibeima@hotmail.com',
                    pass: '123Utibeima.ng'
                }
            });

            const options = {
                from: 'effiongutibeima@hotmail.com',
                to: req.user.email,
                subject: 'payAces - Dues Payment for Computer Engineering',
                text: `Dear ${req.user.name} \nYour payment was successful \nThank you for using this channel`,
                attachments: [{
                    filename: `${req.user.username}.pdf`,
                    content: fs.createReadStream(pdfPath),
                    contentType: 'application/pdf'
                }]
            }

            transporter.sendMail(options, function (err, data) {
                if (err) {
                    return console.log(err)
                }
                console.log('Mail has been sent')

            })
        }




        // sends mail on failure
        if (status == "failure") {
            const transporter = mailer.createTransport({
                host: 'smtp.office365.com',
                port: 587,
                auth: {
                    user: 'effiongutibeima@hotmail.com',
                    pass: '123Utibeima.ng'
                }
            });

            const options = {
                from: 'effiongutibeima@hotmail.com',
                to: req.user.email,
                subject: 'payAces - Dues Payment for Computer Engineering',
                text: `Dear ${req.user.name} \nYour payment was not successful - Try again after some time \nThank you for using this channel`
            }

            transporter.sendMail(options, function (err, data) {
                if (err) {
                    return console.log(err)
                }
                console.log('Mail has been sent')

            })
        }


    } catch (error) {
        console.log(error)
    }
}