namespace StockIntel.Domain.Entities;

public class AIMessage
{
    public Guid Id { get; set; }

    public Guid ConversationId { get; set; }

    public string Sender { get; set; } = string.Empty;

    public string Message { get; set; } = string.Empty;

    public DateTime SentAt { get; set; } = DateTime.UtcNow;

    public AIConversation Conversation { get; set; } = null!;
}