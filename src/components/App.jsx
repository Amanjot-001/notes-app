import '../assets/styles/App.css'
import { Provider } from 'react-redux'
import appStore from '../utils/store'
import Input from './Input'
import Notes from './Notes'

function App() {
  return (
    <Provider store={appStore}>
      <div className="App w-full flex flex-col items-center bg-background h-lvh gap-8 p-8">
        <h1 className='flex justify-center items-center text-3xl'>My notes</h1>
        <Input />
        <div className='w-full h-[1px] bg-black opacity-50'></div>
        <Notes />
      </div>
    </Provider>
  )
}

export default App
