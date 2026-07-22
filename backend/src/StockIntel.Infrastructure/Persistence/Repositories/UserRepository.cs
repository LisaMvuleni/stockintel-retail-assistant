using Microsoft.EntityFrameworkCore;
using StockIntel.Application.Common.Interfaces;
using StockIntel.Domain.Entities;

namespace StockIntel.Infrastructure.Persistence.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _context;

    public UserRepository(ApplicationDbContext context)
    {
        _context = context;
    }
  
    public async Task<IEnumerable<User>> GetAllAsync()
    {
        return await _context.Users.ToListAsync();
    }

    public async Task<User?> GetByIdAsync(Guid id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task<User?> GetByEmailAsync(string email)
    {
        return await _context.Users
            .FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task AddAsync(User user)
    {
        await _context.Users.AddAsync(user);
    }

    public async Task UpdateAsync(Guid id)
    {
        {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            return;
        }

        _context.Users.Update(user);
    }
    }

   public async Task DeleteAsync(Guid id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            return;
        }

        _context.Users.Remove(user);
    }
}