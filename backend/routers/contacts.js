const Router = require('express').Router();
let Contact = require('../models/contact.model');

Router.route('/').get((req, res) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error ' + err));
});

Router.route('/add').post((req, res) => {
    
    const user = req.body.user;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const cellphone = req.body.cellphone;
    const homephone = req.body.homephone;
    const workphone = req.body.workphone;
    const email = req.body.email;

    const newContact= new Contact({
        user,
        firstname,
        lastname ,
        cellphone,
        homephone,
        workphone,
        email
    });

    newContact.save()
    .then(() => res.json('Contact added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = Router;