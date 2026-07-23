using System.ComponentModel;
using Microsoft.AspNetCore.Mvc;
using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;

namespace StockIntel.API.Controllers;

[ApiController]
[Route("api/[controller]")]

public class CategoryController : ControllerBase
{
    private readonly ICategoryService _categoryService;

    public CategoryController(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Category>>>GetAllAsync()
    {
        var categories = await _categoryService.GetAllAsync();
        return Ok(categories);
    }
    
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<Category>>GetByIdAsync(Guid id)
    {
        var category = await _categoryService.GetByIdAsync(id);
        if (category == null)
        {
            return NotFound();
        }
        return Ok(category);
    }

    [HttpPost]
    public async Task<ActionResult>AddAsync(Category category)
    {
        await _categoryService.AddAsync(category);
        return CreatedAtAction
        (
            nameof(GetByIdAsync),
            new {id = category.Id},
            category);  
    }

   [HttpPut("{id:guid}")]
   public async Task<ActionResult> UpdateAsync(Category category)
    {
        await _categoryService.UpdateAsync(category);
        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult>DeleteAsync(Guid id)
    {
        await _categoryService.DeleteAsync(id);
        return NoContent();
    }
 

}
