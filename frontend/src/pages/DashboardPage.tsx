import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader/PageHeader";
import SalesSummary from "../components/Sales/SalesSummary/SalesSummary";
import QuickActions from "../components/QuickActions/QuickActions";
import SalesTable from "../components/Sales/SalesTable/SalesTable";
import InventoryOverview from "../components/InventoryOverview/InventoryOverview";
import { BottomRow, TopRow } from "./Dashboard.style";
import LowStockTable from "../components/Stock/Stock";

import { PageContent } from "../components/layout/DashboardLayout/DashboardLayout.style";

function DashboardPage() {
  return (
    <DashboardLayout>
      <PageContent>

        <PageHeader
          title="Dashboard"
          description="Here's what's happening in your store today."
        />

        <SalesSummary />

        <QuickActions />

        <TopRow>
          <SalesTable />
          <LowStockTable />
        </TopRow>

        <BottomRow>
          <InventoryOverview />
        </BottomRow>

      </PageContent>
    </DashboardLayout>
  );
};

export default DashboardPage;