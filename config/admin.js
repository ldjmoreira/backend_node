const var_dump = require('var_dump')
//var_dump(variable)   
module.exports = middleware => {// o midleweare é uma funcao que é passada como arg
    
    return (req, res, next) => {
        
        if(req.user.admin) {// só sera executada se o usuario for adm
            // parece que o req.user.admin  vem do .passport.authenticate() que é definido no payload
            
            middleware(req, res, next) // aqui é o metodo get
            
        } else {
            res.status(401).send('Usuário não é administrador.')
        }
    }
} 