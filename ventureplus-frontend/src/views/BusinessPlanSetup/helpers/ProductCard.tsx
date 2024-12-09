import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { imgPlaceholderGray } from "../../../assets/accountSettingsAssets";
import RoundedButton from "../../../components/button/RoundedButton";
import { RootState } from "../../../redux/store";
import { getAllElementsOfPlanSetupApi } from "../../../services/api/BusinessPlanSetup";
import { deleteProductApi } from "../../../services/api/BusinessPlanSetup/Products";
import { ProductCardT } from "./ProductsSection";

interface Props {}

type ProductCardI = {
  product: ProductCardT;
};

const ProductCard = ({ product }: ProductCardI) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );

  const handleDeleteProduct = (id: number) => {
    if (loading) return;
    setLoading(true);
    deleteProductApi(dispatch, id, onDeleteProduct);
  };

  const onDeleteProduct = () => {
    getAllElementsOfPlanSetupApi(
      dispatch,
      currentSelectedBusinessPlan?.businessPlan?.id
    );
  };

  return (
    <div className="!min-w-[350px] w-[350px] min-h-[300px] rounded-lg p-4 flex gap-2 flex-col bg-[white]">
      <div className="rounded-lg h-[200px] w-full overflow-hidden relative">
        <img
          src={
            product?.productPhoto ? product?.productPhoto : imgPlaceholderGray
          }
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="flex items-center gap-2 absolute right-2 top-3">
          <RoundedButton
            title={"Edit"}
            type="white"
            xs
            disabled={loading}
            onClick={() =>
              navigate(`/business-plan-setup/product/${product?.id}`)
            }
            className="opacity-60"
          />
          <RoundedButton
            title={"Delete"}
            type="danger"
            xs
            onClick={() => handleDeleteProduct(product?.id)}
            loading={loading}
            className={`${
              loading ? "!cursor-not-allowed" : "!cursor-pointer"
            } opacity-60`}
          />
        </div>
      </div>
      <h1 className="body-s text-body font-bold">{product?.name}</h1>
      <p className="body-s text-paraLight line-clamp-5 flex-1">
        {product?.description}
      </p>
    </div>
  );
};

export default ProductCard;
