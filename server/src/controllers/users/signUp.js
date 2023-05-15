const User = require('../../models/users/user');

exports.createUser = async (req, res) => {
  try {
    const { email, name, lastName, gender, region, photo } = req.body;

    const user = new User({
      email,
      name,
      lastName,
      gender,
      region,
      photo
    });

    await user.save();
    console.log(user,'user')

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
