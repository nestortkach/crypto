const config = {
  // FROM and TO for email
  sendEmailFrom: 'm@guardarian.com',
  sailsEmail: 'sales@guardarian.com',
  hrEmail: 'hr@guardarian.com',
  businessEmail: 'business@guardarian.com',
  guardarianApiUrl: process.env.NEXT_PUBLIC_GUARDARIAN_API_URL,
  guardarianB2bUrl: process.env.NEXT_PUBLIC_GUARDARIAN_API_B2B_URL,
  guardarianCustomerCabinetUrl: process.env.NEXT_PUBLIC_GUARDARIAN_API_CC_URL,
  guardarianPaymentsPageUrl: process.env.NEXT_PUBLIC_GUARDARIAN_PAYMENT_URL,
  guardarianRecurringPaymentsUrl: process.env.NEXT_PUBLIC_GUARDARIAN_RECURRING_PAYMENTS_URL,
  guardarianRecurringPaymentsDisabled: process.env.NEXT_GUARDARIAN_RECURRING_PAYMENTS_DISABLED,
  guardarianRecurringPaymentsDisabledPublic: process.env.NEXT_PUBLIC_GUARDARIAN_RECURRING_PAYMENTS_DISABLED,
  guardarianRecurringPaymentsApiKey: process.env.NEXT_PUBLIC_GUARDARIAN_RECURRING_PAYMENTS_API_KEY,
  guardarianRecurringPaymentsRedirectUrl: process.env.NEXT_PUBLIC_GUARDARIAN_RECURRING_PAYMENTS_REDIRECT_URL,
  freshChatConfig: {
    token: 'a111d895-7d9b-4b24-93eb-6e07beaa9b2b',
    host: 'https://wchat.eu.freshchat.com',
  },
};

module.exports = config;
