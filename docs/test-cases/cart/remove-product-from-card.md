# Remove product from card

## Test Cases

| ID              | Scenario                                                | Expected Result                                                 |
| --------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| CART-REMOVE-001 | Remove a product from cart                              | Product is removed successfully from cart                       |
| CART-REMOVE-002 | Remove one product when cart contains multiple products | Selected product is removed and other products remain unchanged |
| CART-REMOVE-003 | Remove the last product in cart                         | Product is removed and cart becomes empty                       |
