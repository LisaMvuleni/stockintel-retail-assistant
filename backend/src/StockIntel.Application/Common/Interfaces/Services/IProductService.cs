using StockIntel.Domain.Entities;

namespace StockIntel.Application.Interfaces.Services;

public interface IProductService
{
    Task<IEnumerable<Product>> GetProductsAsync();

    Task<Product?> GetProductByIdAsync(Guid id);

    Task<Product> CreateProductAsync(Product product);

    Task UpdateProductAsync(Product product);

    Task DeleteAsync(Guid id);
}