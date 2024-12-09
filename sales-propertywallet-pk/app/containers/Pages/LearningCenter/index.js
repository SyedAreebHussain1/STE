import React from "react";
import WhatsNew from "./helpers/WhatsNew";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import HowToUse from "./helpers/HowToUse";
import PropertyWalletBenefits from "./helpers/PropertyWalletBenefits";

function LearningCenter() {
  const title = "Learning Center";
  const description = "Some videos";
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        borderRadius: "8px",
        // paddingTop: "2%",
        // paddingLeft: "1%",
        // paddingRight: "1%",
        // paddingBottom: "2%",
        paddingBottom: "20px",
      }}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="What's New">
        <WhatsNew />
      </PapperBlock>
      <PapperBlock title="How to use">
        <HowToUse />
      </PapperBlock>
      <PapperBlock title="Property Wallet benefits">
        <PropertyWalletBenefits />
      </PapperBlock>
    </div>
  );
}

export default LearningCenter;
