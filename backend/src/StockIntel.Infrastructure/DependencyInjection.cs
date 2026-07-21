using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using StockIntel.Infrastructure.Persistence;
using StockIntel.Application.Common.Interfaces;
using StockIntel.Infrastructure.Persistence.Repositories;

namespace StockIntel.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseNpgsql(
                configuration.GetConnectionString("DefaultConnection")));
        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<ICategoryRepository, CategoryRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<ISaleRepository, SaleRepository>();
        services.AddScoped<INotificationRepository, NotificationRepository>();
        services.AddScoped<IAIConversationRepository, AIConversationRepository>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        return services;
    }
}