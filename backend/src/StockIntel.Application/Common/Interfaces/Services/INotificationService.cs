using StockIntel.Application.DTOs.Notification;
using StockIntel.Domain.Entities;

namespace StockIntel.Application.Interfaces.Services;

public interface INotificationService
{
    Task<IEnumerable<NotificationDto>> GetAllAsync();

    Task<NotificationDto?> GetByIdAsync(Guid id);

    Task AddAsync(Notification notification);

    Task UpdateAsync(Guid id, Notification notification);

    Task DeleteAsync(Guid id);
}