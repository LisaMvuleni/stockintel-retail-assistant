using Microsoft.AspNetCore.Mvc;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;

namespace StockIntel.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<User>> GetByIdAsync(Guid id)
    {
        var user = await _userService.GetByIdAsync(id);
        if (user == null)
        {
            return NotFound();
        }
        return Ok(user);
    }

    [HttpGet("email/{email}")]
    public async Task <ActionResult<User>> GetByEmailAsync(string email)
    {
        var user = await _userService.GetByEmailAsync(email);
        if (user == null)
        {
            return NotFound();
        }

        return Ok (user);
    }


  [HttpGet]
  public async Task<ActionResult<IEnumerable<User>>> GetAllAsync()
    {
        var users = await _userService.GetAllAsync();
        return Ok(users);
    }
    
  
  [HttpPost]
  public async Task<ActionResult>AddAsync(User user)
    {
        await _userService.AddAsync(user);
        return CreatedAtAction(
            nameof(GetByIdAsync),
            new {id = user.UserId},
            user);
    }

  [HttpPut("{id:guid}")]
  public async Task<ActionResult>UpdateAsync(Guid id)
    {
        await _userService.UpdateAsync(id);
        return NoContent();
    }

 [HttpDelete("{id:guid}")]
 public async Task <ActionResult> DeleteAsync(Guid id)
    {
        await _userService.DeleteAsync(id);
        return NoContent();
    }
}