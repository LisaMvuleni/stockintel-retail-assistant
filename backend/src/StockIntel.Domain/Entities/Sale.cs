namespace StockIntel.Domain.Entities;

public class Sale
{
    public Guid Id { get; set; }

    public decimal TotalAmount { get; set; }

    public DateTime SaleDate { get; set; } = DateTime.UtcNow;

    public string PaymentMethod { get; set; } = string.Empty;

    public string CashierName { get; set; } = string.Empty;

    public ICollection<SaleItem> SaleItems { get; set; } = new List<SaleItem>();
}