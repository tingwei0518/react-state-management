import '@src/App.css'
import StatetManagementWithContextAPI from '@src/features/reactContextApi';
import StatetManagementWithReduxToolkit from '@src/features/reduxToolkit';

function App() {
  return (
    <>
      <StatetManagementWithContextAPI />
      <StatetManagementWithReduxToolkit />
    </>
  )
}

export default App
