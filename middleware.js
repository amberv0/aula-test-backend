module.exports = {
    isAuthenticated: function(req, res, next){
        const id = req.query['userid']; //for simplicity just passing some id as a query param to identify users
        if(!id){
            return res.status(401).json({message: "Authentication id is required"})
        }
        req.user = {id};
        next()
    }
};