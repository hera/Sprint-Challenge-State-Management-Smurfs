What problem does the context API help solve?

You don’t have to pass the props to intermediate components. In large projects nesting can be deep.



In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action creator is a function that returns an action (object containing type of an action and optionally other data). An action itself doesn’t modify the state, it just sends the ‘signal’ to a reducer.
Reducer decides what to do with actions received.
Store is the container for data.
single source of truth means data is contained in a single object and not scattered around.



What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is data that may be accessed by other components connected to the store. (It’s global)
Component state can only be passed to descendant components via props. (It’s local.)



Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-thunk allows us to use middleware in react projects. Middleware stands between action creators and reducers and makes possible doing asynchronous actions like network requests. Action creators receive dispatcher as a parameter and return a function;



What is your favorite state management system you've learned and this sprint? Please explain why!

I like redux. Even though it’s pretty complicated, I like the idea of sending actions to reducers.
