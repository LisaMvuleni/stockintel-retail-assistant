using FluentValidation;
using StockIntel.Application.DTOs.Product;

namespace StockIntel.Application.Validators;

public class CreateProductDtoValidator : AbstractValidator<CreateProductDto>
{
    public CreateProductDtoValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .MaximumLength(150);

        RuleFor(x => x.SKU)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(x => x.Barcode)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(x => x.Description)
            .MaximumLength(500)
            .When(x => !string.IsNullOrWhiteSpace(x.Description));

        RuleFor(x => x.CostPrice)
            .GreaterThanOrEqualTo(0);

        RuleFor(x => x.SellingPrice)
            .GreaterThanOrEqualTo(0);

        RuleFor(x => x.QuantityInStock)
            .GreaterThanOrEqualTo(0);

        RuleFor(x => x.ReorderLevel)
            .GreaterThanOrEqualTo(0);

        RuleFor(x => x.CategoryId)
            .NotEmpty();
    }
}

public class UpdateProductDtoValidator : AbstractValidator<UpdateProductDto>
{
    public UpdateProductDtoValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .MaximumLength(150);

        RuleFor(x => x.SKU)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(x => x.Barcode)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(x => x.Description)
            .MaximumLength(500)
            .When(x => !string.IsNullOrWhiteSpace(x.Description));

        RuleFor(x => x.CostPrice)
            .GreaterThanOrEqualTo(0);

        RuleFor(x => x.SellingPrice)
            .GreaterThanOrEqualTo(0);

        RuleFor(x => x.QuantityInStock)
            .GreaterThanOrEqualTo(0);

        RuleFor(x => x.ReorderLevel)
            .GreaterThanOrEqualTo(0);

        RuleFor(x => x.CategoryId)
            .NotEmpty();
    }
}