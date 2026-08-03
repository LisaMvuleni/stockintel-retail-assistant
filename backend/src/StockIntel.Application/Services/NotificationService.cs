using StockIntel.Application.Common.Interfaces;
using StockIntel.Application.DTOs.Notification;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;
using StockIntel.Application.Exceptions;

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

  public async Task<NotificationDto> GetByIdAsync(Guid id)
    {
        var notification = await _notificationRepository.GetByIdAsync(id);

        if (notification == null)
            throw new NotFoundException("Notification not found.");

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
        if (string.IsNullOrWhiteSpace(notification.Title))
            throw new BadRequestException("Notification title is required.");

        if (string.IsNullOrWhiteSpace(notification.Message))
            throw new BadRequestException("Notification message is required.");

        await _notificationRepository.AddAsync(notification);
        await _unitOfWork.SaveChangesAsync();
    }

   public async Task UpdateAsync(Guid id, Notification notification)
    {
        var existingNotification = await _notificationRepository.GetByIdAsync(id);

        if (existingNotification == null)
            throw new NotFoundException("Notification not found.");

        if (string.IsNullOrWhiteSpace(notification.Title))
            throw new BadRequestException("Notification title is required.");

        if (string.IsNullOrWhiteSpace(notification.Message))
            throw new BadRequestException("Notification message is required.");

        await _notificationRepository.UpdateAsync(id, notification);
        await _unitOfWork.SaveChangesAsync();
    }
   public async Task DeleteAsync(Guid id)
    {
        var existingNotification = await _notificationRepository.GetByIdAsync(id);

        if (existingNotification == null)
            throw new NotFoundException("Notification not found.");

        await _notificationRepository.DeleteAsync(id);
        await _unitOfWork.SaveChangesAsync();
    }
}