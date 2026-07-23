using Microsoft.AspNetCore.Mvc;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;

namespace StockIntel.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SaleController : ControllerBase
{
    private readonly ISaleService _saleService;

    public SaleController(ISaleService saleService)
    {
        _saleService = saleService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Sale>>> GetAllAsync()
    {
        var sales = await _saleService.GetAllAsync();
        return Ok(sales);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<Sale>> GetByIdAsync(Guid id)
    {
        var sale = await _saleService.GetByIdAsync(id);

        if (sale == null)
        {
            return NotFound();
        }

        return Ok(sale);
    }

    [HttpPost]
    public async Task<ActionResult> AddAsync(Sale sale)
    {
        await _saleService.AddAsync(sale);

        return CreatedAtAction(
            nameof(GetByIdAsync),
            new { id = sale.Id },
            sale);
    }
}