function serviceHandler(req, res, next) {
    res.json({
        info: "This is a simple ws template written by Benjamin Mazenko"
    })
}

module.exports = serviceHandler;