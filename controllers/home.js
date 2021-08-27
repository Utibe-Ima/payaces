require("dotenv").config();


module.exports.homepage = (req, res) => {
    const session = "2020/2021";
    res.render("home", {
        name: req.user.name,
        username: req.user.username,
        email: req.user.email,
        phone_number: req.user.phone_number,
        session: session
    });
};

