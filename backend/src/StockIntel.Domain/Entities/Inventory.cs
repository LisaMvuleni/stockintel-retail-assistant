namespace StockIntel.Domain.Entities;

public class Inventory
{
    public Guid InventoryId { get; set; }

    public Guid ProductId { get; set; }

    public int QuantityOnHand { get; set; }

    public DateTime LastUpdated { get; set; } = DateTime.UtcNow;

    public Product Product { get; set; } = null!;
}