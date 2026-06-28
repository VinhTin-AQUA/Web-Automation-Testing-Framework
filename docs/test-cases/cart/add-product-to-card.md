# Add product to card

## Test Cases

| ID       | Scenario                              | Expected Result                                          |
| -------- | ------------------------------------- | -------------------------------------------------------- |
| CART-001 | Add a single product to cart          | Product is added successfully                            |
| CART-002 | Add multiple products to cart         | All selected products are added successfully             |
| CART-003 | Add product with valid quantity (> 0) | Product is added successfully                            |
| CART-004 | Add product with quantity = 0         | Validation message is displayed and product is not added |
| CART-005 | Add product with negative quantity    | Validation message is displayed and product is not added |
