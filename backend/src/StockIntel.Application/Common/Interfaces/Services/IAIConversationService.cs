using StockIntel.Application.DTOs.AIConversation;
using StockIntel.Domain.Entities;

namespace StockIntel.Application.Interfaces.Services;

public interface IAIConversationService
{
    Task<IEnumerable<AIConversationDto>> GetAllAsync();

    Task<AIConversationDto?> GetByIdAsync(Guid id);

    Task AddAsync(AIConversation aiConversation);

    Task UpdateAsync(Guid id, AIConversation aiConversation);

    Task DeleteAsync(Guid id);
}