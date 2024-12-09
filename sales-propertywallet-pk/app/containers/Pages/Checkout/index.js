import React, { useEffect, useRef, useState } from "react";
import basic from "../../../api/icons/Vector(9).png";
import gold from "../../../api/icons/Vector(10).png";
import silver from "../../../api/icons/Vector(11).png";
import check from "../../../api/icons/icons8_star 1.png";
import frame from "../../../api/icons/Frame.svg";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useFormControl,
  withStyles,
} from "@material-ui/core";
import { errorMessage } from "../../../utils/message";
import { getFromStorage } from "../../../utils/storage";
import "../Packages/helper/style.css";
import {
  CheckoutApi,
  DiscountAmountApi,
} from "../../../redux/modules/Packages/actions";
import {
  ADD_CHECKOUT_FAILURE,
  ADD_DISCOUNT_AMOUNT_FAILURE,
} from "../../../redux/modules/Packages/constants";
import { CheckCircleOutlined } from "@material-ui/icons";
import styles from "../../../components/Forms/user-jss";
import { saveAmount } from "../../../utils/mask";

const Checkout = (props) => {
  const { classes } = props;
  let paymentMethods = [
    {
      _id: 1,
      description: "Pay through debit/credit-card",
      url: require("../../../api/images/paymob.png"),
    },
    {
      _id: 2,
      description: "Pay through EasyPaisa-JazzCash-DirectAccountDebit",
      url: require("../../../api/images/blinq.png"),
    },
  ];
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0]);
  const handlePaymentChange = (payment) => {
    setSelectedPayment(payment);
  };

  let history = useHistory();
  const dispatch = useDispatch();

  const [isEmailValid, setIsEmailValid] = useState(true);

  const { data: discount_data, loading: discount_loading } = useSelector(
    (state) => state.getIn(["discount"])
  );
  const { data: checkout_data, loading: checkout_loading } = useSelector(
    (state) => state.getIn(["checkout"])
  );
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState(
    location.state.packages.pwSubPackage[0]
  );
  const [discount, setDiscount] = useState(null);
  const refCode = getFromStorage("user").refCode;
  const [state, setState] = useState({
    discount: "",
    fullName: "",
    email: "",
    refcode: "",
    phone: "",
  });
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const handlePackageChange = (packageItem) => {
    setDiscount(null);
    setState({
      ...state,
      discount: "",
    });
    setSelectedPackage(packageItem);
  };
  const handleDiscount = async () => {
    if (state.discount === "") {
      errorMessage("Please enter your discount");
    } else {
      let body = {
        subPackageId: selectedPackage.id,
        discountCode: state.discount,
      };
      DiscountAmountApi(body, dispatch);
    }
  };

  const onFinish = async (e) => {
    e.preventDefault();
    let body = {
      email: state.email,
      fullName: state.username,
      phone: `+92${state.phone}`,
      PwSubPackageId: selectedPackage.id,
    };
    if (state.discount !== "") {
      body.discountCode = state.discount;
    }
    if (state.refcode !== "") {
      body.refCode = state.refcode;
    }
    // console.log('body', body);
    CheckoutApi(dispatch, body, selectedPayment._id === 1 ? "PayMob" : "Blinq");
  };

  useEffect(() => {
    if (checkout_data !== null) {
      window.open(
        `${
          checkout_data.data.ClickToPayUrl !== null
            ? checkout_data.data.ClickToPayUrl
            : `https://pakistan.paymob.com/api/acceptance/iframes/132926?payment_token=${
                checkout_data.data.token
              }`
        }`,
        "",
        "width=700,height=500,left=400,top=120,"
      );
      history.goBack();
    }
    return () => {
      dispatch({ type: ADD_CHECKOUT_FAILURE });
    };
  }, [checkout_data]);

  useEffect(() => {
    if (discount_data !== null) {
      console.log(discount_data.data);
      setDiscount(discount_data.data);
    }
    return () => {
      dispatch({ type: ADD_DISCOUNT_AMOUNT_FAILURE });
    };
  }, [discount_data]);
  const onEmailChange = (value, fieldName) => {
    setState({ ...state, [fieldName]: value });

    if (fieldName === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailPattern.test(value);
      setIsEmailValid(isValidEmail);
    }
  };
  useEffect(() => {
    if (refCode !== null && refCode !== undefined) {
      setState({
        ...state,
        refcode: refCode,
      });
    }
  }, [refCode]);
  //   const { Search } = Input;
  // console.log('state', state);
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "8px",
        marginTop: "2%",
        marginLeft: "1%",
        marginRight: "1%",
        marginBottom: "2%",
        paddingBottom: "20px",
      }}
    >
      {/* section start */}
      <h2 style={{ fontSize: "22px", fontWeight: "600" }}>Package</h2>
      <div className="checkout-package-container">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Grid container spacing={1}>
              <Grid item sm={12} md={2}>
                <img
                  src={
                    location.state.packages.title
                      .toLowerCase()
                      .includes("basic")
                      ? basic
                      : location.state.packages.title
                          .toLowerCase()
                          .includes("silver")
                      ? silver
                      : gold
                  }
                  style={{ width: "70%" }}
                />
              </Grid>
              <Grid item sm={12} md={10}>
                <h3
                  style={{
                    fontWeight: "600",
                    //   fontSize: "12px",
                  }}
                >
                  {location.state.packages.title}
                </h3>
                <p style={{ fontSize: "14px" }}>
                  Experience Luxury Unveiled: Discover the Brilliance of Our
                  &nbsp;
                  {location.state.packages.title} Package
                </p>
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "28px",
                    marginTop: "3.5%",
                    // fontFamily: "Poppins",
                  }}
                >
                  PKR {selectedPackage.charges}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <h3
              style={{
                fontWeight: "500",
                //   fontSize: "12px",
              }}
            >
              Plan includes
            </h3>
            <div style={{ marginTop: "2%" }}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <li
                    style={{
                      fontSize: "1rem",
                      listStyle: "none",
                      //   fontWeight: "700",
                    }}
                    className=""
                  >
                    <img
                      src={check}
                      style={{
                        width: "16px",
                        height: "16px",
                        marginTop: "-5px",
                      }}
                    />
                    <span>
                      &nbsp;
                      <strong> {selectedPackage.noListing}</strong> Listings
                    </span>
                  </li>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <li
                    style={{
                      fontSize: "1rem",
                      listStyle: "none",
                      //   fontWeight: "700",
                    }}
                    className=""
                  >
                    <img
                      src={check}
                      style={{
                        width: "16px",
                        height: "16px",
                        marginTop: "-5px",
                      }}
                    />
                    <span>
                      &nbsp;
                      <strong> {selectedPackage.noOfUserLimit}</strong> User
                      Limits
                    </span>
                  </li>
                </Grid>
              </Grid>
              <Grid style={{ marginTop: "3%" }} container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <li
                    style={{
                      fontSize: "1rem",
                      listStyle: "none",
                      //   fontWeight: "700",
                    }}
                    className=""
                  >
                    <img
                      src={check}
                      style={{
                        width: "16px",
                        height: "16px",
                        marginTop: "-5px",
                      }}
                    />
                    <span>
                      &nbsp;
                      <strong>{selectedPackage.hotListing}</strong> Hot Listings
                    </span>
                  </li>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <li
                    style={{
                      fontSize: "1rem",
                      listStyle: "none",
                      //   fontWeight: "700",
                    }}
                    className=""
                  >
                    <img
                      src={check}
                      style={{
                        width: "16px",
                        height: "16px",
                        marginTop: "-5px",
                      }}
                    />
                    <span>
                      &nbsp;
                      <strong>{selectedPackage.noOfRefresh}</strong> Total
                      Refreshes{" "}
                    </span>
                  </li>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* section 1 end */}

      {/* section 2 start */}
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "600",
          marginTop: "5%",
          padding: "0 10px",
        }}
      >
        Package
      </h2>
      <Grid container spacing={3}>
        {location.state !== undefined &&
          location.state.packages.pwSubPackage.length > 0 &&
          location.state.packages.pwSubPackage.map((item, i) => {
            return (
              <Grid
                style={{
                  marginTop: "2.5%",
                  cursor: "pointer",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  position: 'relative'
                }}
                onClick={() => handlePackageChange(item)}
                xs={12}
                md={3}
              >
                {item.title !== "Monthly" && <div class="ribbon-3">
                  Save upto
                  <b>
                    {saveAmount(
                      location.state.packages.pwSubPackage[0].charges,
                      item.title.includes("Quarterly") ||
                        item.title.includes("Quaterly")
                        ? 3
                        : item.title.includes("Semi-Annually") ||
                          item.title.includes("Semi Annually") ||
                          item.title.includes("Semi Anually") ||
                          item.title.includes("Bi-Annually") ||
                          item.title.includes("Bi Annually") ||
                          item.title.includes("Bi-Anually") ||
                          item.title.includes("Bi Anually") ||
                          item.title.includes("Half Yearly") ||
                          item.title.includes("Half-Yearly") ||
                          item.title.includes("Half yearly")
                        ? 6
                        : item.title.includes("Annually") ||
                          item.title.includes("Anually")
                        ? 12
                        : NaN,
                      item.charges
                    )}{" "}
                  </b>
                  PKR
                </div>}
                
                <div color="cyan">
                  <div
                    className={
                      selectedPackage === item
                        ? "column-confirm-selected"
                        : "column-confirm-grey"
                    }
                  >
                    <div
                      className={
                        selectedPackage === item
                          ? "column-confirm-selected-sub"
                          : "column-confirm-grey-sub"
                      }
                    >
                      <span style={{ marginLeft: "2%" }}>{item.title}</span>
                    </div>
                    <div className="" style={{ textAlign: "center" }}>
                      <div
                        className=""
                        style={{
                          lineHeight: "1.3",
                          marginTop: "0",
                          marginBottom: "0.5rem",
                          fontWeight: "700",
                          color: "#343f52",
                          wordSpacing: "0.1rem",
                          letterSpacing: "-.01rem",
                          fontSize: "3rem",
                        }}
                      >
                        <span
                          className=""
                          style={{
                            fontSize: "1.1rem",
                            position: "relative",
                            top: "-15px",
                          }}
                        >
                          PKR
                        </span>
                        <span style={{ fontSize: "2.2rem", marginLeft: "1px" }}>
                          {item.charges}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        color: "grey",
                        marginLeft: "2%",
                        marginRight: "2%",
                        paddingBottom: "2%",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "14px",
                      }}
                    >
                      <div>
                        <p style={{ padding: "0", margin: "0" }}>{`PKR ${
                          item.charges
                        }/${
                          item.title.includes("Monthly")
                            ? "month"
                            : item.title.includes("Quarterly") ||
                              item.title.includes("Quaterly")
                            ? "every 3 months"
                            : item.title.includes("Semi-Annually") ||
                              item.title.includes("Semi Annually") ||
                              item.title.includes("Semi Anually") ||
                              item.title.includes("Bi-Annually") ||
                              item.title.includes("Bi Annually") ||
                              item.title.includes("Bi-Anually") ||
                              item.title.includes("Bi Anually")
                            ? "after 6 months"
                            : item.title.includes("Annually") ||
                              item.title.includes("Anually")
                            ? "per year"
                            : ""
                        }`}</p>
                      </div>
                      <div>
                        <Checkbox
                          style={{ padding: "0" }}
                          checked={selectedPackage === item}
                          onChange={() => handlePackageChange(item)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
      {/* section 2 end */}
      {/* payment method start */}

      <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "5%" }}>
        Choose a payment method
      </h2>
      <Grid container style={{ marginTop: "2.5%" }} spacing={3}>
        {paymentMethods.map((item, i) => {
          return (
            <Grid
              item
              style={{ cursor: "pointer" }}
              onClick={() => {
                handlePaymentChange(item);
              }}
              key={item._id}
              md={3}
              xs={12}
            >
              <div style={{ textAlign: "center", position: "relative" }}>
                {item._id === selectedPayment._id && (
                  <div
                    style={{ position: "absolute", right: "-2%", top: "-5%" }}
                  >
                    <CheckCircleOutlined className="payment-method-icon-selected" />
                  </div>
                )}

                <div
                  className={
                    item._id === selectedPayment._id
                      ? "payment-method-card-selected"
                      : "payment-method-card"
                  }
                >
                  <img src={item.url} width="50%" />
                </div>
                <span style={{ color: "grey", fontSize: "14px" }}>
                  {item.description}
                </span>
              </div>
            </Grid>
          );
        })}
      </Grid>
      {/* payment method end */}

      {/* section 3 start */}

      <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "5%" }}>
        Checkout
      </h2>
      <form onSubmit={onFinish}>
        <div className="checkout-checkout-container">
          <Grid container spacing={2}>
            <Grid
              style={{ marginTop: "2%", paddingLeft: "1%", paddingRight: "1%" }}
              xs={12}
              md={8}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControl
                    //  className={classes.formControl}
                    required
                    style={{ width: "100%" }}
                  >
                    <TextField
                      id="subscriberName"
                      label="Subscriber Name"
                      type="text"
                      // placeholder="Enter your name"
                      required
                      fullWidth
                      size="large"
                      value={state.username}
                      onChange={(e) => onChange(e.target.value, "username")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} style={{ position: "relative" }}>
                  <FormControl
                    //  className={classes.formControl}
                    required
                    style={{ width: "100%" }}
                  >
                    <TextField
                      id="email"
                      label="Email"
                      type="email"
                      required
                      fullWidth
                      size="large"
                      value={state.email}
                      onChange={(e) => onEmailChange(e.target.value, "email")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControl
                    // className={classes.formControl}
                    style={{ width: "100%" }}
                    required
                  >
                    <TextField
                      name="phone"
                      placeholder="Your Phone Number"
                      label="Phone Number"
                      type="text"
                      required
                      size="large"
                      value={state.phone}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+92</InputAdornment>
                        ),
                      }}
                      onChange={(e) => onChange(e.target.value, "phone")}
                      onKeyPress={(event) => {
                        if (!/[0-9,.]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl
                    // className={classes.formControl}

                    style={{ width: "100%" }}
                  >
                    <TextField
                      id="refCode"
                      label="Ref Code"
                      type="text"
                      fullWidth
                      size="large"
                      // placeholder="Enter your refcode"
                      disabled
                      value={state.refcode}
                      onChange={(e) => onChange(e.target.value, "refcode")}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <div style={{ marginTop: "2%" }} className="discount-container">
                <Grid container>
                  <Grid item xs={12} md={8}>
                    <div style={{ padding: "30px" }}>
                      <h5
                        style={{
                          fontWeight: "600",
                          fontSize: "22px",
                        }}
                      >
                        Want some discount?
                      </h5>
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "grey",
                        }}
                      >
                        Please enter your discount code
                      </p>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <TextField
                          name="discountCode"
                          placeholder="Enter discount code"
                          // label=""
                          type="text"
                          size="large"
                          style={{
                            width: "70%",
                          }}
                          value={state.discount}
                          onChange={(e) =>
                            setState({
                              ...state,
                              discount: e.target.value,
                            })
                          }
                          // loading={discount_loading}
                        />
                        <Button
                          onClick={() => {
                            handleDiscount();
                          }}
                          color="primary"
                          variant="contained"
                          // type="submit"
                          //   loading={checkout_loading}

                          style={{
                            borderRadius: "5px",
                            // marginTop: "3%",
                            height: "38px",
                            marginLeft: "-5px",
                            borderTopLeftRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    // style={{ backgroundColor: "red" }}
                    xs={12}
                    md={4}
                  >
                    <img src={frame} style={{ width: "100%" }} />
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="summary-container">
                <h3
                  style={{
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Summary
                </h3>
                <br />
                <Grid container>
                  <Grid item xs={2} md={1}>
                    <img
                      src={
                        location.state.packages.title
                          .toLowerCase()
                          .includes("basic")
                          ? basic
                          : location.state.packages.title
                              .toLowerCase()
                              .includes("silver")
                          ? silver
                          : gold
                      }
                      style={{ width: "70%" }}
                    />
                  </Grid>
                  <Grid item>
                    <h3
                      style={{
                        fontWeight: "500",
                        //   fontSize: "12px",
                      }}
                    >
                      {location.state.packages.title}
                    </h3>
                  </Grid>
                </Grid>
                <hr style={{ marginTop: "4%" }} />

                <div
                  style={{
                    height: "170px",
                    marginTop: "2%",
                    fontSize: "12px",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={7}>
                      <h5
                        style={{
                          fontWeight: "500",
                        }}
                      >
                        Sub total
                      </h5>
                    </Grid>
                    <Grid item xs={5}>
                      <h5
                        style={{
                          fontWeight: "500",
                          color: "grey",
                          float: "right",
                        }}
                      >
                        {`PKR ${selectedPackage.charges}`}
                      </h5>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={7}>
                      <h5
                        style={{
                          fontWeight: "500",
                        }}
                      >
                        Discount
                      </h5>
                    </Grid>
                    <Grid item xs={5}>
                      <h5
                        style={{
                          fontWeight: "500",
                          color: "grey",
                          float: "right",
                        }}
                      >
                        {`PKR ${
                          discount !== null ? discount.discountAmount : 0
                        }`}
                      </h5>
                    </Grid>
                  </Grid>
                </div>
                <Grid container spacing={1} style={{ fontSize: "12px" }}>
                  <Grid item xs={7}>
                    <h5
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      Amount to be paid
                    </h5>
                  </Grid>
                  <Grid item xs={5}>
                    <h5
                      style={{
                        fontWeight: "500",
                        color: "grey",
                        float: "right",
                      }}
                    >
                      {`PKR ${
                        discount !== null
                          ? discount.afterDiscountAmount
                          : selectedPackage.charges
                      }`}
                    </h5>
                  </Grid>
                </Grid>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  fullWidth
                  //   loading={checkout_loading}
                  style={{
                    borderRadius: "5px",
                    marginTop: "3%",
                    height: "40px",
                  }}
                >
                  {checkout_loading ? (
                    <CircularProgress
                      className={classes.progress}
                      size={20}
                      color="white"
                    />
                  ) : (
                    <>Pay now</>
                  )}
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </form>

      {/* section 3 end */}
    </div>
  );
};
export default withStyles(styles)(Checkout);
