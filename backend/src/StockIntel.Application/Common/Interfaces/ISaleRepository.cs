using StockIntel.Domain.Entities;

namespace StockIntel.Application.Common.Interfaces;

public interface ISaleRepository
{
    Task<IEnumerable<Sale>> GetAllAsync();
    Task<Sale?> GetByIdAsync(Guid id);
    Task AddAsync(Sale sale);
}