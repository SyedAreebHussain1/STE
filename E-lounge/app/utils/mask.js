export const maskCurrency = (value, maxLength = 12, radix = ",") => {
  const currencyRegExp = new RegExp(`(\\d{3})(,)?(\\d{1})`, "g");

  return value.replace(currencyRegExp, (match, p1, p2, p3) =>
    [p1, p3].join(radix)
  );
};

export const checkPhoneFormat = (phone) => {
  // temporary check for hk local number only
  return /^\d+$/.test(phone) && phone.length === 8;
};
export const calculateAmount = (total, value) => {
  // if(value){
  let amount = (Number(value) / 100) * Number(total);
  if (isNaN(amount)) {
    return "";
  } else {
    return amount;
  }
  // }
};
export const earnedAmount = (fixCommission, packageCharges, regCommission) => {
  let subTotal = parseInt(packageCharges) - 500;
  let total = calculateAmount(subTotal, parseInt(regCommission));

  return (parseInt(fixCommission) + total).toFixed(2);
};

export const calculatePercentage = (total, value) => {
  let percentage = (Number(value) / Number(total)) * 100;
  if (isNaN(percentage)) {
    return "";
  } else {
    return percentage;
  }
};

export const saveAmount = (monthlyCharges, packageValue, packageCharges) => {
  // console.log(monthlyCharges, packageValue, packageCharges);
  const amount =
    parseInt(monthlyCharges * packageValue) - parseInt(packageCharges);
  return amount;
  // return calculatePercentage(parseInt(monthlyCharges * packageValue),parseInt(packageCharges))
};
export function secondsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}