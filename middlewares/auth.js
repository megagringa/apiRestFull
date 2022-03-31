const jwt = require('jsonwebtoken');
const config = require('config');

let verificarToken = (req, res, next) => {
    let token = req.get('Autorization');
    jwt.verify(token, config.get('configToken.SEED'),(err, decoded) => {
        if(err){
            return res.status(401).json({
                err
            })
        }
        req.usuario = decoded.usuario;
        next()
    });
}

module.exports = verificarToken;