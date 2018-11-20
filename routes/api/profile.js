const express = require('express');
const Profile = require('../../models/Profile');
const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}))    // looks for url encoded true, extended false
router.use(bodyParser.json())

router.get ('/', (req, res) => {
    Profile.find()
        .then(profiles => {
            res.json(profiles)
        }) 
        .catch(err => console.log(err))
})
router.get('/:name',(req, res) => {
    const lastname = req.params.lastname;
    Profile.find({ lastname: lastname })
        .then(profile => {
            // console.log(user)
            if (user === []) {
                return res.status(404).json({ message: "User: ${name} not found" })
            }
            res.json(user);
        })
        .catch(err => req.status().json({ message: err }));
})

module.exports = route;
