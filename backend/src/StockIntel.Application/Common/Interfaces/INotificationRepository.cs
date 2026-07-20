using StockIntel.Domain.Entities;

namespace StockIntel.Application.Common.Interfaces;

public interface INotificationRepository
{
    Task<IEnumerable<Notification>> GetAllAsync();
    Task<Notification?> GetByIdAsync(Guid id);
    Task AddAsync(Notification notification);
    Task UpdateAsync(Notification notification);
}