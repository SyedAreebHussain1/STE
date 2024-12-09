import React, { useEffect, useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  withStyles,
  Paper,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const CustomStepConnector = withStyles((theme) => ({
  active: {
    '& $line': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  completed: {
    '& $line': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.divider,
    borderRadius: 1,
  },
}))(StepConnector);

const Steps = ({ items, current, prevCurrent, state }) => {
  const [activeStep, setActiveStep] = useState(current);

  useEffect(() => {
    setActiveStep(current);
  }, [current]);

  return (
    <>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<CustomStepConnector />}
      >
        {items.map((item, index) => (
          <Step key={index}>
            <StepLabel>{item.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Paper style={{ padding: 20 }}>
      <div style={{ paddingTop: '35px' }}>
        {items.map((step, index) => (
          <div key={index} style={{ display: current === index ? 'block' : 'none' }}>
            {typeof step.component === 'function'
              ? step.component(current, state)
              : step.component}
          </div>
        ))}
      </div>
      </Paper>
    </>
  );
};

Steps.propTypes = {
  items: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  prevCurrent: PropTypes.number,
};

export default Steps;
