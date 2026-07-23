using Microsoft.AspNetCore.Mvc;
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
    public async Task<ActionResult<IEnumerable<Notification>>> GetAllAsync()
    {
        var notifications = await _notificationService.GetAllAsync();
        return Ok(notifications);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<Notification>> GetByIdAsync(Guid id)
    {
        var notification = await _notificationService.GetByIdAsync(id);

        if (notification == null)
        {
            return NotFound();
        }

        return Ok(notification);
    }

    [HttpPost]
    public async Task<ActionResult> AddAsync(Notification notification)
    {
        await _notificationService.AddAsync(notification);

        return CreatedAtAction(
            nameof(GetByIdAsync),
            new { id = notification.Id },
            notification);
    }

    [HttpPut]
    public async Task<ActionResult> UpdateAsync(Notification notification)
    {
        await _notificationService.UpdateAsync(notification);
        return NoContent();
    }
}