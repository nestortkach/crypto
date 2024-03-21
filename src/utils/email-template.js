function contactFormEmailTemplate({
  firstName = '',
  lastName = '',
  companyName = '',
  phone = '',
  email = '',
  message = '',
}) {
  return `
    <p>Message from ${firstName} ${lastName}</p>
    <p>Company Name: ${companyName}</p>
    <p>Phone Number: ${phone}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
  `;
}

function requestExchangeEmailTemplate({ companyName, exchangeAmount, website, phone, email, message }) {
  return `
    <p>Company Name: ${companyName}</p>
    <p>Exchange Amount: ${exchangeAmount.title}</p>
    <p>Phone Number: ${phone}</p>
    <p>Website: ${website}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
  `;
}

function applyJobEmailTemplate({ firstName, lastName, position, phone, email, message }) {
  return `
    <p>Name: ${firstName} ${lastName}</p>
    <p>Applying for: ${position}</p>
    <p>Phone: ${phone}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
  `;
}

function businessVerificationTemplate({ email, message, name, website, services }) {
  const selectedServices = Object.keys(services).filter((x) => services[x] === true);

  return `
    <p>Message from ${name}</p>
    <p>Name of the service: ${name}</p>
    <p>Email: ${email}</p>
    <p>Website: ${website || '-'}</p>
    <p>Comments/questions: ${message || '-'}</p>
    <p>Services: ${selectedServices.join(', ')}</p>
  `;
}

function supportTemplate({ email, name }) {
  return `
    <p>Name: ${name}</p>
    <p>${email.label}: <br/> ${email.value}</p>
  `;
}

module.exports = {
  contactFormEmailTemplate,
  requestExchangeEmailTemplate,
  applyJobEmailTemplate,
  businessVerificationTemplate,
  supportTemplate,
};
