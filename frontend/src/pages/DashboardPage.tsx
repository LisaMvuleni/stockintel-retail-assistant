import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader/PageHeader";
import SalesSummary from "../components/Sales/SalesSummary/SalesSummary";
import SalesTable from "../components/Sales/SalesTable/SalesTable";

function DashboardPage() {

  return (
    <DashboardLayout>
      <PageHeader

        title="Dashboard"
        description="Here's what's happening in your store today."
      />

      
     <SalesSummary>

    
     </SalesSummary>
       
      <SalesTable>

        
      </SalesTable>
    
    </DashboardLayout>
  )
}


export default DashboardPage;