using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;
using StockIntel.Application.Common.Interfaces;


namespace StockIntel.Application.Services;

public class AIConversationService : IAIConversationService
{
    private readonly IAIConversationRepository _aiConversationRepository;
    private readonly IUnitOfWork _unitOfWork;


  public AIConversationService (IAIConversationRepository aiConversationRepository, IUnitOfWork unitOfWork)
  {
    _aiConversationRepository = aiConversationRepository;
    _unitOfWork = unitOfWork;
  }
 
  public async Task <IEnumerable<AIConversation>> GetAllAsync()
    {
        return await _aiConversationRepository.GetAllAsync();
    }

    public async Task<AIConversation?> GetByIdAsync(Guid id)
    {
        return await _aiConversationRepository.GetByIdAsync(id);
    }

    public async Task AddAsync(AIConversation aiConversation)
    {
        await _aiConversationRepository.AddAsync(aiConversation);
        await _unitOfWork.SaveChangesAsync();
    }

}