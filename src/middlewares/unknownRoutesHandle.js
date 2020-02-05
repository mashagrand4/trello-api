const unknownRoutesHandle = async (req, res, next) => {
    next(new Error('404 error: page not found'));
};

export default unknownRoutesHandle;