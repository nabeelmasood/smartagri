import {BrowserRouter, Routes,Route}from 'react-router-dom'
//page & components
import ManageProducts from './pages/ManageProducts';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route 
              path='/' 
              element= {<ManageProducts/>} 
            />  
             
            

 




            
                      
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
