Requirements
You are meeting a friend in New York City, where all roads are laid out in a perfect grid. You arrived ten minutes too early to the appointment, so you decided to take the opportunity to go for a short walk.
The city provides its tourists with a Walk Generating App on their phones -- every time you press the button it sends you an array of one-letter strings representing directions to walk. e.g. ['n', 's', 'w', 'e']

You always walk one block at a time in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


## Methods

To end up in the same place, we need equal numbers of N/S  and W/E letters in the array.

verticalCheck - I will create a vertical method that totals the N/S letters in the array and checks to see that they are equal DONE

horizontalCheck - I will do the same for horizontal method for W/E letters DONE

isTenMinutes - Checks that the count == 10