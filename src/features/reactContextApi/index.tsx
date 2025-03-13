import { createContext, useContext, useState, ReactNode } from 'react'

type CounterContextType = {
  counter: number,
  increase: () => void,
};

const CounterContext = createContext<CounterContextType>({
  counter: 0,
  increase: () => { }
})

type CounterProviderProps = {
  children: ReactNode;
};

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(prev => prev + 1)

  return (
    <CounterContext.Provider value={{ counter, increase }}>
      {children}
    </CounterContext.Provider>
  )
}

const Counter = () => {
  const { counter, increase } = useContext(CounterContext);

  return (
    <div className="card">
      <button onClick={increase}>
        count is {counter}
      </button>
    </div>
  )

}

const CounterStateManagement = () => {
  return (
    <>
      <h2>State Management with React Context API</h2>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  )
}

export default CounterStateManagement;
