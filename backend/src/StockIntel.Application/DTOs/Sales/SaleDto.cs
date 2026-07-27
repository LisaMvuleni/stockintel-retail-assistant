namespace StockIntel.Application.DTOs.Sales;

public class SaleDto
{
    public Guid Id { get; set; }

    public decimal TotalAmount { get; set; }

    public DateTime SaleDate { get; set; }

    public string PaymentMethod { get; set; } = string.Empty;

    public string CashierName { get; set; } = string.Empty;

    public List<SaleItemDto> SaleItems { get; set; } = [];
}