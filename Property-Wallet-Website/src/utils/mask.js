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

export const saveAmount = (monthlyCharges, packageValue, packageCharges) => {
  const amount =
    parseInt(monthlyCharges * packageValue) - parseInt(packageCharges);

  return amount;
};
