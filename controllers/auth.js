const { response } = require('express');
const { validateGoogleIdToken } = require('../helpers/google-verify-token');

const  googleAuthController = async ( req, resp = response ) => {

    const token = req.body.token;

    if ( !token ) {
        return resp.json({
            ok: false,
            msg: 'No existe token en la petición'
        });
    }
    
    const googleUser = await validateGoogleIdToken( token );

    if ( !googleUser ) {
        return resp.status(400).json({
            ok: false
        })
    }

    // Guardar usuario en DB

    resp.json({
        ok: true,
        googleUser
    });

}

module.exports = {
    googleAuthController
}