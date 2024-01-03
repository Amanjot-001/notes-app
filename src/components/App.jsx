import '../assets/styles/App.css'
import Header from './Header'
import Notes from './Notes'
import { Provider } from 'react-redux'
import appStore from '../utils/store'

function App() {
  return (
    <Provider store={appStore}>
      <div className="App w-full flex flex-col bg-background min-h-lvh">
        <Header />
        <Notes />
      </div>
    </Provider>
  )
}

export default App
