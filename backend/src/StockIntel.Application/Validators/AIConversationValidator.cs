using FluentValidation;
using StockIntel.Application.DTOs.AIConversation;

namespace StockIntel.Application.Validators;

public class CreateAIConversationDtoValidator : AbstractValidator<CreateAIConversationDto>
{
    public CreateAIConversationDtoValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty();
    }
}

public class UpdateAIConversationDtoValidator : AbstractValidator<UpdateAIConversationDto>
{
    public UpdateAIConversationDtoValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty();
    }
}