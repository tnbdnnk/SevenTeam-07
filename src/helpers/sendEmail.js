import sgMail from '@sendgrid/mail';
import "dotenv/config";
import express from "express";

const router = express.Router();

const { SENDGRID_API_KEY, SENDGRID_BACKEND_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

router.post("/help", sendEmail);

const sendEmail = data => {
    sgMail.send(data)
    .then(() => {
        console.log('Email sent');
    })
    .catch((error) => {
        console.error(error);
    })
};







// const verifyEmail = {
//         to: SENDGRID_BACKEND_EMAIL,
//         from: email,
//         subject: "Need Help",
//         text: comment,
//         html: comment,
//     }
//     await sendEmail(verifyEmail);