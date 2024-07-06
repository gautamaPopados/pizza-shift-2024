import { useEffect, useState } from 'react';
import { getCatalog } from './utils/api/requests/pizza/catalog';
import { HeaderComponent } from './components/Header/Header';
import { Card } from './components/pizzaCard/Card';
import PizzaModal from './components/PizzaModal/PizzaModal';
import './App.css'

function App() {

  const [pizzaData, setData] = useState<ApiResponse>()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Pizza>();

  const openModal = (pizza : Pizza) => {
    setModalData(pizza);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
     const f = async () => {
      try {
        const response = (await getCatalog()).data;
        if (response) {
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
            pizzaData ? 
            pizzaData.catalog.map((pizza) =>
              <Card pizza={pizza} openModal={openModal} />
            ) : <p>no</p>
          }
        </div>
      </div>
      <PizzaModal isOpen={isModalOpen} onClose={closeModal} pizza={modalData}/>  
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
