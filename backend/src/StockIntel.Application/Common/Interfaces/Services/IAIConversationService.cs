using StockIntel.Domain.Entities;
namespace StockIntel.Application.Interfaces.Services;

public interface IAIConversationService
{
    Task<IEnumerable<AIConversation>> GetAllAsync();
    Task<AIConversation?> GetByIdAsync(Guid id);
    Task AddAsync(AIConversation conversation);
}