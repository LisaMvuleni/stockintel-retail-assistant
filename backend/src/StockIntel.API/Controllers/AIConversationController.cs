using Microsoft.AspNetCore.Mvc;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;

namespace StockIntel.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AIConversationController : ControllerBase
{
    private readonly IAIConversationService _aiConversationService;

    public AIConversationController(IAIConversationService aiConversationService)
    {
        _aiConversationService = aiConversationService;
    }

    // GET: api/AIConversation
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AIConversation>>> GetAllAsync()
    {
        var conversations = await _aiConversationService.GetAllAsync();
        return Ok(conversations);
    }

    // GET: api/AIConversation/{id}
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<AIConversation>> GetByIdAsync(Guid id)
    {
        var conversation = await _aiConversationService.GetByIdAsync(id);

        if (conversation == null)
        {
            return NotFound();
        }

        return Ok(conversation);
    }

    // POST: api/AIConversation
    [HttpPost]
    public async Task<ActionResult> AddAsync(AIConversation aiConversation)
    {
        await _aiConversationService.AddAsync(aiConversation);

        return CreatedAtAction(
            nameof(GetByIdAsync),
            new { id = aiConversation.Id },
            aiConversation);
    }
}