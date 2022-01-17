import ServerError from "../repositories/errors/ServerError";
import ForbiddenError from "./errors/ForbiddenError";

export const handleErrors = logger => (error, req, res, next) => {
    logger.logError(error.message);

    switch (error.message) {
        case error instanceof ServerError:
            res.status(500);
            break;
        case error instanceof ForbiddenError:
            res.status(403);
            break;
        default:
            res.status(400);
    }

    res.send(error.message)
};