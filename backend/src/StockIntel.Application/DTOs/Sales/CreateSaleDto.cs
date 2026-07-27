namespace StockIntel.Application.DTOs.Sales;
public class CreateSaleDto
{
    public string PaymentMethod { get; set; } = string.Empty;
    public string CashierName { get; set; } = string.Empty;

    public List<CreateSaleItemDto> SaleItems { get; set; } = [];
}