/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Banner from '../components/Banner';
import InfoBanner from '../components/InfoBanner';
import Footer from '../components/Footer';

export default function PrivacyPage({ data }) {
  const { banner } = data;

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Inner West Church</title>
        <meta name="title" content="Privacy Policy | Inner West Church" />
        <meta
          name="description"
          content="Inner West Church is a church of local people learning to follow Jesus together, on mission with God, in the everyday stuff of life."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://innerwestchurch.com.au/" />
        <meta
          property="og:title"
          content="Privacy Policy | Inner West Church"
        />
        <meta
          property="og:description"
          content="Privacy Policy for Inner West Church. A church of local people learning to follow Jesus together, on mission with God, in the everyday stuff of life."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://innerwestchurch.com.au/"
        />
        <meta
          property="twitter:title"
          content="Privacy Policy | Inner West Church"
        />
        <meta
          property="twitter:description"
          content="Privacy Policy for Inner West Church. A church of local people learning to follow Jesus together, on mission with God, in the everyday stuff of life."
        />
        <meta property="twitter:image" content="" />
      </Helmet>

      <InfoBanner
        title="Get to know us at our Sunday Gatherings"
        info="26 Norwood Street Flemington (St. Stephen’s Presbyterian)"
      />
      <Banner banner={banner} />
      <article className="prose container py-24">
        <h1>Privacy Policy</h1>
        <p>
          Inner West Church is committed to providing quality services to you
          and this policy outlines our ongoing obligations to you in respect of
          how we manage your Personal Information.
        </p>
        <p>
          We have adopted the Australian Privacy Principles (APPs) contained in
          the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way
          in which we collect, use, disclose, store, secure and dispose of your
          Personal Information.
        </p>
        <p>
          A copy of the Australian Privacy Principles may be obtained from the
          website of The Office of the Australian Information Commissioner at
          {' '}
          {' '}
          <a
            href="www.aoic.gov.au"
            rel="noopener noreferrer"
            target="blank"
            className="after:content-['_↗']"
          >
            www.aoic.gov.au
          </a>
        </p>
        <h2>What is Personal Information and why do we collect it?</h2>
        <p>
          Personal Information is information or an opinion that identifies an
          individual. Examples of Personal Information we collect include:
          names, addresses, email addresses, phone numbers.
        </p>
        <p>
          This Personal Information is obtained in many ways including
          interviews, correspondence, by telephone, by email, via our website
          {' '}
          <a href="https://innerwestchurch.com.au">innerwestchurch.com.au</a>
          ,
          from media and publications, from social media sites, from other
          publicly available sources, from cookies and from third parties. We
          don&apos;t guarantee website links or policy of authorised third
          parties.
        </p>
        <p>
          We collect your Personal Information for the primary purpose of
          providing our services to you, providing information to our clients
          and marketing. We may also use your Personal Information for secondary
          purposes closely related to the primary purpose, in circumstances
          where you would reasonably expect such use or disclosure. You may
          unsubscribe from our mailing/marketing lists at any time by contacting
          us in writing.
        </p>
        <p>
          When we collect Personal Information we will, where appropriate and
          where possible, explain to you why we are collecting the information
          and how we plan to use it.
        </p>
        <h2>Sensitive Information</h2>
        <p>
          Sensitive information is defined in the Privacy Act to include
          information or opinion about such things as an individual&apos;s
          racial or ethnic origin, political opinions, membership of a political
          association, religious or philosophical beliefs, membership of a trade
          union or other professional body, criminal record or health
          information.
        </p>
        <p>Sensitive information will be used by us only:</p>
        <ul>
          <li>For the primary purpose for which it was obtained.</li>
          <li>
            For a secondary purpose that is directly related to the primary
            purpose.
          </li>
          <li>With your consent; or where required or authorised by law.</li>
        </ul>
        <h2>Third Parties</h2>
        <p>
          Where reasonable and practicable to do so, we will collect your
          Personal Information only from you. However, in some circumstances we
          may be provided with information by third parties. In such a case we
          will take reasonable steps to ensure that you are made aware of the
          information provided to us by the third party.
        </p>
        <h2>Disclosure of Personal Information</h2>
        <p>
          Your Personal Information may be disclosed in a number of
          circumstances including the following:
        </p>
        <ul>
          <li>Third parties where you consent to the use or disclosure; and</li>
          <li>Where required or authorised by law.</li>
        </ul>
        <h2>Security of Personal Information</h2>
        <p>
          Your Personal Information is stored in a manner that reasonably
          protects it from misuse and loss and from unauthorized access,
          modification or disclosure.
        </p>
        <p>
          When your Personal Information is no longer needed for the purpose for
          which it was obtained, we will take reasonable steps to destroy or
          permanently de-identify your Personal Information. However, most of
          the Personal Information is or will be stored in client files which
          will be kept by us for a minimum of 7 years.
        </p>
        <h2>Access to your Personal Information</h2>
        <p>
          You may access the Personal Information we hold about you and to
          update and/or correct it, subject to certain exceptions. If you wish
          to access your Personal Information, please contact us in writing.
        </p>
        <p>
          Inner West Church will not charge any fee for your access request, but
          may charge an administrative fee for providing a copy of your Personal
          Information.
        </p>
        <p>
          In order to protect your Personal Information we may require
          identification from you before releasing the requested information.
        </p>
        <h2>Maintaining the Quality of your Personal Information</h2>
        <p>
          It is an important to us that your Personal Information is up to date.
          We will take reasonable steps to make sure that your Personal
          Information is accurate, complete and up-to-date. If you find that the
          information we have is not up to date or is inaccurate, please advise
          us as soon as practicable so we can update our records and ensure we
          can continue to provide quality services to you.
        </p>
        <h2>Policy Updates</h2>
        <p>
          This Policy may change from time to time and is available on our
          website.
        </p>
        <h2>Privacy Policy Complaints and Enquiries</h2>
        <p>
          If you have any queries or complaints about our Privacy Policy please
          contact us at:
        </p>
        <a href="mailto:info@innerwestchurch.com.au">
          info@innerwestchurch.com.au
        </a>
      </article>
      <Footer />
    </>
  );
}

export const query = graphql`
query PrivacyPolicyQuery {
    banner: sanityBanner(id: {eq: "-303f4449-570e-5049-b712-7125453ac99e"}) {
      title
      copy
      image {
        asset {
         gatsbyImageData
       }
      }
  }
}
`;
