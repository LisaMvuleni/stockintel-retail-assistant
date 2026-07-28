using StockIntel.Application.Common.Interfaces;
using StockIntel.Application.DTOs.AIConversation;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;

namespace StockIntel.Application.Services;

public class AIConversationService : IAIConversationService
{
    private readonly IAIConversationRepository _aiConversationRepository;
    private readonly IUnitOfWork _unitOfWork;

    public AIConversationService(
        IAIConversationRepository aiConversationRepository,
        IUnitOfWork unitOfWork)
    {
        _aiConversationRepository = aiConversationRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<AIConversationDto>> GetAllAsync()
    {
        var conversations = await _aiConversationRepository.GetAllAsync();

        return conversations.Select(conversation => new AIConversationDto
        {
            Id = conversation.Id,
            UserId = conversation.UserId,
            CreatedAt = conversation.CreatedAt
        });
    }

    public async Task<AIConversationDto?> GetByIdAsync(Guid id)
    {
        var conversation = await _aiConversationRepository.GetByIdAsync(id);

        if (conversation == null)
            return null;

        return new AIConversationDto
        {
            Id = conversation.Id,
            UserId = conversation.UserId,
            CreatedAt = conversation.CreatedAt
        };
    }

    public async Task AddAsync(AIConversation aiConversation)
    {
        await _aiConversationRepository.AddAsync(aiConversation);
        await _unitOfWork.SaveChangesAsync();
    }

    public async Task UpdateAsync(Guid id, AIConversation aiConversation)
    {
        await _aiConversationRepository.UpdateAsync(id, aiConversation);
        await _unitOfWork.SaveChangesAsync();
    }

    public async Task DeleteAsync(Guid id)
    {
        await _aiConversationRepository.DeleteAsync(id);
        await _unitOfWork.SaveChangesAsync();
    }
}