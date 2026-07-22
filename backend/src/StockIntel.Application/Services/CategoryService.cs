using StockIntel.Application.Interfaces.Services;
using StockIntel.Domain.Entities;
using StockIntel.Application.Common.Interfaces;

namespace StockIntel.Application.Services;

public class CategoryService : ICategoryService
{
    public readonly ICategoryRepository _categoryRepository;
    private readonly IUnitOfWork _unitOfWork;

    public CategoryService(ICategoryRepository categoryRepository, IUnitOfWork unitOfWork)
    {
        _categoryRepository = categoryRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<Category>>GetAllAsync()
    {
        return await _categoryRepository.GetAllAsync();
    }

    public async Task<Category?>GetByIdAsync(Guid id)
    {
        return await _categoryRepository.GetByIdAsync(id);
    }

    public async Task <Category> AddAsync(Category category)
    {
        await _categoryRepository.AddAsync(category);
        await _unitOfWork.SaveChangesAsync();
        return category;
    }

    public async Task UpdateAsync(Category category)
    {
        await _categoryRepository.UpdateAsync (category);
        await _unitOfWork.SaveChangesAsync();
    }

    public async Task DeleteAsync(Guid id)
    {
        await _categoryRepository.DeleteAsync(id);
        await _unitOfWork.SaveChangesAsync();
    }

    Task ICategoryService.AddAsync(Category category)
    {
        return AddAsync(category);
    }
}