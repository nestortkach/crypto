export const formModel = {
  email: {
    control: 'input',
    label: 'Email',
    placeholder: 'example@mail.com',
    validationRules: { required: true },
  },
  website: {
    control: 'input',
    label: 'Website',
    placeholder: 'Your company website',
    validationRules: { required: true },
  },
};
