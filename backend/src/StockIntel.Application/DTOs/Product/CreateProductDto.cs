namespace StockIntel.Application.DTOs.Product;

public class CreateProductDto
{
    public string Name { get; set; } = string.Empty;

    public string SKU { get; set; } = string.Empty;

    public string Barcode { get; set; } = string.Empty;

    public string? Description { get; set; }

    public decimal CostPrice { get; set; }

    public decimal SellingPrice { get; set; }

    public int QuantityInStock { get; set; }

    public int ReorderLevel { get; set; }

    public string? ImageUrl { get; set; }

    public bool IsActive { get; set; } = true;

    public Guid CategoryId { get; set; }

    public Guid? SupplierId { get; set; }
}