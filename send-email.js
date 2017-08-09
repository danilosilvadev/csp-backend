var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');


router.route('/enviar')
    .post(function (req, res) {


        var textJson = req.body;
        var text = textJson.text;
        if (text == null || text == '') {
            res.status(401).send({ message: 'Por favor colocar o text' });
        } else {
            sendEmail(text)
                .then(function () {
                    res.status(200).send({ message: 'Enviado com Sucesso' });
                }).catch(function () {
                    res.status(401).send({ message: 'Ocorreu um erro na hora de neviar' });
                })
        }
    });

var sendEmail = function (text) {
    return new Promise(function (resolve, reject) {
        var mailOptions = {
            from: '488cb5e217-edb561@inbox.mailtrap.io',
            to: 'markpetrelli@gmail.com',
            subject: 'Tema',
            text: text
        };

        var transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "88282430e2d065",
                pass: "6d5f21b83bf0b7"
            }
        });

        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject();
            } else {
                console.log('Email sent: ' + info.response);
                resolve();
            }
        });

    });
}

module.exports = router;
