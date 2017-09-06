exports.dummy = function (req, res) {
    var id = req.params.id;
    res.json({
        data: id
    });
};