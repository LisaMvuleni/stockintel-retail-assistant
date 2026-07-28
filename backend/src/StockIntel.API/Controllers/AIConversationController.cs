using Microsoft.AspNetCore.Mvc;
using StockIntel.Application.DTOs.AIConversation;
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

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AIConversationDto>>> GetAllAsync()
    {
        var conversations = await _aiConversationService.GetAllAsync();
        return Ok(conversations);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<AIConversationDto>> GetByIdAsync(Guid id)
    {
        var conversation = await _aiConversationService.GetByIdAsync(id);

        if (conversation == null)
            return NotFound();

        return Ok(conversation);
    }

    [HttpPost]
    public async Task<ActionResult<AIConversationDto>> AddAsync(CreateAIConversationDto dto)
    {
        var conversation = new AIConversation
        {
            UserId = dto.UserId
        };

        await _aiConversationService.AddAsync(conversation);

        var conversationDto = new AIConversationDto
        {
            Id = conversation.Id,
            UserId = conversation.UserId,
            CreatedAt = conversation.CreatedAt
        };

        return CreatedAtAction(
            nameof(GetByIdAsync),
            new { id = conversationDto.Id },
            conversationDto);
    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult> UpdateAsync(Guid id, UpdateAIConversationDto dto)
    {
        var conversation = new AIConversation
        {
            Id = id,
            UserId = dto.UserId
        };

        await _aiConversationService.UpdateAsync(id, conversation);

        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult> DeleteAsync(Guid id)
    {
        await _aiConversationService.DeleteAsync(id);

        return NoContent();
    }
}