using StockIntel.Application.Common.Interfaces;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;
using StockIntel.Application.DTOs.Sales;
namespace StockIntel.Application.Services;

public class SaleService : ISaleService
{
    private readonly ISaleRepository _saleRepository;
    private readonly IUnitOfWork _unitOfWork;

    public SaleService(ISaleRepository saleRepository, IUnitOfWork unitOfWork)
    {
        _saleRepository = saleRepository;
        _unitOfWork = unitOfWork;
    }

  public async Task<IEnumerable<SaleDto>> GetAllAsync()
{
    var sales = await _saleRepository.GetAllAsync();

    return sales.Select(sale => new SaleDto
    {
        Id = sale.Id,
        TotalAmount = sale.TotalAmount,
        SaleDate = sale.SaleDate,
        PaymentMethod = sale.PaymentMethod,
        CashierName = sale.CashierName,
        SaleItems = sale.SaleItems.Select(item => new SaleItemDto
        {
            ProductId = item.ProductId,
            Quantity = item.Quantity,
            UnitPrice = item.UnitPrice,
            TotalPrice = item.TotalPrice
        }).ToList()
    });
}

   public async Task<SaleDto?> GetByIdAsync(Guid id)
{
    var sale = await _saleRepository.GetByIdAsync(id);

    if (sale == null)
        return null;

    return new SaleDto
    {
        Id = sale.Id,
        TotalAmount = sale.TotalAmount,
        SaleDate = sale.SaleDate,
        PaymentMethod = sale.PaymentMethod,
        CashierName = sale.CashierName,
        SaleItems = sale.SaleItems.Select(item => new SaleItemDto
        {
            ProductId = item.ProductId,
            Quantity = item.Quantity,
            UnitPrice = item.UnitPrice,
            TotalPrice = item.TotalPrice
        }).ToList()
    };
}

    public async Task AddAsync(Sale sale)
    {
        await _saleRepository.AddAsync(sale);
        await _unitOfWork.SaveChangesAsync();
    }

    public async Task UpdateAsync(Guid id, Sale sale)
{
    await _saleRepository.UpdateAsync(id, sale);
    await _unitOfWork.SaveChangesAsync();
}

public async Task DeleteAsync(Guid id)
{
    await _saleRepository.DeleteAsync(id);
    await _unitOfWork.SaveChangesAsync();
}
}