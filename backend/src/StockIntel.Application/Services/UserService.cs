 using StockIntel.Application.Interfaces.Services;
 using StockIntel.Domain.Entities;
 using StockIntel.Application.Common.Interfaces;
 using StockIntel.Application.DTOs.User;
 using StockIntel.Application.Exceptions;

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

    
    public async Task<UserDto?> GetByIdAsync(Guid id)
{
    var user = await _userRepository.GetByIdAsync(id);

   if (user == null)
    {
        throw new NotFoundException("User not found.");
    }

    return new UserDto
    {
        UserId = user.UserId,
        FirstName = user.FirstName,
        LastName = user.LastName,
        Email = user.Email,
        Role = user.Role,
        IsActive = user.IsActive,
        CreatedAt = user.CreatedAt
    };
}


    public async Task<UserDto?> GetByEmailAsync(string email)
{
    var user = await _userRepository.GetByEmailAsync(email);

    if (user == null)
    {
        throw new NotFoundException("User not found.");
    }

    return new UserDto
    {
        UserId = user.UserId,
        FirstName = user.FirstName,
        LastName = user.LastName,
        Email = user.Email,
        Role = user.Role,
        IsActive = user.IsActive,
        CreatedAt = user.CreatedAt
    };
}
    public async Task<IEnumerable<UserDto>> GetAllAsync()
{
    var users = await _userRepository.GetAllAsync();

    return users.Select(user => new UserDto
    {
        UserId = user.UserId,
        FirstName = user.FirstName,
        LastName = user.LastName,
        Email = user.Email,
        Role = user.Role,
        IsActive = user.IsActive,
        CreatedAt = user.CreatedAt
    });
}

    public async Task AddAsync (User user)
    {
        var existingUser = await _userRepository.GetByEmailAsync(user.Email);

        if (existingUser != null)
        {
            throw new BadRequestException("A user with this email already exists.");
        }
        if (string.IsNullOrWhiteSpace(user.FirstName))
            throw new BadRequestException("First name is required.");

        if (string.IsNullOrWhiteSpace(user.LastName))
            throw new BadRequestException("Last name is required.");
        await _userRepository.AddAsync(user);
        await _unitOfWork.SaveChangesAsync();
    }

    public async Task UpdateAsync(Guid id, User user) 
    {
        var existingUser = await _userRepository.GetByIdAsync(id);

        if (existingUser == null)
        {
            throw new NotFoundException("User not found.");
        }
        await _userRepository.UpdateAsync(id, user);
        await _unitOfWork.SaveChangesAsync();
    }
    public async Task DeleteAsync(Guid id)
    {
        var existingUser = await _userRepository.GetByIdAsync(id);

        if (existingUser == null)
        {
            throw new NotFoundException("User not found.");
        }
        await _userRepository.DeleteAsync(id);
        await _unitOfWork.SaveChangesAsync();
    }

}