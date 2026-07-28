using Microsoft.AspNetCore.Mvc;
using StockIntel.Application.DTOs.Notification;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;

namespace StockIntel.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NotificationController : ControllerBase
{
    private readonly INotificationService _notificationService;

    public NotificationController(INotificationService notificationService)
    {
        _notificationService = notificationService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<NotificationDto>>> GetAllAsync()
    {
        var notifications = await _notificationService.GetAllAsync();
        return Ok(notifications);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<NotificationDto>> GetByIdAsync(Guid id)
    {
        var notification = await _notificationService.GetByIdAsync(id);

        if (notification == null)
            return NotFound();

        return Ok(notification);
    }

    [HttpPost]
    public async Task<ActionResult<NotificationDto>> AddAsync(CreateNotificationDto dto)
    {
        var notification = new Notification
        {
            Title = dto.Title,
            Message = dto.Message,
            IsRead = dto.IsRead
        };

        await _notificationService.AddAsync(notification);

        var notificationDto = new NotificationDto
        {
            Id = notification.Id,
            Title = notification.Title,
            Message = notification.Message,
            IsRead = notification.IsRead,
            CreatedAt = notification.CreatedAt
        };

        return CreatedAtAction(
            nameof(GetByIdAsync),
            new { id = notificationDto.Id },
            notificationDto);
    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult> UpdateAsync(Guid id, UpdateNotificationDto dto)
    {
        var notification = new Notification
        {
            Id = id,
            Title = dto.Title,
            Message = dto.Message,
            IsRead = dto.IsRead
        };

        await _notificationService.UpdateAsync(id, notification);

        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult> DeleteAsync(Guid id)
    {
        await _notificationService.DeleteAsync(id);

        return NoContent();
    }
}