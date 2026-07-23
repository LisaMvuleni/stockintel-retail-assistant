using StockIntel.Application.Interfaces.Services;
using StockIntel.Application.Interfaces;
using StockIntel.Domain.Entities;
using StockIntel.Application.Common.Interfaces;

namespace StockIntel.Application.Services;

public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;
    private readonly IUnitOfWork _unitOfWork;

    public ProductService(IProductRepository productRepository, IUnitOfWork unitOfWork)
    {
        _productRepository = productRepository;
        _unitOfWork = unitOfWork;
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
        await _unitOfWork.SaveChangesAsync();
        return product;
    }


    public async Task UpdateProductAsync(Product product)
    {
        await _productRepository.UpdateAsync(product);
        await _unitOfWork.SaveChangesAsync();
    }


    public async Task DeleteAsync(Guid id)
    {
        await _productRepository.DeleteAsync(id);
        await _unitOfWork.SaveChangesAsync();
    }
}