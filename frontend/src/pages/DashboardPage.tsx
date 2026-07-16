import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader/PageHeader";
import SalesSummary from "../components/Sales/SalesSummary/SalesSummary";
import QuickActions from "../components/QuickActions/QuickActions";
import SalesTable from "../components/Sales/SalesTable/SalesTable";
import InventoryOverview from "../components/InventoryOverview/InventoryOverview";
import { BottomRow, ContentRow, TopRow } from "./Dashboard.style";
import LowStockTable from "../components/Stock/Stock";

function DashboardPage() {
  return (
    <DashboardLayout>

      <PageHeader
        title="Dashboard"
        description="Here's what's happening in your store today."
      />

      <SalesSummary />

      <QuickActions />
    
      <TopRow>
          <SalesTable />
          <LowStockTable/>
      </TopRow>

       <BottomRow>
           <InventoryOverview/>
       </BottomRow>

      {/* <ContentRow>
        <SalesTable />
       
        <InventoryOverview />
      </ContentRow> */}

    </DashboardLayout>
  );
}

export default DashboardPage;