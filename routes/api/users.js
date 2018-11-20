const express = require('express');
const User = require('../../models/User');
const router = express.Router();

// router.get('/', (rec, res) => res.json({message: "Welcome user: "}))

router.get('/', (req, res) => {
    User.find()  // going from an exernal location to get data, we want it to be asynchronous
        .then(users => {
            res.json(users)
        })
        .catch(err => console.log(err))  // these are promises
})

// url /api/users/?name=cliff (query)
// url /api/users/cliff/{param2} (parmS)

router.get('/:name', (req, res) => {
    console.log("router GET working?")
    const name = req.params.name;
    User.findOne({ name: name })
        .then(user => {
            // console.log(user)
            if (user === []) {
                return res.status(404).json({ message: `User: ${name} not found` })
            }
            // res.json(user);
        })
        .catch(err => req.status().json({ message: err }));
})

router.post('/', (req, res) => {
    console.log("router POST working")
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
});

// router.delete('./name', (req, res) => {
//     // toDo: protected route ensure the user is the one deleting
//     const name = req.params.name;  //  use destructuring { name, password, avatar } and then just name
//         User.findOne({ name })  //  set to object
//             .then(user => {
//                 if(!user) {
//                     return res.status(404).json({message: `User: ${name} not found`})
//                 }
//             user.remove()
//                 .then(() => res.status(404).json({ message: `user: ${name} successfully deleted`}))
//                 .catch(err => res.status(500).json(err));
//             });
// });


router.delete('/:name', (req, res) => {
    // TODO: protected route ensure the user is the one deleting
    
    // delete does work
    // console.log("router delete working???")
    // res.send({success: "delete is working"})
    
    const name = req.params.name;
    User.findOne({ name })
        .then(users => {
            // console.log(user)
            if (!users) {
                return res.status(404).json({ message: `User: ${name} not found`})
            }
            users.remove()
                .then(() => res.status(204).json({ message: "User successfully deleted" }))
                .catch(err => res.status(500).json({ message: err }));
        })
        .catch(err => req.status(500).json({ message: err }));    //  maybe this is not needed
});

module.exports = router;


// npm run server
// Object.keys(obj_name)