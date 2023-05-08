const router = require('express').Router();
const { Response } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newResponse = await Response.create({
      ...req.body,
      user_id: req.session.user_id,
      name: req.session.name,
    });
    console.log(Response);

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/:id', withAuth, async (req, res) => {
  try {
    const newResponse = await Response.create({
      ...req.body,
      user_id: req.session.user_id,
      id: req.params.id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const responseData = await Response.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!responseData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(responseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
