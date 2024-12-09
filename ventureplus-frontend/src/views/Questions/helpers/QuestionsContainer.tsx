import React, { useEffect, useRef } from "react";
import questionSideImg from "../../../assets/questionSideImg.png"
import rocketGIF from "../../../assets/question/rocketGIF.gif"
import bgRocketGIF from "../../../assets/question/bg-rocketGIF.png"
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type QuestionsContainerProps = {
    children: React.ReactNode;
};

export const QuestionsContainer = ({ children }: QuestionsContainerProps) => {
    const getQuestionById = useSelector(
        (state: RootState) => state?.getQuestionById
    );

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    useEffect(() => {
        if (getQuestionById?.data) {
            scrollToTop()
        }
    }, [getQuestionById?.data]);

    return (
        <Row className="w-full ">
            <Col sm={24} md={24} lg={24} xs={24}>
                <div className="p-6 ml-5 ">
                    {children}
                </div>
            </Col>
        </Row>
    );
};
