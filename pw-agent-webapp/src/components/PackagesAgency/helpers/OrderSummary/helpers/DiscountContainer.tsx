import DiscountIcon from "../../../assets/discount-icon.png";
const DiscountContainer = ({
  handleDiscount,
  discountCode,
  setDiscountCode,
}: any) => {
  return (
    <div className="packages-main-order-summary-discount-container">
      <div className="packages-main-order-summary-discount-container-code">
        <img src={DiscountIcon} />
        <span>Having a Discount code?</span>
      </div>
      <div className="packages-main-order-summary-discount-container-input">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <button onClick={handleDiscount}>Apply</button>
      </div>
    </div>
  );
};

export default DiscountContainer;
