import { useEffect, useState } from 'react';
import './App.css'
import axios, {AxiosError} from 'axios'


function App() {
  const [data1, setData] = useState<ApiResponse>()

  interface SizeDough {
    name : string;
    price : number;
  }

  interface Extra {
    name : string;
    cost : number;
    img : string;
  }

  interface Pizza {
    id: number;
    name: string;
    ingridients : Extra[];
    toppings : Extra[];
    description : string;
    sizes : SizeDough[];
    doughs : SizeDough[];
    calories : number;
    protein : string;
    totalFat : string;
    carbohydrates : string;
    sodium : string;
    allergens : string[];
    isVegeterian : boolean;
    isGlutenFree : boolean;
    isNew : boolean;
    isHit : boolean;
    img : string;
  }

  interface ApiResponse {
    success : boolean;
    catalog : Pizza[];
  }

  const getCatalog = async (): Promise<ApiResponse> => {
    const { data } = await axios.get<ApiResponse>('https://shift-backend.onrender.com/pizza/catalog')
    return data
  }

  useEffect(() => {
     const blyat = async () => {
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
     blyat();
    
    }, []);

  return (
    <>
      <header className='header-container'>
        <div className="header">
          <div className="frame">
            <a className='logo'><img src='src\assets\logo.svg'></img></a>
            <div className='header2'>
              <a className='profile'><img src ='src\assets\profile.svg'></img></a>
              <a className='orders'><img src ='src\assets\orders.svg'></img></a>
              <a className="gap"></a>
              <a className='cart'><img src ='src\assets\basket.svg'></img></a>
              <a className='logoff'><img src ='src\assets\logoff.svg'></img></a>
            </div>
          </div>
        </div>
        
        <hr className='divider'></hr>
      </header>

      <div className="content">
        <div className="cards">
          {
            data1 ? 
            data1.catalog.map((pizza) =>
              <div className="card">
                <p> {pizza.name}</p>
              </div>
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
