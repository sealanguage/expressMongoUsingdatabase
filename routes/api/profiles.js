const express = require('express');
const Profile = require('../../models/Profile');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}))    // looks for url encoded true, extended false
router.use(bodyParser.json())

router.get('/profiletest', (rec, res) => res.json({message: "Got profile: "}))

router.get ('/', (req, res) => {
    Profile.find()
        .then(profiles => {
            res.json(profiles)
        }) 
        .catch(err => console.log(err))
})
router.get('/:lastname', (req, res) => {
    const lastname = req.params.lastname;
    Profile.find({ lastname: lastname })
        .then(profiles => {
            // console.log(user)
            if (!profiles) {
                return res.status(404).json({ message: `Profile: ${lastname} not found` })
            }
            res.json(profiles);
        })
        .catch(err => req.status(500).json({ message: err }));
})

router.post('/', (req, res) => {
    const { firstname, lastname, email, profileage } = req.body;

    const NewProfile = new Profile({
        firstname,
        lastname,
        email,
        profileage
    })

    NewProfile.save()
        .then(profiles => res.status(201).json(profile))
        .catch(err => {
            res.status(500).json({ message: err })
        });
})

// router.delete('/:lastname', (req, res) => {
//     // TODO: protected route ensure the user is the one deleting
//     const lastname = req.params.lastname;
//     Profile.find({ lastname: lastname })
//         .then(profiles => {
//             // console.log(user)
//             if (!profiles) {
//                 return res.status(404).json({ message: `Profile: ${lastname} not found` })
//             }
//             profiles.remove()
//                 .then(() => res.status(204).json({ message: "Profile successfully deleted" }))
//                 .catch(err => res.status(500).json({ message: err }));
//         })
//         // .catch(err => req.status(500).json({ message: err }));
       
// })



router.delete('/:profileage', (req, res) => {
    // TODO: protected route ensure the user is the one deleting
    const profileage = req.params.profileage;
    Profile.findOne({ profileage: profileage })
        .then(profiles => {
            // console.log(user)
            if (!profiles) {
                return res.status(404).json({ message: `Profile: ${profileage} not found` })
            }
            profiles.remove()
                .then(() => res.status(204).json({ message: "Profile successfully deleted" }))
                .catch(err => res.status(500).json({ message: err }));
        })
//         // .catch(err => req.status(500).json({ message: err }));
         
        // router.remove('/:profileage', (req, res) => {

        //     Profile.findOne({ profileage })
        //         .then(profiles => { 
        //             console.log("foundOne profile")
        //             if (!profile) {
        //                 return res.status(404).json({ message: `Profiel ${profileage} not gound` })
        //             }
        //         profile.remove()
        //         .then()
        //         .catch()
                
        //         })
            //         findOneAndUpdate()
        // })
});

// router.put('/:lastname', (req, res) => {

    //             // findOne()
    //             //     .then(profile) => {
    //             //         findOneAndUpdate()
    //         })
module.exports = router;



// Read:
// One profile -  done
// All profiles -  done

// Create:
// New profile

// Update:
// profile

// Delete
// profile

// Object.keys(obj_name)