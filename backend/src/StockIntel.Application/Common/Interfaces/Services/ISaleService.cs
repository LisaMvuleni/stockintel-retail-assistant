using StockIntel.Domain.Entities;
namespace StockIntel.Application.Interfaces.Services;


public interface ISaleService
{
    Task<IEnumerable<Sale>> GetAllAsync();
    Task<Sale?> GetByIdAsync(Guid id);
    Task AddAsync(Sale sale);
}