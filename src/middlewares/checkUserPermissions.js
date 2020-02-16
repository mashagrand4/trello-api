const checkUserPermissions = (req, res, next) => {
    const {role} = req.headers;

    if (role !== "admin") {
        throw new Error("You are not permitted!");
    }

    next();
};

export default checkUserPermissions;