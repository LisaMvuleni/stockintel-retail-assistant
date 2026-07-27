using StockIntel.Domain.Entities;

namespace StockIntel.Application.Common.Interfaces;

public interface ISaleRepository
{
    Task<IEnumerable<Sale>> GetAllAsync();

    Task<Sale?> GetByIdAsync(Guid id);

    Task AddAsync(Sale sale);

    Task UpdateAsync(Guid id, Sale sale);

    Task DeleteAsync(Guid id);
}