using StockIntel.Application.Interfaces.Services;
using StockIntel.Application.Interfaces;
using StockIntel.Domain.Entities;
namespace StockIntel.Application.Services;
using StockIntel.Application.Common.Interfaces;

public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;

    public ProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }


    public async Task<IEnumerable<Product>> GetProductsAsync()
    {
        return await _productRepository.GetAllAsync();
    }


    public async Task<Product?> GetProductByIdAsync(Guid id)
    {
        return await _productRepository.GetByIdAsync(id);
    }


    public async Task<Product> CreateProductAsync(Product product)
    {
        await _productRepository.AddAsync(product);

        return product;
    }


    public async Task UpdateProductAsync(Product product)
    {
        await _productRepository.UpdateAsync(product);
    }

    
    

    public async Task DeleteAsync(Guid id)
    {
        await _productRepository.DeleteAsync(id);
    }
}