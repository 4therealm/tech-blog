const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/register", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    console.log(dbUserData);
    if (!dbUserData) {
      console.log(`session user id${req.session.userId}`)
      res.status(400).json({ message: 'oh dear something happened'});
      return;
    }
    console.log(dbUserData.password);
    console.log(req.body.password);
    const validPassword = await dbUserData.checkPassword(req.body.password);
console.log(validPassword)
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id
      req.session.cookie;
      res.status(200).json({ user: req.session});
        
    });
  } catch (err) {
    res.status(500).json({message: err});
  }
});
//logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
