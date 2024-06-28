// routes/enrollmentRoutes.js
const express = require('express');
const router = express.Router();
const Enrollment = require('../models/enrollment');

// Route to create a new enrollment
router.post('/enrollments', async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all enrollments
router.get('/enrollments', async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
