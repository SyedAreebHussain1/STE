import React from "react";
import Sections from "../../../IdeaEvaluation/helpers/Sections";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import RoundedButton from "../../../../components/button/RoundedButton";

const OnBoardingProceed = () => {
    return (
        <React.Fragment>
            <PageContainer>

                <div>
                    <Sections />
                </div>
                <div className="flex items-end justify-end">
                    <div className="flex gap-2">
                        <RoundedButton
                            title={"Validate another idea"}
                            sm
                            type="primary"
                        />
                        <RoundedButton
                            title={"Continue"}
                            sm
                           type="secondary"
                        />
                    </div>
                </div>
            </PageContainer>
        </React.Fragment>
    )
}

export default OnBoardingProceed;