var exports = module.exports = {
};

exports.dash = (req,res) => {
    res.render('auth_dash');
}

exports.signup = (req,res) => {
    res.render('pages/signup');
}

exports.login = (req,res) => {
    res.render('pages/login');
}

exports.logout = (req,res) => {
    req.session.destroy(
        (err) => {
            res.redirect('/');
        }
    );
}

exports.planner = (req,res)  => {
    res.render('pages/create_planner');
}