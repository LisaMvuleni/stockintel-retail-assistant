import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  StatusBadge,
} from "./ProductTable.style";

const products = [
  {
    id: 1,
    name: "Coca-Cola 2L",
    sku: "DR001",
    category: "Drinks",
    price: "R25.99",
    stock: 245,
    status: "In Stock",
  },
  {
    id: 2,
    name: "White Bread",
    sku: "BK102",
    category: "Bakery",
    price: "R18.99",
    stock: 12,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Milk 2L",
    sku: "DY210",
    category: "Dairy",
    price: "R34.99",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "Rice 5kg",
    sku: "GR301",
    category: "Grocery",
    price: "R159.99",
    stock: 80,
    status: "In Stock",
  },
];

function ProductTable() {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>SKU</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </thead>

      <tbody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.sku}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
      =

            <TableCell>
              <StatusBadge $status={product.status}>
                {product.status}
              </StatusBadge>
            </TableCell>

            <TableCell>Edit</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductTable;