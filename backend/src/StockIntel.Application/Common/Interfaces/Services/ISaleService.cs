using StockIntel.Application.DTOs.Sales;
using StockIntel.Domain.Entities;

namespace StockIntel.Application.Interfaces.Services;

public interface ISaleService
{
    Task<SaleDto?> GetByIdAsync(Guid id);

    Task<IEnumerable<SaleDto>> GetAllAsync();

    Task AddAsync(Sale sale);

    Task UpdateAsync(Guid id, Sale sale);

    Task DeleteAsync(Guid id);
}

