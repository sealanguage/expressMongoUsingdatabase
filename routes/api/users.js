const express = require('express');
const User = require('../../models/User');
const router = express.Router();

// router.get('/', (rec, res) => res.json({message: "Welcome user: "}))

router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => console.log(err))
})

// url /api/users/?name=cliff
// url /api/users/cliff/{param2}

router.get('/:name',(req, res) => {
    const name = req.params.name;
    User.find({ name: name })
        .then(user => {
            // console.log(user)
            if (user === []) {
                return res.status(404).json({ message: "User: ${name} not found" })
            }
            res.json(user);
        })
        .catch(err => req.status().json({ message: err }));
})

router.post('/', (req, res) => {
    const { name, password, avatar } = req.body;

    const NewUser = new User({
        name,
        password,
        avatar
    })

    NewUser.save()
        .then(user => res.status(201).json(user))
        .catch(err => {
            res.status(500).json({ message: err })
        });
})

router.delete('./:name', (req, res) => {
    // TODO: protected route ensure the user is the one deleting
    const name = req.params.name;
    User.find({ name: name })
        .then(user => {
            // console.log(user)
            if (user === []) {
                return res.status(404).json({ message: "User: ${name} not found"})
            }
            user.remove()
                .then(() => res.status(204).json({ message: "User successfully deleted" }))
                .catch(err => res.status(500).json({ message: err }));
        })
        .catch(err => req.status().json({ message: err }));

        router.put('/:name', (req, res) => {

            // findOne()
            //     .then(user) => {
            //         findOneAndUpdate()
        })
})

module.exports = router;