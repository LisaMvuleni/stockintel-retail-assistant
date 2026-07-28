using FluentValidation;
using StockIntel.Application.DTOs.Sales;

namespace StockIntel.Application.Validators;

public class CreateSaleDtoValidator : AbstractValidator<CreateSaleDto>
{
    public CreateSaleDtoValidator()
    {
        RuleFor(x => x.PaymentMethod)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(x => x.CashierName)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.SaleItems)
            .NotEmpty()
            .WithMessage("A sale must contain at least one item.");

        RuleForEach(x => x.SaleItems)
            .SetValidator(new CreateSaleItemDtoValidator());
    }
}

public class UpdateSaleDtoValidator : AbstractValidator<UpdateSaleDto>
{
    public UpdateSaleDtoValidator()
    {
        RuleFor(x => x.PaymentMethod)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(x => x.CashierName)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.SaleItems)
            .NotEmpty()
            .WithMessage("A sale must contain at least one item.");

        RuleForEach(x => x.SaleItems)
            .SetValidator(new CreateSaleItemDtoValidator());
    }
}

public class CreateSaleItemDtoValidator : AbstractValidator<CreateSaleItemDto>
{
    public CreateSaleItemDtoValidator()
    {
        RuleFor(x => x.ProductId)
            .NotEmpty();

        RuleFor(x => x.Quantity)
            .GreaterThan(0);
    }
}