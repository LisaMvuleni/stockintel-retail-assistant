using StockIntel.Domain.Entities;

namespace StockIntel.Application.Common.Interfaces;

public interface ICategoryRepository
{
    Task<IEnumerable<Category>> GetAllAsync();
    Task<Category?> GetByIdAsync(Guid id);
    Task AddAsync(Category category);
    Task UpdateAsync(Category category);
    Task DeleteAsync(Guid id);
    Task<bool> CategoryExistsAsync(Guid categoryId);
    Task<bool> CategoryNameExistsAsync(string name);
}