using Microsoft.EntityFrameworkCore;
using StockIntel.Application.Common.Interfaces;
using StockIntel.Domain.Entities;

namespace StockIntel.Infrastructure.Persistence.Repositories;

public class NotificationRepository : INotificationRepository
{
    private readonly ApplicationDbContext _context;

    public NotificationRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Notification>> GetAllAsync()
    {
        return await _context.Notifications.ToListAsync();
    }

    public async Task<Notification?> GetByIdAsync(Guid id)
    {
        return await _context.Notifications.FindAsync(id);
    }

    public async Task AddAsync(Notification notification)
    {
        await _context.Notifications.AddAsync(notification);
    }

    public async Task UpdateAsync(Guid id, Notification notification)
    {
        var existingNotification = await _context.Notifications.FindAsync(id);

        if (existingNotification == null)
            return;

        existingNotification.Title = notification.Title;
        existingNotification.Message = notification.Message;
        existingNotification.IsRead = notification.IsRead;

        _context.Notifications.Update(existingNotification);
    }

    public async Task DeleteAsync(Guid id)
    {
        var notification = await _context.Notifications.FindAsync(id);

        if (notification != null)
        {
            _context.Notifications.Remove(notification);
        }
    }
}