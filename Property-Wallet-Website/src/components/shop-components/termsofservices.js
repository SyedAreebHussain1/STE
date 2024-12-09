import React, { useEffect, useState } from "react";
import Navbar from "../global-components/navbar-v2";
import Banner from "../section-components/banner-v2";

import Footer from "../global-components/footer";
import PageHeader from "../global-components/page-header";
import NavbarNewTwo from "../global-components/NavbarNewTwo";
import NavbarSand from "../global-components/NavbarSand";

const TOS = (props) => {

  const [title, setTitle] = useState("Terms of services | Property Wallet");


  useEffect(() => {
    if (props.location.pathname == "/terms") {
      setTitle("Terms of services | Property Wallet")
    } else {
      setTitle("Terms of services | Property Wallet")
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
      <p>
        Our Privacy Policy also governs your use of our service and explains how
        we collect, safeguard and disclose information that results from your
        use of our web pages. Your agreement with us includes these Terms and
        our Privacy Policy (“Agreements”). You acknowledge that you have read
        and understood Agreements, and agree to be bound by them.
        <br />
        Our Privacy Policy also governs your use of our service and explains how
        we collect, safeguard and disclose information that results from your
        use of our web pages. Your agreement with us includes these Terms and
        our Privacy Policy (“Agreements”). You acknowledge that you have read
        and understood Agreements, and agree to be bound by them.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>2. Definitions</h4>
      <p>
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
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>3. Acknowledgement</h4>
      <p>
        By using service or other services provided by Property Wallet, you
        acknowledge that you have read these terms of service and agree to be
        bound by them.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>4. Communications</h4>
      <p>
        By using our Service, you agree to subscribe to newsletters, marketing
        or promotional materials and other information we may send. However, you
        may opt out of receiving any, or all, of these communications from us by
        following the unsubscribe link.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>5. Payments</h4>
      <p>
        As of now, Property Wallet is a free tool for real estate business
        owners and agents. In the coming time, we may launch certain features
        that would require some payment. In that case, we will make use of
        third-party services that would require you to add relevant information
        for payment processing. This might include but not limited to, your
        credit or debit card number, the expiration date of your card, your
        billing address, and your shipping information. <br />
        You represent and warrant that: (i) you have the legal right to use any
        card(s) or other payment method(s) in connection with any Purchase; and
        that (ii) the information you supply to us is true, correct and
        complete.
        <br />
        We may employ the use of third party services for the purpose of
        facilitating payment and the completion of Purchases. By submitting your
        information, you grant us the right to provide the information to these
        third parties subject to our Privacy Policy.
        <br />
        We reserve the right to refuse or cancel your order at any time for
        reasons including but not limited to: product or service availability,
        errors in the description or price of the product or service, error in
        your order or other reasons. <br />
        We reserve the right to refuse or cancel your order if fraud or an
        unauthorized or illegal transaction is suspected.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>6. Prohibited Uses</h4>
      <p>
        You may use service only for lawful purposes and in accordance with
        Terms. You agree not to use service:
        <ul>
          <li>
            In any way that violates any applicable national or international
            law or regulation.
          </li>

          <li>
            For the purpose of exploiting, harming, or attempting to exploit or
            harm minors in any way by exposing them to inappropriate content or
            otherwise.
          </li>

          <li>
            To transmit, or procure the sending of, any advertising or
            promotional material, including any “junk mail”, “chain letter,”
            “spam,” or any other similar solicitation.
          </li>
          <li>
            To impersonate or attempt to impersonate a company, any employee,
            another user, or any other person or entity.
          </li>

          <li>
            In any way that infringes upon the rights of others, or in any way
            is illegal, threatening, fraudulent, or harmful, or in connection
            with any unlawful, illegal, fraudulent, or harmful purpose or
            activity.
          </li>

          <li>
            To engage in any other conduct that restricts or inhibits anyone’s
            use or enjoyment of Service, or which, as determined by us, may harm
            or offend Company or users of Service or expose them to liability.
          </li>
        </ul>
        Additionally, you agree not to:
        <ul>
          <li>
            Use Service in any manner that could disable, overburden, damage, or
            impair Service or interfere with any other party’s use of service,
            including their ability to engage in real time activities through
            service.
          </li>

          <li>
            Use any robot, spider, or other automatic device, process, or means
            to access our app for any purpose.
          </li>

          <li>
            Use any device, software, or routine that interferes with the proper
            working of service.
          </li>
          <li>
            Introduce any viruses, trojan horses, worms, logic bombs, or other
            material which is malicious or technologically harmful.
          </li>

          <li>
            Attempt to gain unauthorized access to, interfere with, damage, or
            disrupt any parts of our app, or any server, computer, or database
            connected to it.
          </li>

          <li>Take any action that may damage or falsify company ratings.</li>
          <li>
            Otherwise attempt to interfere with the proper working of the app.
          </li>
        </ul>
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>7. Analytics</h4>
      <p>
        We may use third-party Service Providers to monitor and analyze the use
        of our Service.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>8. No Use By Minors</h4>
      <p>
        Service is intended only for access and use by individuals at least
        eighteen (18) years old. By accessing or using the Property Wallet app,
        you warrant and represent that you are at least eighteen (18) years of
        age and with the full authority, right, and capacity to enter into this
        agreement and abide by all of the terms and conditions of Terms. If you
        are not at least eighteen (18) years old, you are prohibited from both
        the access and usage of the app.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>9. Accounts</h4>
      <p>
        When you create an account with us, you guarantee that you are above the
        age of 18, and that the information you provide us is accurate,
        complete, and current at all times. Inaccurate, incomplete, or obsolete
        information may result in the immediate termination of your account on
        the app.
        <br />
        You are responsible for maintaining the confidentiality of your account
        and password, including but not limited to the restriction of access to
        your computer and/or account. You agree to accept responsibility for any
        and all activities or actions that occur under your account and/or
        password, whether your password is with our service or a third-party
        service. You must notify us immediately upon becoming aware of any
        breach of security or unauthorized use of your account.
        <br />
        You may not use as a username the name of another person or entity or
        that is not lawfully available for use, a name or trademark that is
        subject to any rights of another person or entity other than you,
        without appropriate authorization. You may not use as a username any
        name that is offensive, vulgar or obscene. <br />
        We reserve the right to refuse service, terminate accounts, remove or
        edit content, or cancel orders at our sole discretion.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>10. Intellectual Property</h4>
      <p>
        Service and its original content (excluding content provided by users),
        features and functionality are and will remain the exclusive property of
        Property Wallet and its licensors. It is protected by copyright,
        trademark, and other laws of and foreign countries. Our trademarks may
        not be used in connection with any product or service without the prior
        written consent of Property Wallet.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>11. Copyright Policy</h4>
      <p>
        We respect the intellectual property rights of others. It is our policy
        to respond to any claim that content posted on Service infringes on the
        copyright or other intellectual property rights (“Infringement”) of any
        person or entity.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>12. Links To Other Websites</h4>
      <p>
        Our website or mobile application may contain links to third party web
        sites or services that are not owned or controlled by Property Wallet.{" "}
        <br />
        Property Wallet has no control over, and assumes no responsibility for
        the content, privacy policies, or practices of any third party web sites
        or services. We do not warrant the offerings of any of these
        entities/individuals or their websites.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>13. Termination</h4>
      <p>
        In case of a breach of terms, we may terminate or suspend your account
        and its access to the app immediately, without prior notice or
        liability, under our sole discretion. If you wish to delete your
        account, you may simply discontinue using our app.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>14. Governing Law</h4>
      <p>
        These Terms shall be governed and construed in accordance with the laws
        of Pakistan, which governing law applies to agreement without regard to
        its conflict of law provisions.
        <br />
        Our failure to enforce any right or provision of these Terms will not be
        considered a waiver of those rights. If any provision of these Terms is
        held to be invalid or unenforceable by a court, the remaining provisions
        of these Terms will remain in effect.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>15. Changes To Service</h4>
      <p>
        We reserve the right to withdraw or amend our features on the website
        and mobile application, and any service or material we offer, in our
        sole discretion without notice. We will not be liable if for any reason
        all or any part of service is unavailable at any time or for any period.
        From time to time, we may restrict access to some parts of the service,
        or the entire service, to users.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>16. Amendments To Terms</h4>
      <p>
        We may amend Terms at any time by posting the amended terms on this
        site. It is your responsibility to review these Terms periodically.
        <br />
        Your continued use of the Platform following the posting of revised
        Terms means that you accept and agree to the changes. You are expected
        to check this page frequently so you are aware of any changes, as they
        are binding on you. <br />
        By continuing to access or use our service after any revisions become
        effective, you agree to be bound by the revised terms. If you do not
        agree to the new terms, you are no longer authorized to use Service.
      </p>
      <hr style={{ borderColor: "black", borderWidth: "2px" }} />
      <h4>17. Contact Us</h4>
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

      <PageHeader headertitle="Terms of services" content="" />
      {content}
      <Footer />
    </div>
  );
};

export default TOS;
