import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout.tsx";
import PageHeader from "../components/layout/PageHeader/PageHeader";
import ProductSummary from "../components/Product/ProductSummary/ProductSummary";
import ProductFilters from "../components/Product/ProductFilters/ProductFilters";
import ProductTable from "../components/Product/ProductTable/ProductTable";

import { ProductsContainer } from "./ProductsPage.style";

function ProductsPage() {
  return (
    <DashboardLayout>
      <ProductsContainer>
        <PageHeader
          title="Products"
          description="Manage all products in your inventory."
        />

        <ProductSummary />

        <ProductFilters />

        <ProductTable />
      </ProductsContainer>
    </DashboardLayout>
  );
}

export default ProductsPage;