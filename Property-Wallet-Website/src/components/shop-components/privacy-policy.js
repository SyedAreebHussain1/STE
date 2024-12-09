import React, { useEffect, useState } from "react";
import Navbar from "../global-components/navbar-v2";
import Banner from "../section-components/banner-v2";

import Footer from "../global-components/footer";
import PageHeader from "../global-components/page-header";
import NavbarNewTwo from "../global-components/NavbarNewTwo";
import NavbarSand from "../global-components/NavbarSand";

const PrivacyPolicy = (props) => {
  const [title, setTitle] = useState("Privacy Policy | Property Wallet");

  useEffect(() => {
    if (props.location.pathname == "/privacy") {
      setTitle("Privacy Policy | Property Wallet");
    } else {
      setTitle("Privacy Policy | Property Wallet");
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  const content = (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#F6F9F9",
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "-5%",
        marginBottom: "3%",
      }}
    >
      <h4 style={{ marginTop: "2%" }}>1. Introduction</h4>
      <div>
        Welcome to Property Wallet, powered by Square Foot Exchange . It
        operates{" "}
        <a
          style={{
            color: "#27A3A3",
            //   fontSize: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {" "}
          propertywallet.pk{" "}
        </a>{" "}
        (hereinafter referred to as service).
        <br />
        Our Privacy Policy governs your visit to{" "}
        <a
          style={{
            color: "#27A3A3",
            //   fontSize: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {" "}
          propertywallet.pk{" "}
        </a>
        , and explains how we collect, safeguard and disclose information that
        results from your use of our Service.
        <br />
        We use your data to provide and improve service. By using Service, you
        agree to the collection and use of information in accordance with this
        policy. Our{" "}
        <a
          style={{
            color: "#27A3A3",
            //   fontSize: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {" "}
          Terms of Service{" "}
        </a>{" "}
        governs the use of our service and together with the Privacy Policy
        constitutes your agreement with us.
      </div>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>2. Definitions</h4>
      <div>
        On this page, you will come across various words which would require you
        to understand the meaning of each. Please check the following list of
        words for their meanings:
        <ul>
          <li>Property Wallet is referred to as “us”, “we”, or “our”.</li>

          <li>
            Services refers to the services offered by Property Wallet through
            our web and mobile application. This includes inventory management,
            staff management, commission management and payment plan creator.
          </li>

          <li>
            User refers to the individual using our service on a web or mobile
            application.
          </li>
          <li>
            Personal and Business Data refers to the information you have
            entered on our web and mobile application.{" "}
          </li>

          <li>
            Mobile Application refers to the Property Wallet app on Google Play
            Store and Apple App Store.
          </li>

          <li>
            Cookies are small files stored on your device (computer or mobile
            device).
          </li>
          <li>
            You refers to the person who is governed by this Privacy Policy.
          </li>
        </ul>
      </div>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>3. Information Collection and Use</h4>
      <div>
        We collect several different types of information for various purposes
        to provide and improve our service to you.
      </div>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>4. Types of Data Collected</h4>
      <div>
        <h6>4.1 Personal Data</h6>
        While using our Service, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you (“Personal Data”). Personally identifiable information may
        include, but is not limited to:
        <ul>
          <li>User’s full name</li>
          <li>CNIC number</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Address, Country, State, Province, ZIP / Postal Code, City</li>
          <li>Cookies </li>
        </ul>
        We may use your Personal Data to contact you with newsletters, marketing
        or promotional materials and other information that may be of interest
        to you. You may opt out of receiving any, or all, of these
        communications from us by following the unsubscribe link.
        <br />
        <br />
        <h6>4.2 Usage Data</h6> We may also collect information that your
        browser sends whenever you visit our Service or when you access Service
        by or through any device (“Usage Data”).
        <br />
        This Usage Data may include information such as your computer’s Internet
        Protocol address (e.g. IP address), browser type, browser version, the
        pages of our service that you visit, the time and date of your visit,
        the time spent on those pages, unique device identifiers and other
        diagnostic data.
        <br />
        <br />
        <h6>4.3 Location Data</h6>
        We may use and store information about your location if you give us
        permission to do so (“Location Data”). We use this data to provide
        features of our service, to improve and customize our service.
        <br />
        You can enable or disable location services when you use our application
        at any time through your device settings. <br />
        <br />
        <h6>4.4 Tracking Cookies Data</h6>We use cookies and similar tracking
        technologies to track the activity on our service and we hold certain
        information.
        <br />
        Cookies are your digital footprints that hold a small amount of data
        which may include an anonymous unique identifier. Cookies are sent to
        your browser from a website and stored on your device. You can instruct
        your browser to accept cookies or not. However, if you do not accept
        cookies, you may not be able to use some portions of our service.
        <br />
        Examples of Cookies we use: <br />
        <ul>
          <li>
            Session Cookies: We use Session Cookies to operate our Service.
          </li>
          <li>
            Preference Cookies: We use Preference Cookies to remember your
            preferences and various settings.
          </li>
          <li>
            Security Cookies: We use Security Cookies for security purposes.
          </li>
          <li>
            Advertising Cookies: Advertising Cookies are used to serve you with
            advertisements that may be relevant to you and your interests.
          </li>
        </ul>
        {/* <br />
        <br /> */}
        <h6>4.5 Other Data</h6>
        While using our Service, we may also collect the following information:
        gender, age, date of birth, CNIC number, place of residence and actual
        address, telephone number (work, mobile), information on commissions,
        bonuses and compensation and other data.
      </div>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>5. Use of Data</h4>
      <div>
        Property Wallet uses the collected data for various purposes:
        <ul>
          <li>to provide and maintain our Service;</li>
          <li>to notify you about changes to our Service;</li>
          <li>
            to allow you to participate in interactive features of our service
            when you choose to do so;
          </li>
          <li>to provide customer support;</li>
          <li>
            to gather analysis or valuable information so that we can improve
            our Service;
          </li>
          <li>to monitor the usage of our Service;</li>
          <li>to detect, prevent and address technical issues;</li>
          <li>
            to provide you with notices about your account and/or subscription;
          </li>
          <li>
            to provide you with news, special offers and general information
            about other goods, services and events which we offer that are
            similar to those that you have already purchased or enquired about
            unless you have opted not to receive such information;
          </li>
          <li>for any other purpose with your consent.</li>
        </ul>
      </div>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>6. Retention of Data</h4>
      <div>
        We will retain your Personal Data only for as long as is necessary for
        the purposes set out in this Privacy Policy. We will retain and use your
        Personal Data to the extent necessary to comply with our legal
        obligations (for example, if we are required to retain your data to
        comply with applicable laws), resolve disputes, and enforce our legal
        agreements and policies.
        <br />
        We will also retain Usage Data for internal analysis purposes. Usage
        Data is generally retained for a shorter period, except when this data
        is used to strengthen the security or to improve the functionality of
        our service, or we are legally obligated to retain this data for longer
        time periods.
      </div>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>7. Transfer of Data</h4>
      <div>
        Your information, including Personal Data, may be transferred to – and
        maintained on – computers located outside of your state, province,
        country or other governmental jurisdiction where the data protection
        laws may differ from those of your jurisdiction.
        <br />
        If you are located outside Pakistan and choose to provide information to
        us, please note that we transfer the data, including Personal Data, to
        Pakistan and process it there.
        <br />
        Your consent to this Privacy Policy followed by your submission of such
        information represents your agreement to that transfer.
        <br />
        Square Foot Exchange will take all the steps reasonably necessary to
        ensure that your data is treated securely and in accordance with this
        Privacy Policy and no transfer of your Personal Data will take place to
        an organization or a country unless there are adequate controls in place
        including the security of your data and other personal information.
      </div>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>8. Disclosure of Data</h4>
      <div>
        We may disclose personal information that we collect, or you provide:
        <ul>
          <li>
            <h5>Business Transaction:</h5>
            <ul>
              <li>
                If we or our subsidiaries are involved in a merger, acquisition
                or asset sale, your Personal Data may be transferred.
              </li>
            </ul>
          </li>
          <li>
            <h5>Other cases. We may disclose your information also:</h5>
            <ul>
              <li>to our subsidiaries and affiliates;</li>
              <li>
                to contractors, service providers, and other third parties we
                use to support our business;
              </li>
              <li>to fulfill the purpose for which you provide it;</li>
              <li>
                for any other purpose disclosed by us when you provide the
                information;
              </li>
              <li>with your consent in any other cases;</li>
              <li>
                if we believe disclosure is necessary or appropriate to protect
                the rights, property, or safety of the company, our customers,
                or others.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>9. Security of Data</h4>
      <div>
        The security of your personal and business data and information is
        important to us and we guarantee you to protect it by all means.
        However, we recommend you to take precautions and download an antivirus
        software or firewall if a glitch appears due to a virus and other
        security threats in your system.
      </div>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>10. Third Party and Service Providers</h4>
      <p>
        We may employ third party companies and individuals to facilitate our
        service (“Service Providers”) for the purpose of providing you the
        service on our behalf, perform service-related tasks or assist us in
        analyzing how our service is used. These third parties have access to
        your Personal Data only to perform these tasks on our behalf and are
        obligated not to disclose or use it for any other purpose.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>11. Analytics</h4>
      <p>
        We may use third-party Service Providers to monitor and analyze the use
        of our service.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>12. Behavioral Remarketing</h4>
      <p>
        We may use remarketing services to advertise on third party websites to
        you after you visited our Service. We and our third-party vendors use
        cookies to inform, optimize and serve ads based on your past visits to
        our Service.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>13. Payments & Fees</h4>

      <p>
        (a) Property Wallet may offer services for which fees are applicable,
        such as property listings, advertising, or premium features. You agree
        to pay all applicable fees in accordance with the pricing and payment
        terms provided by Property Wallet.
        <br /> (b) All payments made through Property Wallet will be processed
        through secure payment gateways. Property Wallet may use third-party
        payment processors, and your use of their services is subject to their
        terms and conditions.
        <br /> (c) Payment information, including credit card details, is
        collected and processed in accordance with our Privacy Policy. <br />{" "}
        (d) Property Wallet reserves the right to change the pricing and fees
        for services at any time. Any changes will be effective upon notice to
        you.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>14. Refund Policy</h4>

      <p>
        (a) Property Wallet offers various paid services, including but not
        limited to property listings, advertising, and premium features. Refunds
        for paid services will be provided in accordance with this Refund
        Policy. <br />
        (b) All payments for services provided by Property Wallet are final and
        non-refundable, except as explicitly stated in this Refund Policy or as
        required by applicable laws. <br />
        (c) In the event of an error in payment processing, duplicate charges,
        or other payment-related issues, you must promptly contact Property
        Wallet's customer support at customer_support@propertywallet.pk to
        request a refund within 24 hours. Refund requests must include
        sufficient information to identify the transaction in question. <br />
        (d) Refund requests for services that were not delivered as promised or
        were of unsatisfactory quality will be evaluated on a case-by-case
        basis. Property Wallet reserves the right to issue refunds at its
        discretion, taking into consideration the circumstances of the request.{" "}
        <br /> (e) Property Wallet may, at its discretion, offer promotional
        discounts or special offers. Refunds or adjustments will not be provided
        for the difference between the original price and any discounted or
        promotional price. <br />
        (f) You are responsible for reviewing your transactions and ensuring the
        accuracy of your orders before making payments. Property Wallet will not
        be responsible for errors made during the ordering process. <br />
        (g) In the event of a dispute or chargeback initiated by your payment
        provider, Property Wallet reserves the right to suspend or terminate
        your access to the App until the dispute is resolved, and any associated
        fees or penalties may apply.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>15. Subscription Cancellation Policy</h4>

      <p>
        (a) Property Wallet offers subscription-based services that may include
        premium features, additional listings, or enhanced functionality.
        Subscriptions are billed on a recurring basis according to the terms and
        billing cycle selected by the user. <br />
        (b) You may cancel your subscription at any time. To cancel a
        subscription, you just have to cancel the subscription in app. <br />
        (c) Upon cancellation, you will continue to have access to the premium
        features and services until the end of the current billing cycle. After
        the current billing cycle ends, your subscription will be terminated,
        and you will lose access to the premium features and services associated
        with the subscription. <br />
        (d) Property Wallet reserves the right to modify the terms and
        conditions of subscriptions, including pricing, features, and billing
        cycles, at its discretion. Users will be notified of any changes before
        they take effect. <br />
        (e) Property Wallet may offer free trial subscriptions for certain
        services. If you subscribe to a free trial, you will be billed for the
        chosen subscription plan when the trial period expires, unless you
        cancel the subscription before the trial period ends. <br />
        (f) Any disputes related to subscription charges or cancellations should
        be directed to Property Wallet's customer support for resolution. <br />
        (g) Subscription charges are final and non-refundable, except as
        explicitly stated in the Refund Policy. <br />
        (h) If you have any questions or concerns about subscription
        cancellations or billing, please contact us at
        customer-support@propertywallet.pk.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>16. Links to Other Sites</h4>
      <p>
        Our Service may contain links to other sites that are not operated by
        us. If you click a third party link, you will be directed to that third
        party’s site. We strongly advise you to review the Privacy Policy of
        every site you visit.
        <br />
        We have no control over and assume no responsibility for the content,
        privacy policies or practices of any third party sites or services.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>17. Children’s Privacy</h4>
      <p>
        Our Services are not intended for use by children under the age of 18
        (“Child” or “Children”). We do not knowingly collect personally
        identifiable information from Children under 18. If you become aware
        that a Child has provided us with Personal Data, please contact us. If
        we become aware that we have collected Personal Data from Children
        without verification of parental consent, we take steps to remove that
        information from our servers.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>18. Changes to This Privacy Policy</h4>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. We will
        let you know via email and/or a prominent notice on our Service, prior
        to the change becoming effective and update “effective date” at the top
        of this Privacy Policy. You are advised to review this Privacy Policy
        periodically for any changes. Changes to this Privacy Policy are
        effective when they are posted on this page.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>19. Contact Us</h4>
      <p>
        If you have any questions about this Privacy Policy, please contact us.
      </p>
    </div>
  );
  return (
    <div>
      {/* <Navbar /> */}
      {/* <NavbarNewTwo /> */}
      <NavbarSand />

      <PageHeader headertitle="Privacy policy" content="" />
      {content}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
