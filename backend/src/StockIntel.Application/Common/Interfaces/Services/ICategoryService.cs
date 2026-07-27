using StockIntel.Application.DTOs.Category;
using StockIntel.Domain.Entities;

namespace StockIntel.Application.Interfaces.Services;

public interface ICategoryService
{
    Task<IEnumerable<CategoryDto>> GetAllAsync();

    Task<CategoryDto?> GetByIdAsync(Guid id);

    Task AddAsync(Category category);

    Task UpdateAsync(Guid id, Category category);

    Task DeleteAsync(Guid id);
}