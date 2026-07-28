namespace StockIntel.Application.DTOs.Notification;

public class UpdateNotificationDto
{
    public string Title { get; set; } = string.Empty;

    public string Message { get; set; } = string.Empty;

    public bool IsRead { get; set; }
}