module.exports = (req, res, next) => {
    // console.log("session::",req.session.user.email);
    if (req.session.user.email != 'himanshukeshri0412001@gmail.com') {
        return res.redirect('/');
    }
    next();
}