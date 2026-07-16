import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader/PageHeader";
import SalesSummary from "../components/Sales/SalesSummary/SalesSummary";
import QuickActions from "../components/QuickActions/QuickActions";
import SalesTable from "../components/Sales/SalesTable/SalesTable";
import InventoryOverview from "../components/InventoryOverview/InventoryOverview";
import { ContentRow } from "./Dashboard.style";

function DashboardPage() {
  return (
    <DashboardLayout>

      <PageHeader
        title="Dashboard"
        description="Here's what's happening in your store today."
      />

      <SalesSummary />

      <QuickActions />

      <ContentRow>
        <SalesTable />
        <InventoryOverview />
      </ContentRow>

    </DashboardLayout>
  );
}

export default DashboardPage;