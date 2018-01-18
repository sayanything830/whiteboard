## Whiteboard Challenge 03

*Complete today's whiteboard challenge and follow the submission instructions below:

*You're the junior conductor on a commuter train, and have been asked by the senior conductor to do a head count of passengers on the train.

*Write a function const traverse = (engine) => {... which takes the engine as a starting location. Travel from the engine to the caboose, and total the number of passengers in each car as your progress. return the final total once your traversal is complete.

*Each car, including the engine will have the following signature: js { <engine> value: 2, next: { <next car> value: 16, next: { <next car> } }*

This function allows for a single argument to be passed that must be an object with key-value pairs (cannot be an empty object). It will concatenate the value count of passengers for each train car and will return the total number of passengers on the train. It will stop once the next train car value is null.

The tests:
1. check that an object is passed as an argument
2. check if an object is empty
3. recognizes the inner-most nested object as the stop endpoint
4. checks that the correct number of passengers are returned
