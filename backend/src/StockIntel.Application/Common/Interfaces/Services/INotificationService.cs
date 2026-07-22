using StockIntel.Domain.Entities;

namespace StockIntel.Application.Interfaces.Services;

public interface INotificationService
{
    Task<IEnumerable<Notification>> GetAllAsync();
    Task<Notification?> GetByIdAsync(Guid id);
    Task AddAsync(Notification notification);
    Task UpdateAsync(Notification notification);
}