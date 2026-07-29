using FluentValidation;
using StockIntel.Application.DTOs.Notification;

namespace StockIntel.Application.Validators;

public class CreateNotificationDtoValidator : AbstractValidator<CreateNotificationDto>
{
    public CreateNotificationDtoValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty()
            .MaximumLength(150);

        RuleFor(x => x.Message)
            .NotEmpty()
            .MaximumLength(1000);
    }
}

public class UpdateNotificationDtoValidator : AbstractValidator<UpdateNotificationDto>
{
    public UpdateNotificationDtoValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty()
            .MaximumLength(150);

        RuleFor(x => x.Message)
            .NotEmpty()
            .MaximumLength(1000);
    }
      
}