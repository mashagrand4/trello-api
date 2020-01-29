const validator = (req, res, next) => {
    console.log('validated');
    next();
};

export default validator;