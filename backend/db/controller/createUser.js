const mongoose = require('mongoose');
const Form = require('../models/formModel');


const createUser = async (name, email, phone, bio, date) => {
    const user = {
        name,
        email,
        phone,
        bio,
        date
    }
    try {
        const formData = new Form(user)

        formData.save()
            .then(() => {
                console.log(`Form Data of ${user.name} saved in db`)
            })
    } catch (e) {
        console.log(e.message);
    }

}