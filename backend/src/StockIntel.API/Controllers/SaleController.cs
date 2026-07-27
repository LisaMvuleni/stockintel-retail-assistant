using Microsoft.AspNetCore.Mvc;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;
using StockIntel.Application.DTOs.Sales;

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
    public async Task<ActionResult<IEnumerable<SaleDto>>> GetAllAsync()
    {
        var sales = await _saleService.GetAllAsync();
        return Ok(sales);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<SaleDto>> GetByIdAsync(Guid id)
    {
        var sale = await _saleService.GetByIdAsync(id);

        if (sale == null)
        {
            return NotFound();
        }

        return Ok(sale);
    }

    [HttpPost]
    public async Task<ActionResult<SaleDto>> AddAsync(CreateSaleDto dto)
    {
        var sale = new Sale
        {
            PaymentMethod = dto.PaymentMethod,
            CashierName = dto.CashierName,
            SaleItems = dto.SaleItems.Select(item => new SaleItem
            {
                ProductId = item.ProductId,
                Quantity = item.Quantity
            }).ToList()
        };

        await _saleService.AddAsync(sale);

        var saleDto = new SaleDto
        {
            Id = sale.Id,
            TotalAmount = sale.TotalAmount,
            SaleDate = sale.SaleDate,
            PaymentMethod = sale.PaymentMethod,
            CashierName = sale.CashierName,
            SaleItems = sale.SaleItems.Select(item => new SaleItemDto
            {
                ProductId = item.ProductId,
                Quantity = item.Quantity, 
                UnitPrice = item.UnitPrice,
                TotalPrice = item.TotalPrice
            }).ToList()
        };

        return CreatedAtAction(
            nameof(GetByIdAsync),
            new { id = saleDto.Id },
            saleDto);
}
}