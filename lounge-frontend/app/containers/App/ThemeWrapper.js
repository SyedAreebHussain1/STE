import React, { useState, useEffect, useCallback } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Loading from "@material-ui/core/LinearProgress";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { bindActionCreators } from "redux";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import {
  changeThemeAction,
  changeModeAction,
  changeGradientAction,
  changeDecoAction,
  changeBgPositionAction,
  changeLayoutAction,
  changeDirectionAction,
} from "dan-redux/actions/uiActions";
import { TemplateSettings } from "dan-components";
import applicationTheme from "../../styles/theme/applicationTheme";

const styles = {
  root: {
    width: "100%",
    minHeight: "100%",
    marginTop: 0,
    zIndex: 1,
  },
  loading: {
    zIndex: 10,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    opacity: 1,
    transition: "opacity .5s ease",
  },
  loadingWrap: {
    background: "none",
  },
  bar: {
    background: "rgba(255, 255, 255, 0.7)",
  },
  hide: {
    opacity: 0,
  },
};

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const ThemeContext = React.createContext(undefined);

function ThemeWrapper(props) {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState(
    // eslint-disable-next-line
    createMuiTheme(applicationTheme(props.color, props.mode, props.direction))
  );
  const [paletteState, setPalette] = useState(undefined);

  const {
    classes,
    children,
    color,
    mode,
    palette,
    gradient,
    decoration,
    bgPosition,
    layout,
    direction,
  } = props;

  useEffect(() => {
    setPalette(palette);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
        }
        const diff = Math.random() * 40;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChangeTheme = (event) => {
    const { changeTheme } = props;
    setTheme(
      createMuiTheme(applicationTheme(event.target.value, mode, direction))
    );
    changeTheme(event.target.value);
  };

  const handleChangeRandomTheme = useCallback(() => {
    const { changeTheme } = props;
    const paletteArray = palette.toJS();
    const randomTheme =
      paletteArray[Math.floor(Math.random() * paletteArray.length)];

    setTimeout(() => {
      setTheme(
        createMuiTheme(
          applicationTheme(randomTheme.value, mode, direction) // eslint-disable-line
        )
      );
    }, 500);
    changeTheme(randomTheme.value);
  }, [theme]);

  const handleChangeMode = (modeParam) => {
    const { changeMode } = props;
    setTheme(createMuiTheme(applicationTheme(color, modeParam, direction)));
    changeMode(modeParam);
  };

  const handleChangeGradient = (value) => {
    const { changeGradient } = props;
    changeGradient(value);
  };

  const handleChangeDecoration = (value) => {
    const { changeDecoration } = props;
    changeDecoration(value);
  };

  const handleChangeBgPosition = (value) => {
    const { changeBgPosition } = props;
    changeBgPosition(value);
  };

  const handleChangeLayout = (value) => {
    const { changeLayout } = props;
    changeLayout(value);
  };

  const handleChangeDirection = (dirVal) => {
    // Set reducer state direction
    const { changeDirection } = props;
    setTheme(createMuiTheme(applicationTheme(color, mode, dirVal)));
    changeDirection(dirVal);

    // Set HTML root direction attribute
    document.dir = dirVal;
  };

  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Loading
            variant="determinate"
            value={progress}
            className={progress >= 100 ? classes.hide : ""}
            classes={{
              root: classes.loading,
              colorPrimary: classes.loadingWrap,
              barColorPrimary: classes.bar,
            }}
          />
          <TemplateSettings
            palette={paletteState}
            selectedValue={color}
            mode={mode}
            gradient={gradient}
            decoration={decoration}
            bgPosition={bgPosition}
            layout={layout}
            direction={direction}
            changeTheme={handleChangeTheme}
            changeRandomTheme={handleChangeRandomTheme}
            changeMode={handleChangeMode}
            changeGradient={handleChangeGradient}
            changeDecoration={handleChangeDecoration}
            changeBgPosition={handleChangeBgPosition}
            changeLayout={handleChangeLayout}
            changeDirection={handleChangeDirection}
          />
          <ThemeContext.Provider value={handleChangeMode}>
            {children}
          </ThemeContext.Provider>
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

ThemeWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  decoration: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  palette: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeGradient: PropTypes.func.isRequired,
  changeDecoration: PropTypes.func.isRequired,
  changeBgPosition: PropTypes.func.isRequired,
  changeLayout: PropTypes.func.isRequired,
  changeDirection: PropTypes.func.isRequired,
};

const reducer = "ui";
const mapStateToProps = (state) => ({
  force: state, // force state from reducer
  color: state.getIn([reducer, "theme"]),
  palette: state.getIn([reducer, "palette"]),
  mode: state.getIn([reducer, "type"]),
  gradient: state.getIn([reducer, "gradient"]),
  decoration: state.getIn([reducer, "decoration"]),
  bgPosition: state.getIn([reducer, "bgPosition"]),
  layout: state.getIn([reducer, "layout"]),
  direction: state.getIn([reducer, "direction"]),
});

const dispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
  changeMode: bindActionCreators(changeModeAction, dispatch),
  changeGradient: bindActionCreators(changeGradientAction, dispatch),
  changeDecoration: bindActionCreators(changeDecoAction, dispatch),
  changeBgPosition: bindActionCreators(changeBgPositionAction, dispatch),
  changeLayout: bindActionCreators(changeLayoutAction, dispatch),
  changeDirection: bindActionCreators(changeDirectionAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withStyles(styles)(ThemeWrapperMapped);
