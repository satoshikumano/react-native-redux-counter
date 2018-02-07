# Counter sample app.

Minimal React-Native sample app using redux and react-redux.

Most of the samples/ tutorials started from redux basic concept and then implement
the app with react-redux bindings.

However, In my experience, there's difficulty jumping to react-redux bindings
just after learned basic concept of redux.
react-redux's sophisticated APIs might not be easy to understand for beginners.

In this repository, you can see how the counter app can be improved by redux
and react-redux, and redux-thunk step by step.
I defined steps bellow.

## Minimal prerequisite

- [React-Native learn the basics](https://facebook.github.io/react-native/docs/tutorial.html)

- [Redux basics](https://redux.js.org/docs/basics/)

    If you don't feel difficulty when reading `Usage with React` and `Example: Todo List` section,

    Then just go ahead and try more sophiscated samples or just start your production app!

    If you feel difficulty, hope following guide helps.

## 1. Counter app without redux.

You can check the code from the tag [react0](https://github.com/satoshikumano/react-native-redux-counter/tree/react0).

Yay!, might be clear and nothing complex.
   
## 2. Counter app with redux, withour react-redux.

You can check the code from the tag [redux0](https://github.com/satoshikumano/react-native-redux-counter/tree/redux0).

Redux can be implemented without react-redux.

It might be easier to understand.

Everything is in App.js.

- [reducer function](https://github.com/satoshikumano/react-native-redux-counter/blob/redux0/App.js#L5)

- Calling [createStore](https://github.com/satoshikumano/react-native-redux-counter/blob/redux0/App.js#L23) and with the argument reducer and initial state.

- [dispatch the action](https://github.com/satoshikumano/react-native-redux-counter/blob/redux0/App.js#L39-L46) from the view event.

That's it!
Actually, basic concept of Redux is very simple.

In react-redux binding, Mapping the React Component state and Redux store state and dispatching actions
can be done in more sophisticated way.
[mapping code](https://github.com/satoshikumano/react-native-redux-counter/blob/redux0/App.js#L31-L33)

## 3. Counter app with redux and react-redux.

You can check the code from the tag [react-redux0](https://github.com/satoshikumano/react-native-redux-counter/tree/react-redux0).

We'll see how react-redux works here.

From this step, App.js is divided into App.js and CounterApp.js

In App.js, Provider is [defined](https://github.com/satoshikumano/react-native-redux-counter/blob/react-redux0/App.js#L24) as a root component.

Provider allows child components such as CounterApp to access to Redux store thorough `connect` interface.
You just need to create the Redux store as shown in section 2 and pass it to Provider constructor and define a child components.
That is all you need to know about the Provider and the rest is done by magical `connect` interface.

[This part](https://github.com/satoshikumano/react-native-redux-counter/blob/react-redux0/CounterApp.js#L40-L49)
is dealing with the connect interface.

- `mapStateToProps` defines mapping between the Component's state and Redux store.

- `mapDispatchToProps` defines function that can dispatch action and map it to Component's state.

Mapped properties are used [here](https://github.com/satoshikumano/react-native-redux-counter/blob/react-redux0/CounterApp.js#L11).

`this.props` now has `count` and `actions`. 

`connect` makes the "connected" version of `ConfigApp` class end export it.

By the (hidden) magic of Provider and connect interface, `count` and `actions` are injected.

Provider [references](https://github.com/satoshikumano/react-native-redux-counter/blob/react-redux0/App.js#L3) the `ConfigApp` class generated by `connect` interface here.

That is why there's no export in `ConfigApp` class [declaration](https://github.com/satoshikumano/react-native-redux-counter/blob/react-redux0/CounterApp.js#L6).
(Note: If you export it and import from App.js with `improt { ConfigApp } app from './ConfigApp'`, react-redux binding no longer works.)

Hope that helps to understand how the react-redux bindings work!

## 4. Counter app with redux, react-redux and redux-thunk.

You can check the code from the tag [react-redux-async](https://github.com/satoshikumano/react-native-redux-counter/tree/react-redux-async).

Let's see how we deal with the async operation with `redux-thunk` and `applyMiddleWare`.

1. Inject redux-thunk as middleware when [calling createStore](https://github.com/satoshikumano/react-native-redux-counter/blob/react-redux-async/App.js#L20)

2. Define [async increment](https://github.com/satoshikumano/react-native-redux-counter/blob/react-redux-async/CounterApp.js#L40-L47)

3. Add async increment to [mapDispatchToProps](https://github.com/satoshikumano/react-native-redux-counter/blob/react-redux-async/CounterApp.js#L64)

In step 3, you may notice that `incrementAsync` returns function instead of pure javascript action object.

Redux store expect the function that returns the function which takes Redux store `dispatch` function as an argument when we utilize middleware.


## Further steps

### File structure.

In this sample, file structures are not aligned with (de fact) standards.

Dividing files and place it in proper directory such as `components`, `actions`, `reducers`, `containers`, etc is good in actual development,

But not necessary in the samples for learning and could slower the learning.

### Presentation and Container

Many samples divide the UI component into Presentation and Container.
I decided not to include it in this sample to keep it simple. 

The concept is explaned [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

We'll introduce it in the real project, but not necessary to do it in
redux learning sample as the concepts might be orthogonal.

### Using different middleware, Chaining middleware

In this sample, I only use redux-thunk.

There's some other examples in [Redux API Reference](https://redux.js.org/docs/api/applyMiddleware.html)
