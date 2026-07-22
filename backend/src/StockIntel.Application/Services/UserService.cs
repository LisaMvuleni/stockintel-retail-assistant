 using StockIntel.Application.Interfaces.Services;
 using StockIntel.Domain.Entities;
 using StockIntel.Application.Common.Interfaces;

 namespace StockIntel.Application.Services;

 public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IUnitOfWork _unitOfWork;


    public UserService(IUserRepository userRepository, IUnitOfWork unitOfWork)
    {
        _userRepository = userRepository;
        _unitOfWork = unitOfWork;
    }

    
    public async Task<User?> GetByIdAsync (Guid id)
    {
        return await _userRepository.GetByIdAsync(id);

    }


    public async Task<User?>GetByEmailAsync(string email)
    {
        return await _userRepository.GetByEmailAsync(email);
    }

    public async Task <IEnumerable<User>> GetAllAsync()
    {
        return await _userRepository.GetAllAsync();
    }

    public async Task AddAsync (User user)
    {
        await _userRepository.AddAsync(user);
        await _unitOfWork.SaveChangesAsync();
    }

    public async Task UpdateAsync(Guid id) 
    {
        await _userRepository.UpdateAsync(id);
        await _unitOfWork.SaveChangesAsync();
    }
    public async Task DeleteAsync(Guid id)
    {
        await _userRepository.DeleteAsync(id);
        await _unitOfWork.SaveChangesAsync();
    }

}