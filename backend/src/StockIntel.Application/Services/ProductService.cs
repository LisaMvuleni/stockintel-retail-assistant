using StockIntel.Application.Interfaces.Services;
using StockIntel.Application.Interfaces;
using StockIntel.Domain.Entities;
using StockIntel.Application.Common.Interfaces;
using StockIntel.Application.DTOs.Product;
using StockIntel.Application.Exceptions;

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


    public async Task<IEnumerable<ProductDto>> GetProductsAsync()
{
    var products = await _productRepository.GetAllAsync();

    return products.Select(product => new ProductDto
    {
        Id = product.Id,
        Name = product.Name,
        SKU = product.SKU,
        Barcode = product.Barcode,
        Description = product.Description,
        CostPrice = product.CostPrice,
        SellingPrice = product.SellingPrice,
        QuantityInStock = product.QuantityInStock,
        ReorderLevel = product.ReorderLevel,
        ImageUrl = product.ImageUrl,
        IsActive = product.IsActive,
        CreatedAt = product.CreatedAt,
        UpdatedAt = product.UpdatedAt,
        CategoryId = product.CategoryId,
        SupplierId = product.SupplierId
    });
}


    public async Task<ProductDto?> GetProductByIdAsync(Guid id)
{
    var product = await _productRepository.GetByIdAsync(id);

    if (product == null)
        return null;

    return new ProductDto
    {
        Id = product.Id,
        Name = product.Name,
        SKU = product.SKU,
        Barcode = product.Barcode,
        Description = product.Description,
        CostPrice = product.CostPrice,
        SellingPrice = product.SellingPrice,
        QuantityInStock = product.QuantityInStock,
        ReorderLevel = product.ReorderLevel,
        ImageUrl = product.ImageUrl,
        IsActive = product.IsActive,
        CreatedAt = product.CreatedAt,
        UpdatedAt = product.UpdatedAt,
        CategoryId = product.CategoryId,
        SupplierId = product.SupplierId
    };
}


    public async Task AddAsync(Product product)
{
    await _productRepository.AddAsync(product);
    await _unitOfWork.SaveChangesAsync();
}


   public async Task UpdateAsync(Guid id, Product product)
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