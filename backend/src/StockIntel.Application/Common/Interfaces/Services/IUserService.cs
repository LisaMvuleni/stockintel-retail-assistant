using StockIntel.Application.DTOs.User;
using StockIntel.Domain.Entities;

namespace StockIntel.Application.Interfaces.Services;

public interface IUserService
{
    Task<UserDto?> GetByIdAsync(Guid id);

    Task<UserDto?> GetByEmailAsync(string email);

    Task<IEnumerable<UserDto>> GetAllAsync();

    Task AddAsync(User user);

    Task UpdateAsync(Guid id, User user);

    Task DeleteAsync(Guid id);
}