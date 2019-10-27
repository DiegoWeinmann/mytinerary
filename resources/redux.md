# Redux

> Redux is a predictable state container for Javascript applications.

### Uni-directional Architecture

**Flux pattern** is a way of updating Views and handling user actions in an uni-directional way. Redux uses this concept of uni-directional data flow.

- The application has a **central/root state**.
- A state change triggers View updates(components are subscribed to the store and listen for changes in the store).
- Only special functions can change the state(reducers).
- A user interaction triggers these special state changing functions.
- Only one change takes place at a time.

The flux pattern makes state more **manageable** and **predictable**. Having a central and unique source of truth (state) makes everything more easier.

The tradeoff of using Redux is that you have to deal with certain constrains. You may also need to write more code to get the same thing done(more boilerplate code).

[dan abramov](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

Redux offers a tradeoff. It asks you to:

- Describe application state as plain objects and arrays.
- Describe changes in the system as plain objects.
- Describe logic for handling changes as pure functions.

Redux helps to:

- Persist state to a local storage and then boot up from it.
- Pre-fill state on the server, send it to the client in HTML and boot up from it.
- Pass action objects over the network to implement collaborative environments.
- Mantain an undo history.
- Travel between the state history in development. (Redux dev tools)
- Provide alternative UIs while reusing most of the business logic.

> The tradeoff that Redux offers is to **add indirection** to decouple "what happend" from "how things change".

Redux is a modified implementation of Flux Architecture.
Redux and Flux prescribe to not mutate the application state from the UI layer. This patterns recommend a function that does that for you(reducers).
Flux has many stores while Rudux only has one.

### The Principles of Redux

[redux three principles](https://redux.js.org/introduction/three-principles)

- Single source of truth

The state of your whole application is stored on an object tree whitin a **single store**. This means that the state of all pieces of your application depends on **one** root object tree (state).

- State is read only

The only way to change the state is to emit an _action_, an object describing what happend. This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. All the changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. Actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes. **Views cannot change the state directly**. In Redux you dispatch actions. These actions tell a function called reducer to update the state. The state is inmutable. Each action instructs the reducer to replace the existing state with a new version.

- Changes are made with pure functions

To specify how the state tree is transformed by actions you write pure _reducers_.

> Reducers are just pure functions that take the previous state and an action, and return the next state.

Is important to remember to return from a reducer a new state object instead of mutating the previous state. There can be multiple reducers whitin Redux to manage specific parts of the state tree. Because reducers are pure functions you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.

### Pure vs Impure functions

A impure function is a function that returns a different result on every call with the same arguments.

A Pure function will return allways the same result for the same imput.

### Three Pilars of Redux

- **STORE**

The store is the soul of Redux. The store is the single source of truth for the application. Creating a store is very simple.

```javascript
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
```

The store holds the application state and gives access to some useful methods.

**getState**

This method return the current state.
`store.getState()`

**dispatch**

```javascript
const action = {
	type: 'SUBSTRACT',
	payload: { value: 10 }
};
store.dispatch(action);
```

**subscribe**
This method subscribes a change listener to the state. When the reducer updates the state, it calls all subscribed listeners methods.
They can access the state using the .getState method.

**Action**

Actios are plain Javascript objects. They usually have a payload and always have a type.

```javascript
const action = {
	type: 'ADD',
	payload: { value: 5 }
};
```

**Reducers**

Reducers are pure functions. They know what to do with an action and its information.
They take in the current state and an action and return a new state. The state must not be mutated.

### NET NINJA videos

Redux is a data store for all the application data.
Any component can access data from the store.

**index.js**

```javascript
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
	// Provide the store to the application.
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
```

**rootReducer.js**
basic reducer exported to be passed to the store in index.js

```javascript
const initialState = {
	posts: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default rootReducer;
```

**how to connect to a component**

```javascript
import React from 'react';
import { connect } from 'react-redux';

class Component extends React.Component {
	//...
}

const mapStateToProps = state => ({
	posts: state.posts
});

export default connect(mapStateToProps)(Component);
```
