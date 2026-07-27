using Microsoft.AspNetCore.Mvc;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;
using StockIntel.Application.DTOs.User;
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
    public async Task<ActionResult<UserDto>>GetByIdAsync(Guid id)
    {
        var user = await _userService.GetByIdAsync(id);
        if (user == null)
        {
            return NotFound();
        }
        return Ok(user);
    }

    [HttpGet("email/{email}")]
    public async Task<ActionResult<UserDto>> GetByEmailAsync(string email)
    {
        var user = await _userService.GetByEmailAsync(email);
        if (user == null)
        {
            return NotFound();
        }

        return Ok(user);
    }


    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserDto>>> GetAllAsync()
    {
        var users = await _userService.GetAllAsync();
        return Ok(users);
    }


    [HttpPost]
    public async Task<ActionResult<UserDto>> AddAsync(CreateUserDto dto)
    {
        var user = new User
        {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
            PasswordHash = dto.Password,
            Role = dto.Role,
            IsActive = dto.IsActive
        };

        await _userService.AddAsync(user);

        var userDto = new UserDto
        {
            UserId = user.UserId,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email,
            Role = user.Role,
            IsActive = user.IsActive,
            CreatedAt = user.CreatedAt
        };

        return Ok(userDto);
    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult> UpdateAsync(Guid id, UpdateUserDto dto)     
    {
        var user = new User
        {
            UserId = id,
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
            PasswordHash = dto.Password,
            Role = dto.Role,
            IsActive = dto.IsActive
        };

        await _userService.UpdateAsync(id, user);

        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult> DeleteAsync(Guid id)
    {
        await _userService.DeleteAsync(id);
        return NoContent();
    }
}