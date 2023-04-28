const router = require('express').Router();
const { Response } = require('../../models');
const withAuth = require('../../utils/auth');



router.post('/:id', withAuth, async (req, res) => {
  try {
    const newResponse = await Response.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});









module.exports = router;
