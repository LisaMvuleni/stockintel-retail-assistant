namespace StockIntel.Application.DTOs.Sales;

public class CreateSaleItemDto
{
    public Guid ProductId { get; set; }

    public int Quantity { get; set; }
}