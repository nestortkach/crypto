import { ApiLayout } from 'layout/ApiLayout';

const data = {
  header: {
    title: 'API Documentation',
    subTitle: 'Guardarian features a fully developed API which allows for a fast integration for your service.',
  },
  content: {
    title: 'Introduction',
    subTitle:
      "API offers a dynamic, useful and convenient solution for any crypto business looking to increase efficiency for their service. Guardarian's developer-friendly API lets you easily integrate the whole exchange flow including multiple payment methods with just a couple functions",
    itemsTitle: 'Process',
    items: [
      {
        title: 'Create a contract with Guardarian ',
      },
      {
        title: 'Receive access to your partner account',
      },
      {
        title: 'Get API token from partner account',
      },
      {
        title: 'Create your own exchange rate calculator',
      },
      {
        title: 'Implement necessary requests',
      },
      {
        title: 'Status',
        children: [
          {
            title:
              'This is our API health check endpoint. When the API is down you will not be able to create exchanges',
          },
        ],
      },
      {
        title: 'Get currency list',
        chidren: [
          {
            title:
              'This is a method for obtaining information about the fiat currencies that can be used to buy cryptocurrencies and vice versa',
          },
        ],
      },
      {
        title: 'Get market-info',
        children: [
          {
            title: 'This method gives access to deposit/withdrawal minimum and maximum limits',
          },
        ],
      },
      {
        title: 'Get estimate',
        children: [
          {
            title: 'Method for estimating the exchange amount',
          },
        ],
      },
      {
        title: 'Create transaction',
        children: [
          {
            title: 'This is a method for creating a fiat-to-cryptocurrency exchange transaction',
          },
        ],
      },
    ],
    button: {
      link: 'https://api-payments.guardarian.com/v1/api-docs',
      title: 'See API Documentation',
    },
  },
};

export default function api() {
  return <ApiLayout {...data} />;
}
