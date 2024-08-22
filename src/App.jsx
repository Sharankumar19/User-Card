import User from './components/User'
import './index.css'
import './App.css'
function App() {
  return (
    <div className='container'>
   
     <User name="sharan kumar .k"
            city="cuddalore"
            role="front-end developer"
            online={true}/>

      <User name="tarun"
            city="mumbai"
            role="manager"
            online={false}/>

<User name="praveen"
            city="cuddalore"
            role="full-stack developer"
            online={true}/>
   </div>
  )
}

export default App
