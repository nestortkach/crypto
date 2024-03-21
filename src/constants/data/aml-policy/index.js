import React from 'react';

export const data = {
  url: 'https://guardarian.com/aml-policy',
  title: 'Guardarian anti money laundering (aml) and counter terrorist financing (ctf) policy',
  description: `At Guardarian we offer the highest levels of security to our customers. Learn about the KYC process and Anti Money Laundering policy we use.`,
  content: [
    {
      id: 'introduvtion',
      title: 'Introduction',
      content: (
        <>
          <p>
            The Guardarian AML/KYC policy is designed to prevent/mitigate against possible risks of Guardarian bang used
            as an avenue to perform illegal activities.
          </p>
          <p>
            {' '}
            Both international and local regulations require Guardarian to implement effective risk control measures to
            prevent fraud,money laundering, terrorist financing, drug and human trafficking, proliferation of weapons of
            mass destruction, corruption and bribery and to take action in case of any form of suspicious activity from
            its Users.
          </p>
          <p>Our AML/KYC policy covers the following</p>

          <ol>
            <li>Verification Process</li>
            <li>Transaction Monitoring</li>
            <li>Risk assessment</li>
          </ol>
        </>
      ),
    },
    {
      id: 'verification-process',
      title: 'Verification process',
      content: (
        <>
          <p>
            Here at Guardarian, we conduct Customer Due diligence (CDD) on every customer to prevent illegal activities,
            and Enhanced Due Diligence (EDD) for customers presenting a higher risk, such as Politically Exposed Persons
            (PEPS), according to International standards. We use a third party vendor (SUM and SUBSTANCE) to perform
            verification. The customer is required to provide genuine and authentic Government issued IDs, e.g National
            ID, International passport, Drive(s license for this purpose. Also, the customer is required to take a photo
            selfie as part of the verification process. Sum and Sub will take steps to confirm the authenticity of
            documents and information provided by the customers. Guardarian reserves the right to investigate customers
            who have been determined to be risky or suspicious. Customers that pose a higher level of risks require
            Enhanced Due Diligence where such customers are required to provide additional documents e.g utility bill
            for address verification and perform a video selfie.
          </p>
          <p>
            Guardarian reserves the right to verify User's identity on an on-going basis, especially when their
            identification information has been changed as these changes need to be updated, or customer activity seems
            to be unusual or suspicious . Guardarian reserves the right to request up-to-date documents from the Users,
            even though they have passed verification in the past.
          </p>
          <p>
            {' '}
            If a customer fails to submit the required identification documents or these documents cannot be verified,
            Guardarian may refuse to provide service to such customers.
          </p>
        </>
      ),
    },
    {
      id: 'transaction-monitoring',
      title: 'Transaction monitoring',
      content: (
        <>
          <p>
            Customer's transaction pattern is also monitored to detect unusual or suspicious transactions. Guardian will
            therefore monitor all transactions and it reserves the right to request additional information from
            customers where transactions seem suspicious and report all suspicious transactions to the relevant
            authorities through its Compliance officer.
          </p>
          <p>
            The compliance officer will carry out daily monitoring of all transactions to determine which transactions
            are legitimate and which are suspicious. Suspicious transactions are reported to the relevant authorities.
          </p>
        </>
      ),
    },
    {
      id: 'risk-assessment',
      title: 'Risk assessment',
      content: (
        <>
          <p>
            Guardarian assesses and analyses the level of risk that can be posed by each customer in line with the
            international requirements. We have a risk based approach which categorises each customer by the level of
            nsk they can possibly pose. This helps to prevent/mitigate fraud, money laundering and terrorism financing.
          </p>
        </>
      ),
    },
    {
      id: 'sanctions-policy',
      title: 'Sanctions policy',
      content: (
        <>
          <p>
            Guardarian is prohibited from transacting with individuals, companies and countries that are on prescribed
            sanctions lists. Guardarian will therefore screen customers against United Nations, European Union and US
            Office of Foreign Assets Control (OFAC) sanctions lists in all jurisdictions in which Guardarian operates.
          </p>
        </>
      ),
    },
  ],
};
