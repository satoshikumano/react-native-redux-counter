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

## 1. Counter app without redux.

You can check the code from the tag [react0](https://github.com/satoshikumano/react-native-redux-counter/tree/react0).

Yay!, might be clear and nothing complex.
   
## 2. Counter app with redux, withour react-redux.

You can check the code from the tag [redux0](https://github.com/satoshikumano/react-native-redux-counter/tree/redux0).

## 3. Counter app with redux and react-redux.

You can check the code from the tag [react-redux0](https://github.com/satoshikumano/react-native-redux-counter/tree/react-redux0).

## 4. Counter app with redux, react-redux and redux-thunk.

You can check the code from the tag [react-redux-async](https://github.com/satoshikumano/react-native-redux-counter/tree/react-redux-async).


## About file structure.

In this sample, file structures are not aligned with (de fact) standards.

Dividing files and place it in proper directory such as `components`, `actions`, `reducers`, `containers`, etc is good in actual development,

But not necessary in the samples for learning and could slower the learning.

## Presentation and Container

Many samples divide the UI component into Presentation and Container.
I decided not to include it in this sample to keep it simple. 

The concept is explaned [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

We'll introduce it in the real project, but not necessary to do it in
redux learning sample as the concepts might be orthogonal.

