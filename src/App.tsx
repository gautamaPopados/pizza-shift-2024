import { useEffect, useState } from 'react';
import './App.css'
import axios, {AxiosError} from 'axios'
import { HeaderComponent } from './components/Header/Header';
import { ApiResponse } from './constants/interfaces';
import { Card } from './components/pizzaCard/Card';


function App() {
  const [data1, setData] = useState<ApiResponse>()

  

  const getCatalog = async (): Promise<ApiResponse> => {
    const { data } = await axios.get<ApiResponse>('https://shift-backend.onrender.com/pizza/catalog')
    return data
  }

  useEffect(() => {
     const f = async () => {
      try {
        const response = await getCatalog();
        if (response.success) {
          setData(response);
        }
      }
      catch {
        console.log('Error');
      }
     }
     f();
    
    }, []);

  return (
    <>
      <HeaderComponent/>
      <div className="content">
        <div className="cards">
          {

            data1 ? 
            data1.catalog.map((pizza) =>
              <Card pizza={pizza} openModalComponent={()=> {}} />
            ) : <p>no</p>
          }
        </div>
      </div>
      
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
