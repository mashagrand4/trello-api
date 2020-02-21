import ForbiddenError from "./errors/ForbiddenError";

const checkUserPermissions = (req, res, next) => {
    const {role} = req.headers;
    if (role !== "admin") {
        throw new ForbiddenError("You are not permitted!");
    }
    next();
};

export default checkUserPermissions;