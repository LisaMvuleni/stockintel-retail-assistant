using Microsoft.EntityFrameworkCore;
using StockIntel.Application.Common.Interfaces;
using StockIntel.Domain.Entities;

namespace StockIntel.Infrastructure.Persistence.Repositories;

public class SaleRepository : ISaleRepository
{
    private readonly ApplicationDbContext _context;

    public SaleRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Sale>> GetAllAsync()
    {
        return await _context.Sales
            .Include(s => s.SaleItems)
            .ToListAsync();
    }

    public async Task<Sale?> GetByIdAsync(Guid id)
    {
        return await _context.Sales
            .Include(s => s.SaleItems)
            .FirstOrDefaultAsync(s => s.Id == id);
    }

    public async Task AddAsync(Sale sale)
    {
        await _context.Sales.AddAsync(sale);
    }

        public async Task UpdateAsync(Guid id, Sale sale)
    {
        var existingSale = await _context.Sales.FindAsync(id);

        if (existingSale == null)
            return;

        existingSale.PaymentMethod = sale.PaymentMethod;
        existingSale.CashierName = sale.CashierName;
        existingSale.TotalAmount = sale.TotalAmount;
        existingSale.SaleDate = sale.SaleDate;

        _context.Sales.Update(existingSale);
    }

    public async Task DeleteAsync(Guid id)
    {
        var sale = await _context.Sales.FindAsync(id);

        if (sale != null)
        {
            _context.Sales.Remove(sale);
        }
    }
}
