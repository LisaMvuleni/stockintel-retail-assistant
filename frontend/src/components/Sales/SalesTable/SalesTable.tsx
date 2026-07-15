import {
    Table,
  TableHeader,
  TableHead,
  TableTitle,
  TableRow,
  TableCell,
  TableCard,
  ViewAll,
} from "./SalesTable.style";

const sales = [

    {
        id: 1,
        Receipt: "#10237",
        Customer:"Walk-in",
        Items:5,
        Total:"R459.00",
        Time:"09:53"
    },

    {
        id:2,   
        Receipt:"#10234",
        Customer:"Loyalty Member",
        Items:7,
        Total:"R512.30",
        Time:"09:18"
        },
    {
        id:3,
        Receipt:"#10233",
        Customer:"Walk-in Customer",
        Items:4,
        Total:"R198.00",
        Time:"09:05"
    },
]



function SalesTable() {
   return(
    <TableCard>
          <TableHeader>
            <TableTitle>Recent Sales</TableTitle>
             <ViewAll>View all</ViewAll>
               </TableHeader>
    <Table>
        <thead>
            <TableRow>
                <TableHead>Receipt</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Time</TableHead>
            </TableRow>
        </thead>

        <tbody>
            {sales.map((sales) => (
                <TableRow key = {sales.id}>
                 <TableCell>{sales.Receipt}</TableCell>
                 <TableCell>{sales.Customer}</TableCell>
                 <TableCell>{sales.Items}</TableCell>
                 <TableCell>{sales.Total}</TableCell>
                 <TableCell>{sales.Time}</TableCell>

                </TableRow>
            ))}
        
        </tbody>
    </Table>
    </TableCard>
   );
}


export default SalesTable;