const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send('Get all workouts');
};

const getOneWorkout = (req, res) => {
    const workout= workoutService.getOneWorkout(req.params.workoutId);
    res.send(`Get workout ${req.params.workoutId}`);
};

const createNewWorkout = (req, res) => {
    const createdWorkout = workoutService.createNewWorkout(req.params.workoutId);
    res.send(`Create a new workout ${req.params.workoutId}`);
};

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
    res.send(`Update an existing workout ${req.params.workoutId}`);
};

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`Delete an existing workout ${req.params.workoutId}`);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};