using Microsoft.AspNetCore.Mvc;

namespace StockIntel.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok("StockIntel API is running successfully!");
    }
}