import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../../components/GuideSlider/guide-jss";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  MobileStepper,
  Slide,
  Typography,
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
// import guideSteps from "../../../../api/dummy/guideData";
import PropTypes from "prop-types";
import StepOne from "./Steps/StepOne/StepOne";
import StepTwo from "./Steps/StepTwo/StepTwo";
import StepThree from "./Steps/StepThree/StepThree";
import { tourCheckAction } from "../../../../redux/modules/Auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "../../../../utils/storage";

const guideSteps = [
  {
    title: "Book Now",
    component: <StepOne />,
  },
  {
    title: "Contact Us",
    component: <StepTwo />,
  },
  {
    title: "Join Whatsapp Group",
    component: <StepThree />,
  },
];

const maxStepsSwipe = guideSteps.length;

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return <Slide direction="up" ref={ref} {...props} />;
});
const OnBoardingGuide = (props) => {
  const dispatch = useDispatch();
  const tourCheck = useSelector((state) => state.getIn(["tourCheck"]));
  const [activeStepSwipe, setActiveStepSwipe] = useState(0);
  const user = getFromStorage("user");

  const handleNextSwipe = () => {
    setActiveStepSwipe(activeStepSwipe + 1);
  };

  const handleBackSwipe = () => {
    setActiveStepSwipe(activeStepSwipe - 1);
  };

  const handleStepChangeSwipe = (index) => {
    setActiveStepSwipe(index);
  };

  const handleClose = () => {
    // const { closeGuide } = props;
    // closeGuide();
    // setActiveStepSwipe(0);
  };

  const { classes, theme, openGuide, closeGuide } = props;

  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      open={openGuide}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
      fullWidth
      maxWidth='md'
      scroll="body"
    >
      <DialogContent className={classes.rootContent}>
        <article className={classes.text}>
          <Typography variant="h6">
            {guideSteps[activeStepSwipe].title}
          </Typography>
        </article>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStepSwipe}
          onChangeIndex={handleStepChangeSwipe}
          enableMouseEvents
          className={classes.guideWrap}
        >
          {guideSteps.map((step, index) => (
            <div
              key={index.toString()}
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              {step.component}
            </div>
          ))}
        </SwipeableViews>

        <MobileStepper
          variant="progress"
          steps={maxStepsSwipe}
          position="static"
          activeStep={activeStepSwipe}
          className={classes.mobileStepper}
          nextButton={
            activeStepSwipe === maxStepsSwipe - 1 ? (
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  tourCheckAction(dispatch, user.id);
                }}
              >
                {tourCheck.loading ? (
                  <CircularProgress
                    className={classes.progress}
                    size={20}
                    color="white"
                  />
                ) : (
                  <>Done</>
                )}

                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            ) : (
              <Button size="small" onClick={handleNextSwipe}>
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            )
          }
          backButton={
            <Button
              size="small"
              onClick={handleBackSwipe}
              disabled={activeStepSwipe === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </DialogContent>
    </Dialog>
  );
};

OnBoardingGuide.propTypes = {
  openGuide: PropTypes.bool.isRequired,
  closeGuide: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(OnBoardingGuide);
