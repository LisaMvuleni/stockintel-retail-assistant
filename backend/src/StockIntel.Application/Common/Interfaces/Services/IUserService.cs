using StockIntel.Domain.Entities;
namespace StockIntel.Application.Interfaces.Services;

public interface IUserService
{
     Task<User?> GetByIdAsync(Guid id);
    Task<User?> GetByEmailAsync(string email);
    Task<IEnumerable<User>> GetAllAsync();
    Task AddAsync(User user);
    Task UpdateAsync(Guid id, User user);
    Task DeleteAsync(Guid id);
}