import moment from "moment-timezone";

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export const primaryBgColor = "#6C47FF";

export function convertTimeZone(time) {
  // const time = moment.tz(tz)
  // console.log( "TIME",time);
  const localtz = moment.tz.guess();
  // console.log("TIMEZONE", localtz);
  // const date = time.tz(localtz)
  const formatDate = moment.tz(time, localtz).format("LT");
  return formatDate;
}
export function calculateTotalAmount(
  discountPercentage,
  noOfMonth,
  hotlistingPrice,
  userLimitPrice,
  listingPrice,
  websitePrice,
  websiteSetupPrice,
  fixedCommission,
  appointmentPrice,
  StandardFee
) {
  const convertedDiscount = (100 - discountPercentage) / 100;
  return parseInt(
    convertedDiscount *
      noOfMonth *
      (userLimitPrice +
        listingPrice +
        hotlistingPrice +
        websitePrice +
        appointmentPrice +
        StandardFee) +
      websiteSetupPrice
  );
}
