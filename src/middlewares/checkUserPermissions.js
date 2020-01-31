const checkUserPermissions = (req, res, next) => {
    const {role} = req.headers;

    if (role !== "admin") {
        res.send("You are not permitted!");
    }

    next();
};

export default checkUserPermissions;