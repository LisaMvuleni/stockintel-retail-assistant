using Microsoft.EntityFrameworkCore;
using StockIntel.Application.Common.Interfaces;
using StockIntel.Domain.Entities;

namespace StockIntel.Infrastructure.Persistence.Repositories;

public class ProductRepository : IProductRepository
{
    private readonly ApplicationDbContext _context;

    public ProductRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Product>> GetAllAsync()
    {
        return await _context.Products.ToListAsync();
    }

    public async Task<Product?> GetByIdAsync(Guid id)
    {
        return await _context.Products.FindAsync(id);
    }

    public async Task AddAsync(Product product)
    {
        await _context.Products.AddAsync(product);
    }

    public Task UpdateAsync(Product product)
    {
        _context.Products.Update(product);
        return Task.CompletedTask;
    }

    public async Task DeleteAsync(Guid id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            return;
        }

        _context.Products.Remove(product);
    }

}