import { StatusBadge } from "../Product/ProductTable/ProductTable.style";
import {
    Table,
  TableHeader,
  TableHead,
  TableTitle,
  TableRow,
  TableCell,
  TableCard,
  ViewAll,
} from "./Stock.style";

const stock = [
    {
        id: 1,
        Product: "Milk 2L",
        Stock: 18,
        Status: "Low Stock"
    },

    {
        id: 2,
        Product: "Coca-Cola 300ml",
        Stock: 0,
        Status: "Out of Stock"
    },

    {
        id: 3,
        Product: "White bread",
        Stock: 20,
        Status:"Low Stock"
    },
]

function LowStockTable() {
    return(
    <TableCard>
         <TableHeader>
                    <TableTitle>Low Stock Products</TableTitle>
                     <ViewAll>View all</ViewAll>
                       </TableHeader>
    <Table>
        <thead>
            <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
            </TableRow>
        </thead>

        <tbody>
            {stock.map((stock) => (
                   <TableRow key = {stock.id}>
                   <TableCell>{stock.Product}</TableCell>
                   <TableCell>{stock.Stock}</TableCell>
                  

        
                   <TableCell>
                     <StatusBadge $status={stock.Status}>
                        {stock.Status}
                     </StatusBadge>
                   </TableCell>

                   </TableRow>

            ))}
        </tbody>
        </Table>                   

    </TableCard>

    );
}

export default LowStockTable;