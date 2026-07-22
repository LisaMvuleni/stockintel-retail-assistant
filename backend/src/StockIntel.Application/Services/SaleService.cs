using StockIntel.Application.Common.Interfaces;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;

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

    public async Task<IEnumerable<Sale>> GetAllAsync()
    {
        return await _saleRepository.GetAllAsync();
    }

    public async Task<Sale?> GetByIdAsync(Guid id)
    {
        return await _saleRepository.GetByIdAsync(id);
    }

    public async Task AddAsync(Sale sale)
    {
        await _saleRepository.AddAsync(sale);
        await _unitOfWork.SaveChangesAsync();
    }
}