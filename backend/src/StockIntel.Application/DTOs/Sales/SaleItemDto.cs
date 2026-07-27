namespace StockIntel.Application.DTOs.Sales;

public class SaleItemDto
{
    public Guid ProductId { get; set; }

    public int Quantity { get; set; }

    public decimal UnitPrice { get; set; }

    public decimal TotalPrice { get; set; }
}