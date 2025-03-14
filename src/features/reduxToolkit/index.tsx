import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increase: (state) => {
      state.count += 1
    },
  },
})

const { actions, reducer } = counterSlice;

const store = configureStore({
  reducer: {
    counter: reducer,
  },
})

type StateType = {
  counter: { count: number };
};

const Counter = () => {
  const counter = useSelector((state: StateType) => state.counter.count);
  const dispatch = useDispatch();
  const onCounterClick = () => dispatch(actions.increase());

  return (
    <div>
      <button onClick={onCounterClick}>
        count is {counter}
      </button>
    </div>
  )
}

const CounterStateManagement = () => {
  return (
    <>
      <h2>State Management with Redux Toolkit</h2>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  )
}

export default CounterStateManagement;
