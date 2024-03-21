import React from 'react';
import Link from 'next/link';

import { Table } from 'components/Table';

export const data = {
  url: 'https://guardarian.com/privacy-policy',
  title: 'PRIVACY POLICY',
  description:
    'At Guardarian we always handle your data with the highest levels of security. You can read our full privacy policy here.',
  subtext: (
    <span>
      Last updated: <strong>6th April, 2021</strong>
    </span>
  ),
  content: [
    {
      id: 'introduction',
      title: 'PRIVACY POLICY',
      content: (
        <>
          <p>
            This Privacy Policy (hereinafter referred to as the <b>“Policy”</b>) describes the procedures on processing
            of Personal data of Data subjects by <b>Guardarian OÜ</b>, a legal entity, incorporated under the laws of
            the republic of Estonia, registry code: 14320990, Harju maakond, Tallinn, Kesklinna linnaosa, Rotermanni tn
            2, Tallinn 10111, Estonia, (hereinafter referred to as the <b>“Guardarian OÜ”</b> or <b>“We”</b>) when they
            use the website with the URL:{' '}
            <a style={{ color: '#4c9de8', textDecoration: 'underline' }} href='https://guardarian.com/'>
              https://guardarian.com/
            </a>{' '}
            (hereinafter referred to as the <b>“Website”</b>) and/or any of our API or third party services, listed on
            the Website, and/or interact with our online advertisements or marketing emails (collectively referred to as
            the <b>“Services”</b>).
          </p>
          <p>
            By accepting this Policy, you agree to be legally bound by it and all terms incorporated by reference. If
            you don’t agree with this Policy or any of its clauses, you shall immediately cease to use our Website.
          </p>
          <p>
            Guardarian OÜ respects your privacy and values its importance, and is wholly committed to keeping your
            information safe and secure. We process your personal data in accordance with privacy laws and this Privacy
            Policy to make sure your data protection rights are implemented and enforceable.
          </p>
          <p>
            We have implemented different technical and organizational solutions to comply with applicable legislation
            related to the processing of personal data, privacy, and data security in countries where we operate or
            where the applicable law applies to us. Policy sets forth the basic rules and principles by which we process
            your personal data, and mentions our responsibilities while processing your personal data according to
            transparency obligations.
          </p>
          <p>
            <b>THE FOLLOWING TERMS AND DEFINITIONS SHALL APPLY TO THIS POLICY:</b>
            <ul>
              <li>
                <b>“Controller”</b> or <b>“Data controller”</b> means Guardarian OÜ.
              </li>
              <li>
                <b>“Processor”</b> means a natural person or a legal entity that is engaged in the processing of
                Personal data of Data subjects under the contract concluded with Guardarian OÜ.
              </li>
              <li>
                <b>“Data subject”</b> or <b>“User”</b> means a natural person who visits the Website and / or uses the
                Services.
              </li>
              <li>
                <b>“Guardarian OÜ”</b>, <b>“Ourselves”</b>, <b>“We”</b> and <b>“Us”</b> refers to the company Guardarian
                OÜ.
              </li>
              <li>
                <b>“Personal data”</b> means information that relates to Data subject and identifies Data subject
                (Section 3).
              </li>
              <li>
                <b>“Cookies”</b> means small fragments of data sent by our web server and stored on user&apos;s device.
                Cookies are stored when you visit the Website, and this allows us to make it work effectively: Cookies
                allow us to save your selected settings (e.g., language) and analyze Website traffic.
              </li>
              <li>
                <b>“Party”</b> refers to either you or us. For the avoidance of any doubt, the contracting Parties under
                these Terms are you and Guardarian OÜ.
              </li>
              <li>
                <b>“Services”</b> means services provided by Guardarian OÜ via the Website.
              </li>
            </ul>
          </p>
        </>
      ),
    },
    {
      id: 'general-provisions',
      title: 'GENERAL PROVISIONS',
      content: (
        <>
          <p>Under this Policy, Guardarian OÜ is the Controller.</p>
          <p>
            Guardarian OÜ being a company registered in Estonia complies with the requirements of General Data
            Protection Regulation (European Union) 2016/679 (hereinafter <b>“GDPR”</b>), as well as with the
            requirements of the laws of the Republic of Estonia.
          </p>
        </>
      ),
    },
    {
      id: 'guarantees',
      title: 'GUARANTEES',
      content: (
        <>
          <p>
            We do not process any special categories of Personal data such as dracial or ethnic origin, political
            opinions, religious or philosophical beliefs etc. If Guardarian OÜ finds out that such Personal data has
            been proceeded, Guardarian OÜ will immediately delete such Personal data and will take reasonable measures
            preventing the processing of such Personal data in future.
          </p>
          <p>
            We guarantee that we do not sell Users Data directly for a monetary reward. Guardarian OÜ will not sell,
            rent, or loan any personal Information to any third party.
          </p>
          <p>We do not intend to collect personal data of persons under the age of 13 (thirteen) years old.</p>
        </>
      ),
    },
    {
      id: 'data-processed',
      title: 'DATA PROCESSED',
      content: (
        <>
          <p>We collect the following categories of Personal data from you:</p>
          <ul>
            <li>
              information necessary for your identification such as name, surname, citizenship, address, as well as
              documents and information necessary for compliance with KYC and AML rules such as copies of your
              identification documents (passport, ID card, driving license or other documents for the compliance);
            </li>
            <li>phone number and email;</li>
            <li>
              technical data - IP address, language, country, browser type, and version, time zone setting, browser
              plug-in types, some location information about where you might be, operating system and version;
            </li>
            <li>
              data on how you use the Website such as your URL clickstreams (the path you take through the Website),
              page response times, download errors, how long you stay on web pages, what you do on those pages, how
              often, and other actions;
            </li>
            <li>cookies (please see details in Section 4)</li>
          </ul>
          <p>
            We collect Personal data from third parties or other people, such as public databases, credit bureaus,
            identity verification partners, resellers and channel partners, joint marketing partners, and social media
            platforms, fraud prevention agencies and partners who help us to provide our services.
          </p>
          <p>
            We may receive Personal data mentioned in Section 3.1. of the Policy from another service provider that you
            use in case you consent to it.
          </p>
          <p>
            We collect information and contact details from publicly available sources, such as media stories, online
            registers or directories, and websites for enhanced due diligence checks, security searches, and KYC
            purposes.
          </p>
        </>
      ),
    },
    {
      id: 'cookies',
      title: 'COOKIES',
      content: (
        <>
          <p>
            Guardarian uses cookies to help Data subjects navigate through the Website and efficiently perform the
            functions of the Website. Particularly, the following kinds of cookies may be used by Guardarian in
            accordance with this Policy:
          </p>
          <ol>
            <li>
              Necessary cookies used to detect if the visitor has accepted the marketing category in the cookie banner.
            </li>
            <li>Statistics cookies used to:</li>
            <ul>
              <li>
                register a unique ID that is used to generate statistical data on how the visitor uses the Website.
              </li>
              <li>throttle request rate.</li>
              <li>allow the visitor to share content from the website onto their social media profile.</li>
              <li>determine the number of visitors accessing the Website.</li>
              <li>store the user&apos;s preferences using the Website.</li>
            </ul>
            <li>Marketing cookies used to:</li>
            <ul>
              <li>
                collect data on user behavior and interaction in order to optimize the Website and make advertisements
                on the Website more relevant.
              </li>
              <li>collect information on user preferences and/or interaction with web-campaign content.</li>
              <li>
                re-engage visitors that are likely to convert to customers based on the visitor&apos;s online behavior
                across Website.
              </li>
            </ul>
          </ol>
          <p>
            More detailed information is given in our{' '}
            <Link href='/cookies-policy' passHref>
              <span style={{ color: '#4c9de8', textDecoration: 'underline' }}>Cookie Policy.</span>
            </Link>
          </p>
        </>
      ),
    },
    {
      id: 'purposes-of-data-processing',
      title: 'PURPOSES OF DATA PROCESSING',
      content: (
        <>
          <p>
            Guardarian OÜ processes Personal data provided in Section 3 of the Policy for the following purposes:
            <ul>
              <li>
                Concluding contracts (partner agreements for participation in affiliate program, exchange service
                agreements);
              </li>
              <li>Statistical and analytical purposes;</li>
              <li>User support;</li>
              <li>Sending marketing e-mails and newsletters;</li>
              <li>User’s authorization on the Website;</li>
              <li>Improving the work of the Website;</li>
              <li>Providing User with all the functionality of the Website;</li>
              <li>KYC procedure;</li>
              <li>
                Analyzing the interaction of Data subjects with the Website for creating and launching marketing and ad
                campaigns on the Internet.
              </li>
            </ul>
          </p>
          <p>
            We process your Personal data when:
            <ul>
              <li>
                You visit and use any page of our Website Platform, regardless of where you visit or use them from;
              </li>
              <li>You apply for, receive, pay and/or use any of our Services.</li>
              <li>You communicate with us or leave a query;</li>
              <li>You subscribe to our newsletters/marketing e-mails/updates;</li>
              <li>
                We need to share your Personal data with the authorized third-parties to provide the services,
                especially for carrying out identity verification, international financial sanctions and politically
                exposed person screening and conducting KYC and AML procedure;
              </li>
              <li>We measure or analyze the Website’s traffic.</li>
            </ul>
          </p>
        </>
      ),
    },
    {
      id: 'legal-grounds-for-the-data-processing',
      title: 'LEGAL GROUNDS FOR THE DATA PROCESSING ',
      content: (
        <>
          <p>
            There are legal grounds necessary for the processing of Personal data and we count on them to process your
            Personal data. We use the main four grounds to process your Personal data: consent, contract, legal
            obligation, and legitimate interests:
            <ol>
              <li>
                Consent – the freely given, informed, and unambiguous indication of your wishes to the processing of
                your Personal data for a specific purpose which signifies agreement to the processing of Personal data.
              </li>
              <li>
                Contract – a legal ground for the processing of your Personal data necessary for us to perform a
                contract or terms and conditions to which you are a party or in order to take steps at your request
                prior to entering into the contract or terms and conditions.
              </li>
              <li>
                Legal obligations – a legal ground for the processing of your Personal data when it is necessary for
                compliance with a legal obligation to which we are subject.
              </li>
              <li>
                Legitimate Interests – a legal ground for the processing of your Personal data when it is based on our
                legitimate interests or the legitimate interests of a third party, provided that those interests are not
                outweighed by your rights and interests and those interests have a specific purpose, they are necessary,
                and they are balanced.
              </li>
            </ol>
          </p>
          <p>
            For your convenience we prepared this table to make it more comprehensive to understand what Data We process
            and why.
          </p>
          <p>
            <Table>
              <thead>
                <tr>
                  <th>TYPE OF DATA</th>
                  <th>WHY WE NEED IT</th>
                  <th>LEGAL BASIS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Name and e-mail</th>
                  <th>Contact you after the submit of ‘contact me’ request on the Website</th>
                  <th>Consent</th>
                </tr>
                <tr>
                  <th>Name, address, phone number, e-mail, payment details (BTC wallet address, etc.)</th>
                  <th>
                    Providing services and accepting payments <br />
                    <br /> Registering the user, providing access to profile on the Website
                  </th>
                  <th>Contract</th>
                </tr>
                <tr>
                  <th>Name, address, phone number, e-mail</th>
                  <th>Providing newsletters/offers/updates which may be interesting to you</th>
                  <th>Consent for newsletters; Legitimate Interests for offers and updates</th>
                </tr>
                <tr>
                  <th>Identification information</th>
                  <th>Compliance with applicable anti-money laundering and know your client rules</th>
                  <th>Legal obligation</th>
                </tr>
                <tr>
                  <th>
                    Cookies
                    <br />
                    <br /> Technical data
                    <br />
                    <br /> Data on how you use the Website
                  </th>
                  <th>
                    Keeping the Website running (managing your requests, remembering your settings, hosting, and
                    back-end infrastructure).
                    <br />
                    <br /> Improving the Website (testing features, interacting with feedback platforms, managing
                    landing pages, heat mapping the Website, traffic optimization, and data analysis and research,
                    including profiling and the use of machine learning and other techniques over your data and in some
                    cases using third parties to do this).
                    <br />
                    <br /> Statistical reasons
                  </th>
                  <th>Legitimate Interests; Consent</th>
                </tr>
                <tr>
                  <th>Name, e-mail</th>
                  <th>
                    Customer support (notifying you of any changes to the Website, services, solving issues, any bug
                    fixing).
                  </th>
                  <th>Legitimate Interests Consent</th>
                </tr>
              </tbody>
            </Table>
          </p>
        </>
      ),
    },
    {
      id: 'third-party-service-providers',
      title: 'SHARING DATA WITH THIRD PARTIES',
      content: (
        <>
          <p>We may share your Personal data with our third party service providers indicated below:</p>
          <ul>
            <li>
              SumSub https://www.sumsub.com/ for identity verification, financial sanctions, adverse media and
              politically exposed person screening and fraud prevention;
            </li>
            <li>Twilio: https://www.twilio.com/ for phone authentication;</li>
            <li>Powercash21: https://powercash21.com/ card payment service provider;</li>
            <li>Globitex: https://globitex.com/ for SEPA payment;</li>
            <li>Maxmind: https://www.maxmind.com/ services providing fraud-preventing and risk modeling tools;</li>
            <li>
              website analytics companies to analyze data and improve our services and the Website such as Google
              Analytics;
            </li>
            <li>Sendgrid: https://sendgrid.com/ for e-mails sending out;</li>
            <li>advertising companies for marketing purposes such as cGoogle AdWords;</li>
            <li>
              social media companies to promote and be present in social media such as Facebook, Instagram, LinkedIn,
              Twitter, YouTube, Telegram, GitHub, Discord, medium, Reddit.
            </li>
          </ul>
          <p>
            Please, note that in accordance with section your Personal data may be transferred to our partners who are
            located outside the EEA. This country may not provide the same level of data protection as the legislation
            of your country of residence. With each of the partners, we accept obligations under the standard
            contractual clauses adopted by the EU Commission, which give us a legal basis for such transfer.
          </p>
          <p>
            We may share your KYC data with third party virtual asset service providers that We are in a partnership
            with and if you wish to establish a business relationship with such virtual asset service providers. We will
            make sure that We only share Your Personal data with such virtual asset service providers if they comply
            with the GDPR.
          </p>
          <p>
            Although we and third-party partners take all reasonable and necessary measures to protect your Personal
            data from unauthorized access by third parties, we must inform you about the potential risks of such storage
            of your Personal data within jurisdictions outside of the EEA in accordance with Article 49 (1) (a) GDPR. By
            agreeing to processing of your Personal data in accordance with this Privacy Policy, you give us explicit
            consent to transfer of your Personal data to jurisdictions outside the EEA, despite all possible risks of
            such transfer. Among such potential risks are:
            <ol>
              <li>
                Existence of rules and regulations on processing of Personal data in such jurisdictions other than GDPR.
                Despite this, we provide Personal data subjects with the level of guarantees provided to Personal data
                subjects by GDPR.
              </li>
              <li>
                Obtaining access to your Personal data by government agencies. However, such access can be obtained by
                these authorities only in accordance with the current legislation of the relevant country and if there
                are legal grounds for obtaining access. We undertake not to disclose data in absence of a legitimate
                reason and to do so only to the minimum extent necessary for this.
              </li>
              <li>
                Attempts to illegally access Personal data. We take all the necessary measures to prevent such attempts
                and prevent unauthorized access to your Personal data.
              </li>
            </ol>
          </p>
        </>
      ),
    },
    {
      id: 'rights-of-data-subject',
      title: 'RIGHTS OF DATA SUBJECT',
      content: (
        <p>
          Each Data subject has the following rights:
          <ul>
            <li>
              Right of access: the Data subject is entitled to receive from Guardarian OÜ the information about Personal
              data that is processed by Guardarian OÜ, the purposes of Personal data processing, the categories of
              Personal data recipients, the period of Personal data storage, and the information about the transfer of
              Personal data to other jurisdictions.
            </li>
            <li>
              Right to lodge a complaint with a supervisory authority: the Data subject is entitled to file a complaint
              against Guardarian OÜ with a supervising authority of Data subject’s habitual residence or place of work,
              or with a supervising authority located in a place of possible infringement, or with a supervising
              authority of Guardarian OÜ’s residence which supervises the compliance of Guardarian OÜ with Personal data
              legislation.
            </li>
            <li>
              Right to rectification: the Data subject is entitled to rectification of inaccurate data about the Data
              subject.
            </li>
            <li>Right to erasure: the Data subject is entitled to erasure the Personal data about the Data subject.</li>
            <li>
              Right to data portability: the Data subject is entitled to receive Personal data about the Data subject in
              a structured, commonly used, and machine-readable format and transmit such data to another controller.
            </li>
            <li>
              Right to object: the Data subject is entitled to object to Personal data processing on the grounds
              relating to a particular situation (for example, if Guardarian OÜ processes Personal data for marketing
              purposes).
            </li>
            <li>Right to withdraw Data subject’s consent to Personal data processing.</li>
            <li>
              If the Data subject is intending to use one of the rights provided for in para.7.1 of the Policy, the Data
              subject shall send a mail or an email to Guardarian OÜ by using contact details of Guardarian OÜ provided
              for in Section 11 of the Policy.
            </li>
            <li>
              Once we receive any of your requests we will consider and decide on it within one month unless there is a
              justified requirement to provide such information faster. This term may be extended according to the
              applicable law. We may request specific information from you to confirm your identity when necessary and
              reasonable. This is a security measure to ensure that Personal data is not disclosed to any person who has
              no right to receive it. You do not need to pay a fee to access information or other rights but we may
              charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive or refuse to comply
              with your request in these circumstances.
            </li>
          </ul>
        </p>
      ),
    },
    {
      id: 'security',
      title: 'SECURITY AND PROTECTION OF PERSONAL DATA',
      content: (
        <p>
          Guardarian OÜ takes all the reasonable measures to protect Data subject’s Personal data from unauthorized
          access by third parties, as well as against loss, misuse, alteration, or destruction of Personal data,
          including the following:
          <ul>
            <li>
              Only authorized personnel of Guardarian OÜ have access to the Personal data of Data subjects, and these
              employees and contractors are required to treat this information as confidential.
            </li>
            <li>
              We will not permit any third parties to contact you directly on an unsolicited basis in relation to their
              own products or services. We do not sell, trade, or rent your Personal data to others.
            </li>
            <li>
              We use certain security measures to help keep your Personal data safe, but we cannot guarantee that these
              measures will stop any users trying to get around the privacy or security settings on the Website through
              unforeseen and/or illegal activity.
            </li>
            <li>
              We are constantly improving our data security systems and doing everything in our capacity to prevent its
              leakage. In case such a leak occurs, we undertake to notify users and the regulatory authority about the
              incident as quickly as possible, as well as to make every effort to minimize negative consequences.
            </li>
            <li>We test systems for vulnerabilities and security issues at least once every 12 months.</li>
            <li>Access to confidential data is protected, for example, through passwords or access tokens.</li>
            <li>The incident response processes are tested at least once every 12 months.</li>
            <li>
              An automated system has been introduced to monitor logs and other security events, as well as to generate
              warnings about abnormal or security-related events.
            </li>
          </ul>
        </p>
      ),
    },
    {
      id: 'storage-of-personal-data',
      title: 'STORAGE OF PERSONAL DATA',
      content: (
        <>
          <p>
            We strive to limit the period of Personal data processing to the necessary minimum and not to store them for
            longer than is reasonably necessary.
          </p>
          <p>
            We store Personal data as long as we need it and the retention practice depends on the type of data we
            collect, regulatory burden, and how we use the Personal data. The retention period is based on criteria that
            include legally mandated retention periods, pending or potential litigation, tax and accounting laws,
            intellectual property or ownership rights, contract requirements, operational directives or needs, and
            historical archiving. We’ll generally keep your Personal data for five years after our business relationship
            ends,or such period as may be required by applicable local laws.
          </p>
          <p>
            In some circumstances, we may anonymize your Personal data for research or statistical purposes in which
            case we may use this information indefinitely without further notice to you.
          </p>
        </>
      ),
    },
    {
      id: 'changes-to-the-privacy-policy',
      title: 'CHANGES TO THE PRIVACY POLICY',
      content: (
        <>
          <p>
            The Policy available is presented in the most up-to-date version. Over time, we may unilaterally amend the
            Policy, including to comply with the latest changes in the applicable law and jurisprudence. All changes
            come into force from the moment they are published on this page unless a different period is indicated in
            the text of the amendments.
          </p>
          <p>
            Guardarian OÜ will make every effort to organize additional ways to notify users of amendments to the
            Policy, but we ask you to regularly check for the latest version yourself.
          </p>
        </>
      ),
    },
    {
      id: 'contact-information',
      title: 'CONTACTING GUARDARIAN OÜ',
      content: (
        <>
          <p>
            If you still have any question or need clarification with regard to our privacy practice, please contact us:
            Guardarian OÜ, a private limited company incorporated in Rotermanni 2-9, 10111, Tallinn , Estonia. Email:{' '}
            <a style={{ color: '#4c9de8', textDecoration: 'underline' }} href='mailto:support@guardarian.com'>
              support@guardarian.com
            </a>{' '}
            or fill in the support contact form on the Website with the URL:{' '}
            <a
              style={{ color: '#4c9de8', textDecoration: 'underline' }}
              href='https://guardarian.freshdesk.co</a>m/support/tickets/new'
            >
              https://guardarian.freshdesk.com/support/tickets/new
            </a>
            .
          </p>
        </>
      ),
    },
  ],
};
