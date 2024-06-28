// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// Route to create a new course
router.post('/courses', async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all courses
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
