using Microsoft.EntityFrameworkCore;
using StockIntel.Application.Common.Interfaces;
using StockIntel.Domain.Entities;

namespace StockIntel.Infrastructure.Persistence.Repositories;

public class AIConversationRepository : IAIConversationRepository
{
    private readonly ApplicationDbContext _context;

    public AIConversationRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<AIConversation>> GetAllAsync()
    {
        return await _context.AIConversations.ToListAsync();
    }

    public async Task<AIConversation?> GetByIdAsync(Guid id)
    {
        return await _context.AIConversations.FindAsync(id);
    }

    public async Task AddAsync(AIConversation conversation)
    {
        await _context.AIConversations.AddAsync(conversation);
    }

    public async Task UpdateAsync(Guid id, AIConversation conversation)
    {
        var existingConversation = await _context.AIConversations.FindAsync(id);

        if (existingConversation == null)
            return;

        existingConversation.UserId = conversation.UserId;

        _context.AIConversations.Update(existingConversation);
    }

    public async Task DeleteAsync(Guid id)
    {
        var conversation = await _context.AIConversations.FindAsync(id);

        if (conversation != null)
        {
            _context.AIConversations.Remove(conversation);
        }
    }
}