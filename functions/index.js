const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp() ;

// const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const SENDGRID_API_KEY = functions.config().sendgrid.key 

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.firestoreEmail = functions.firestore
    .document('users/{userId}/followers/{followerId}')
    .onCreate((snap, context) => {
        const user = snap.data();
        const msg = {
            to: user.email,
            from: 'joeladdarwin@gmail.com',
            subject: 'New Follower',
            // text: `Hey ${toName}. You have a new follower!!! `,
            // html`<strong>Hey ${toName}. You have a new follower!!!</strong>`,

            // custom templates
            templateId: 'c05a5afe-7fe0-4316-a722-482fd6148eef',
            substitutionWrappers: ['{{', '}}'],
            substitutions: {
                name: user.displayName
                // and other custom properties here
            }

        };
        return sgMail.send(msg)
    });
