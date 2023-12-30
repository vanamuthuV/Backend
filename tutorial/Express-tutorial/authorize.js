const Authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'vana') {
        const id = (new Date().getDate()) + (new Date().getSeconds())
        req.user = { 'name': user, 'id': id}
        console.log(req.user)
        next()
    } else {
        return res.status(404).send('Unauthorized Acess Reported Successfully !!')
    }
}

module.exports = Authorize