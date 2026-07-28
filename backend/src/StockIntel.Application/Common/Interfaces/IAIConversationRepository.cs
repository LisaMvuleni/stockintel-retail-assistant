using StockIntel.Domain.Entities;

namespace StockIntel.Application.Common.Interfaces;

public interface IAIConversationRepository
{
    Task<IEnumerable<AIConversation>> GetAllAsync();
    Task<AIConversation?> GetByIdAsync(Guid id);
    Task AddAsync(AIConversation conversation);
    Task UpdateAsync(Guid id, AIConversation aiConversation);
    Task DeleteAsync(Guid id);
}