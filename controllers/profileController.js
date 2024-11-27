const User = require('../models/userModel');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.render('profile', { user });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching profile' });
    }
};

exports.updateProfile = async (req, res) => {
    const { username, email, phone } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            req.user.id,
            { username, email, phone },
            { new: true }
        );
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error updating profile' });
    }
};
