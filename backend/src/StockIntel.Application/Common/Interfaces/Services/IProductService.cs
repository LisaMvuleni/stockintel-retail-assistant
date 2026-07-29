using StockIntel.Application.DTOs.Product;
using StockIntel.Domain.Entities;

namespace StockIntel.Application.Interfaces.Services;

public interface IProductService
{
    Task<IEnumerable<ProductDto>> GetProductsAsync();

    Task<ProductDto?> GetProductByIdAsync(Guid id);

    Task AddAsync(Product product);

    Task UpdateAsync(Guid id, Product product);


    Task DeleteAsync(Guid id);
}