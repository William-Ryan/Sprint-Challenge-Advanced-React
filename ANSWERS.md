- [ ] Why would you use class component over function components (removing hooks from the question)?

A: You would use class components over function components in the case of legacy code. Class components also give you more control over the state then functional components.

- [ ] Name three lifecycle methods and their purposes.

A:
1. Constructor - Purpose is to set up initial state in the class component as well as pass down the parent functions of React "Usually".

2. Render - Purpose is to invoke the data being passed down from state within the class component.

3. componentDidMount - Purpose is to add setState to the initial state after being invoked by render inside of the class component.

- [ ] What is the purpose of a custom hook?

A: The purpose of custom hooks is to create functionality within a React App that adds efficency or other desired effects that the base hooks do not fundementally recreate themselves.

- [ ] Why is it important to test our apps?

A: It's important to test our apps in the event of edge cases and to weed out potiental bugs that would not be obvious otherwise.