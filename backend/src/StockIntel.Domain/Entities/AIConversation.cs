   namespace StockIntel.Domain.Entities;

public class AIConversation
{
    public Guid Id { get; set; }

    public Guid UserId { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<AIMessage> Messages { get; set; } = new List<AIMessage>();
}