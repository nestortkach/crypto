import React from 'react';

export default {
  blockTitle: 'Exchange',
  blockData: [
    {
      title: 'How do I create an exchange?',
      content: (
        <>
          <p>The exchange process begins in [https://guardarian.com/](https://guardarian.com/)</p>

          <p>
            <strong>**Important!**</strong> Before you proceed, please be sure that the URL in your browser’s address
            bar is correct.
          </p>

          <p>
            <strong>
              **Phishing websites regularly attempt to impersonate exchange platforms by creating the same layout and
              using a similar web address.**
            </strong>
          </p>

          <p>
            <strong>**Actions**:</strong>
          </p>

          <ol>
            <li>Type in the amount and currency you would like to exchange.</li>
            <li>Choose the currency you would like to get in the &apos;You Get&apos; drop-down list.</li>
            <li> We will calculate your estimated amount you will get. Click &apos;Buy&apos;</li>
            <li>Choose your preferred payment method and get acquainted with our terms of service.</li>
            <li>Insert the correct payout (wallet) address where you&apos;d like to receive the crypto.</li>
            <li>Insert your country extension and mobile number and click &apos;Send Code&apos;.</li>
            <li>Type in the received code and proceed to identity verification and payment.</li>
            <li>Sit back and wait for the exchange to be made.</li>
          </ol>
        </>
      ),
    },
    {
      title: 'How fast will my exchange be completed?',
      content: (
        <>
          <p>
            The exchange process speed depends on the cryptocurrency network speed and your preferred payment method.
          </p>
          <p>Card payments are usually faster, taking only minutes for the funds to be transferred.</p>
          <p>Bank transfers may take up to 1-3 business days.</p>
          <p>If your bank provides Instant SEPA payments, then the process is much faster.</p>
          <p>
            In any case, we start the exchange process immediately after we&apos;ve received the deposit on our side.
          </p>
        </>
      ),
    },
    {
      title: 'What is the expected exchange rate?',
      content: (
        <p>
          The expected exchange rate is considered as the rate at the moment of calculation. The process of receiving
          your deposit and confirmation of a transaction takes time. Depending on market volatility the final amount can
          be changed.
        </p>
      ),
    },
    {
      title: 'What are the fees associated with exchanges?',
      content: (
        <p>
          Fees depend on the type of payment method used. All of the fees are already included in the estimates
          displayed in the calculator. No extra fees are added to the estimated amount.
        </p>
      ),
    },
    {
      title: 'What are the supported countries/regions?',
      content: (
        <>
          <p>
            <strong>EU and rest of the world: </strong>
            Service provided in all countries of the European Union and worldwide in general. Exceptions seen below.
          </p>
          <p>
            <strong>USA: </strong>
            Guardarian services are supported in 39 states of the USA.
          </p>
          <p>
            <u>States which are currently not supported: </u>
            Alabama, Alaska, Hawaii, Louisiana, Nevada, New Mexico, New York, Ohio, Rhode Island, South Dakota, Vermont,
            Washington.
          </p>
          <p>
            <u>Countries currently not available: </u> Afghanistan, American Samoa, Anguilla, Crimea, Cuba, Fiji, Guam,
            Iran, North Korea (Democratic Republic of Korea), Palau, Samoa, Sudan, Syria, US Virgin Island, Yemen.
          </p>
          <p>
            <u>Countries temporarily not supported: </u>Russia, Belarus, Ukraine, China.
          </p>
        </>
      ),
    },
    {
      title: 'Which fiat currencies are supported? ',
      content: (
        <p>
          We currently support over 40 fiat currencies and are constantly adding more. The available currencies can be
          seen in the calculator on the main page -{' '}
          <a href='http://www.guardarian.com' style={{ color: '#0042b8' }}>
            www.guardarian.com{' '}
          </a>
        </p>
      ),
    },
    {
      title: 'How can I check the status of my transaction?',
      content: (
        <p>
          Transaction URL would be provided to you during the exchange process. Using it, you may follow the progress of
          the exchange and have an understanding which steps needed to be done next.
        </p>
      ),
    },
    {
      title: 'Can I receive a refund?',
      content: (
        <>
          <p>
            Guardarian can make a refund only under certain circumstances. Due to the market specifics, we are unable to
            provide you a full list of cases where a refund is guaranteed.
          </p>
          <p>Cases when it&apos;s impossible to make a refund:</p>
          <ul>
            <li>The order is finished and crypto funds are already on the chain.</li>
            <li>The order completely passed the exchange stage</li>
          </ul>
          <p>
            Always make sure to get in touch with our support team to find out if there is a possibility to get a refund
            for your exchange.
          </p>
        </>
      ),
    },
    {
      title: 'Can I buy crypto with virtual card ?',
      content: (
        <p>
          Yes, you can use your virtual card for transactions up to 500 EUR if you pass card verification successfully.
          To pass card verification, you need to provide an image of your card with your name and card number seen
          clearly on it.
        </p>
      ),
    },
    {
      title: 'Can I buy crypto with a Company card ?',
      content: <p>No, all payments have to originate from the customer’s personal card or payment account.</p>,
    },
  ],
};
