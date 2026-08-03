using Microsoft.AspNetCore.Mvc;
using StockIntel.Application.DTOs.Auth;
using StockIntel.Application.Interfaces.Services;

namespace StockIntel.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IUserService _userService;

    public AuthController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("login")]
    public async Task<ActionResult<AuthResponseDto>> Login(LoginDto loginDto)
    {
        var response = await _userService.LoginAsync(loginDto);

        return Ok(response);
    }
}