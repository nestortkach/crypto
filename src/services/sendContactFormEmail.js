const sgMail = require('@sendgrid/mail');

const formTypes = require('../constants/formTypes');
const config = require('../../config');
const {
  contactFormEmailTemplate,
  requestExchangeEmailTemplate,
  applyJobEmailTemplate,
  businessVerificationTemplate,
  supportTemplate,
} = require('../utils/email-template');

function getEmailTemplate(body) {
  if (formTypes.requestExchange === body.templateType) {
    return requestExchangeEmailTemplate(body);
  }
  if (formTypes.applyJob === body.templateType) {
    return applyJobEmailTemplate(body);
  }
  if (formTypes.businessForm === body.templateType) {
    return businessVerificationTemplate(body);
  }
  if (formTypes.supportForm === body.templateType) {
    return supportTemplate(body);
  }
  return contactFormEmailTemplate(body);
}

const subject = {
  [formTypes.requestExchange]: 'Request exchange form from guardarian',
  [formTypes.applyJob]: 'Apply job form from guardarian',
  [formTypes.contact]: 'Contact form from guardarian',
  [formTypes.businessForm]: 'Business verification application form',
  [formTypes.supportForm]: 'Contact us form',
};

const recipient = {
  [formTypes.requestExchange]: config.businessEmail,
  [formTypes.applyJob]: config.hrEmail,
  [formTypes.contact]: config.sailsEmail,
  [formTypes.businessForm]: config.businessEmail,
  [formTypes.supportForm]: config.sailsEmail,
};

const sendContactFormEmail = (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: recipient[req.body.templateType],
    from: config.sendEmailFrom,
    subject: subject[req.body.templateType],
    html: getEmailTemplate(req.body),
    attachments: req.body.cv_file ? [req.body.cv_file] : undefined,
  };

  (async () => {
    try {
      await sgMail.send(msg);
      console.log('Email from contact form successfully sent');
      res.sendStatus(200);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }

      res.status(500).send(error.response.body);
    }
  })();
};

module.exports = sendContactFormEmail;
