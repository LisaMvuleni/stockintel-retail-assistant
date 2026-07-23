using StockIntel.Application.Common.Interfaces;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;

namespace StockIntel.Application.Services;

public class NotificationService : INotificationService
{
    private readonly INotificationRepository _notificationRepository;
    private readonly IUnitOfWork _unitOfWork;

    public NotificationService(INotificationRepository notificationRepository, IUnitOfWork unitOfWork)
    {
        _notificationRepository = notificationRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<Notification>> GetAllAsync()
    {
        return await _notificationRepository.GetAllAsync();
    }

    public async Task<Notification?> GetByIdAsync(Guid id)
    {
        return await _notificationRepository.GetByIdAsync(id);
    }

    public async Task AddAsync(Notification notification)
    {
        await _notificationRepository.AddAsync(notification);
        await _unitOfWork.SaveChangesAsync();
    }

    public async Task UpdateAsync(Notification notification)
    {
        await _notificationRepository.UpdateAsync(notification);
        await _unitOfWork.SaveChangesAsync();
    }
}