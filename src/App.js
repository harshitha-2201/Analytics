import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx'
import HomePage from './components/HomePage/HomePage.jsx'

function App() {
  return (
       <div className = 'app-container'>
         <Sidebar/>
         <HomePage/>
       </div>
  );
}

export default App;
