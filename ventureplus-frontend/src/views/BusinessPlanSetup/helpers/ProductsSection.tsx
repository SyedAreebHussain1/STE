import { useNavigate } from "react-router-dom";
import { circularPlusIcon } from "../../../assets";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import ProductCard from "./ProductCard";
import CardSkeleton from "../../../components/skeletons/CardSkeleton";
import NoItems from "./NoContent";

interface ProductsSectionI {
  products: ProductCardT[];
}

export type ProductCardT = {
  id: number;
  name: string;
  businessPlanId: number;
  description: any;
  costPrice: any;
  sellingPrice: any;
  productPhoto: any;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  createdBy: number;
  updatedBy: any;
};

const ProductsSection = ({ products }: ProductsSectionI) => {
  const navigate = useNavigate();

  return (
    <div className="mb-4 w-full flex flex-col">
      <div className="flex justify-between items-center w-full">
        <h1 className="heading-s font-semibold">Products</h1>
        <ButtonWithSvg
          title={"Add Product"}
          icon={circularPlusIcon}
          sm
          type="primary"
          onClick={() => navigate("/business-plan-setup/add-product")}
        />
      </div>
      {products ? (
        <div className="flex gap-4 py-3 overflow-x-auto custom-scrollbar mt-4">
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      ) : (
        <CardSkeleton />
      )}

      {products?.length === 0 && <NoItems />}
    </div>
  );
};

export default ProductsSection;
