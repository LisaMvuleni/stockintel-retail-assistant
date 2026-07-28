using StockIntel.Application.Common.Interfaces;
using StockIntel.Application.DTOs.Notification;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;

namespace StockIntel.Application.Services;

public class NotificationService : INotificationService
{
    private readonly INotificationRepository _notificationRepository;
    private readonly IUnitOfWork _unitOfWork;

    public NotificationService(
        INotificationRepository notificationRepository,
        IUnitOfWork unitOfWork)
    {
        _notificationRepository = notificationRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<NotificationDto>> GetAllAsync()
    {
        var notifications = await _notificationRepository.GetAllAsync();

        return notifications.Select(notification => new NotificationDto
        {
            Id = notification.Id,
            Title = notification.Title,
            Message = notification.Message,
            IsRead = notification.IsRead,
            CreatedAt = notification.CreatedAt
        });
    }

    public async Task<NotificationDto?> GetByIdAsync(Guid id)
    {
        var notification = await _notificationRepository.GetByIdAsync(id);

        if (notification == null)
            return null;

        return new NotificationDto
        {
            Id = notification.Id,
            Title = notification.Title,
            Message = notification.Message,
            IsRead = notification.IsRead,
            CreatedAt = notification.CreatedAt
        };
    }

    public async Task AddAsync(Notification notification)
    {
        await _notificationRepository.AddAsync(notification);
        await _unitOfWork.SaveChangesAsync();
    }

    public async Task UpdateAsync(Guid id, Notification notification)
    {
        await _notificationRepository.UpdateAsync(id, notification);
        await _unitOfWork.SaveChangesAsync();
    }

    public async Task DeleteAsync(Guid id)
    {
        await _notificationRepository.DeleteAsync(id);
        await _unitOfWork.SaveChangesAsync();
    }
}