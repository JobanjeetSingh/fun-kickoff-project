const router = require('express').Router();
let Profile = require("../models/Profile");
const { route } = require('../routes/auth');

router.route('/').get((req, res) => {
    Profile.find()
      .then(profiles => res.json(profiles))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const description = req.body.description;
    const profilePic = req.body.profilePic;
    const availability = req.body.availability;

    const newProfile = new Profile ({
        firstName,
        lastName,
        description,
        profilePic,
        availability,
    });

    newProfile.save()
        .then(() => res.json("Profile Created"))
        .catch(err => res.status(400).json('Error: ' + err))

});

router.route('/:id').get((req,res) => {
    Profile.findById(req.params.id)
        .then(profile => res.json(profile))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Profile.findById(req.params.id)
        .then(profile => {
            profile.firstName = req.body.firstName;
            profile.lastName = req.body.lastName;
            profile.description = req.body.description;
            profile.profilePic = req.body.profilePic;
            profile.availability = req.body.availability;

            profile.save()
                .then(() => res.json('Profile Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: '+ err));
});


module.exports = router;