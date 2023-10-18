const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

const CLIENT_ID = '980497599938-d1hhufq2rdki7bqlb0kgkg5b63j2be3n.apps.googleusercontent.com';

const validateGoogleIdToken = async ( token ) => {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '980497599938-7db4pn3aqicvboulkmlqpvubbmm5cnkg.apps.googleusercontent.com'
            ],
        });
        const payload = ticket.getPayload();
        
        // console.log('========PAYLOAD========');
        // console.log( payload );
    
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        }
    
    } catch (error) {
        return null;
    }
}

module.exports = {
    validateGoogleIdToken
}