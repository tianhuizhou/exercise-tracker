const router = require('express').Router();
let Exercise = require('../models/exercise-model');


//get all exercises
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: '+ err));
});

//add a new exercise
router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const NewExercise = new Exercise({
        username,
        description,
        duration,
        date,
    })

    NewExercise.save()
        .then(()=> res.json('Exercise added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete a specific exercise
router.route('/:id').delete((req, res)=>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(res.json('Exercise deleted successfully'))
        .catch(err => res.status(400).json('Error: '+err));
});

//update a specific exercise
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise=>{
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(res.json('exercise updated successfully'))
                .catch(err => res.status(400).json('Error: ' +err))
        })
        .catch(err => res.status(400).json('Error: '+err));
});

//read a specific exercise by id
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: '+err));
});


module.exports = router;