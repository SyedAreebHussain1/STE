import React, { useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Grid } from "@material-ui/core";
import CertificatePrintAchievement from "./CertificatePrintAchievement";
import CertificatePrintAchievementDownload from "./CertificatePrintAchievementDownload";
import salesCertificate1Img from "../../../../api/images/salesCertificate1.jpg";
import salesCertificate3Img from "../../../../api/images/salesCertificate2.jpg";
import salesCertificate2Img from "../../../../api/images/salesCertificate3.jpg";
import salesCertificate4Img from "../../../../api/images/salesCertificate4.jpg";
import { getMilestonesCertificate } from "../../../../redux/modules/Milestone/actions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "dan-components/Loading";

const CertificatePrint = () => {
  const [printdata, setPrintData] = useState(null);
  const { data: certificateData, loading: certificateLoading } = useSelector(
    (state) => state.getIn(["getMilestonesCertificate"])
  );
  const [availableCertificateName, setAvailableCertificateName] = useState([]);
  const certificateNames = [
    "Sales Pro",
    "Sales Expert",
    "Sales Star",
    "Sales Champion",
  ];

  // console.log(certificateData);
  const dispatch = useDispatch();
  useEffect(() => {
    getMilestonesCertificate(dispatch);
  }, []);
  const customPrintRef = React.useRef(null);
  const handlePrint = useReactToPrint({
    content: () => customPrintRef.current,
    onAfterPrint: () => setPrintData(null),
    copyStyles: true,
    pageStyle: `
    @page
      {
  size: a4 !important;
  margin: 0px;
  
      }`,
  });
  useEffect(() => {
    if (printdata !== null) {
      handlePrint();
    }
  }, [printdata]);

  useEffect(() => {
    let names;
    if (certificateData?.data?.freeLancerAchieveResult.length > 0) {
      names = certificateData?.data?.freeLancerAchieveResult.map((item) => {
        if (item?.milestone?.certificate) {
          return item?.milestone?.certificate;
        } else {
          return "";
        }
      });

      setAvailableCertificateName([...names]);
    }
  }, [certificateData]);
  return (
    <div>
      {certificateLoading ? (
        <Loading />
      ) : (
        <>
          <div className="hidden d-print-block" ref={customPrintRef}>
            {printdata !== null && (
              <CertificatePrintAchievement data={printdata} />
            )}
          </div>
          <section>
            <h2>Download Your Certificates</h2>
            {/* <p
              style={{
                display: "block",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
              }}
            >
              to unlock other certificates complete relevant milestones.
            </p> */}
          </section>
          <div
            style={{
              minHeight: "100vh",
              backgroundColor: "white",
              borderRadius: "8px",
              paddingBottom: "20px",
            }}
          >
            <Grid
              container
              spacing={2}
              style={{
                paddingLeft: "1%",
                paddingTop: "2%",
                paddingRight: "1%",
              }}
            >
              {certificateNames.map((certifName, indexKey) => {
                if (availableCertificateName.includes(certifName)) {
                  for (
                    let i = 0;
                    i < certificateData?.data?.freeLancerAchieveResult.length;
                    i++
                  ) {
                    if (
                      certificateData?.data?.freeLancerAchieveResult[i]
                        ?.milestone?.certificate === certifName
                    ) {
                      return (
                        <Grid item md={3} sm={12} xs={12} key={indexKey}>
                          <CertificatePrintAchievementDownload
                            img={
                              certificateData?.data?.freeLancerAchieveResult[i]
                                ?.milestone?.designUrl
                                ? certificateData?.data
                                    ?.freeLancerAchieveResult[i]?.milestone
                                    ?.designUrl
                                : salesCertificate1Img
                            }
                            setPrintData={setPrintData}
                            data={
                              certificateData?.data?.freeLancerAchieveResult[i]
                            }
                            disabled={false}
                          />
                        </Grid>
                      );
                    }
                  }
                } else {
                  return (
                    <Grid item md={3} sm={12} xs={12} key={indexKey}>
                      <CertificatePrintAchievementDownload
                        img={
                          certifName != "Sales Pro"
                            ? certifName != "Sales Expert"
                              ? certifName != "Sales Star"
                                ? salesCertificate4Img
                                : salesCertificate3Img
                              : salesCertificate2Img
                            : salesCertificate1Img
                        }
                        setPrintData={""}
                        data={""}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </div>
        </>
      )}
    </div>
  );
};

export default CertificatePrint;
