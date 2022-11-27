# Development

### Link to Deployed Website
https://dumbpenguin988.github.io/development/

### Goal and Value of the Application
The application displays the menu of a bakery and allows users to add and remove items. It supports filtering by price and type, and sorting by price.

### Usability Principles Considered
The application considers visual hiearchy and puts the menu on the left and the filters on a sidebar on the right.

### Organization of Components
There are two components in this appilcation -- menu and bakeryItems. The Menu is a grid of bakery items.

### How Data is Passed Down Through Components
The processed json bakery data is passed down to Menu in props together with total price that is declared as a state and also a map that stores the item names and their corresponding count. This data is also passed to BakeryItem as props.

### How the User Triggers State Changes
When users add/delete items in the cart, the total gets updated via the setTotal method. 
