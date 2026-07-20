namespace StockIntel.Domain.Entities;

public class Product
{
    public Guid Id { get; set; }

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

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    // Foreign Keys
    public Guid CategoryId { get; set; }

    public Guid SupplierId { get; set; }

    // Navigation Properties
    public Category Category { get; set; } = null!;

    public ICollection<SaleItem> SaleItems { get; set; } = new List<SaleItem>();
}