import { useEffect, useState } from 'react';
import { getCatalog } from './utils/api/requests/pizza/catalog';
import { Header } from './components/Header/Header';
import { PizzaCard } from './components/PizzaCard/PizzaCard';
import PizzaModal from './components/PizzaModal/PizzaModal';
import styles from './App.module.css'

const App = () => {
  const [pizzaData, setPizzaData] = useState<Pizza[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState<Pizza>();

  const openModal = (pizza: Pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };

  const closeModal = () => 
    setIsModalOpen(false);
  

  useEffect(() => {
     const asyncFunction = async () => {
      try {
        const {success, catalog} = (await getCatalog()).data;

        if (success) {
          setPizzaData(catalog);
        }
      }
      catch {
        console.log('Error');
      }
     }
     asyncFunction();
    }, []);

  return (
    <>
      <Header/>
        <div className={styles.content}>
          <div className={styles.cards}>
            {!!pizzaData.length && 
              pizzaData.map((pizza) => <PizzaCard key={pizza.id} pizza={pizza} onChoose={openModal} buttonChildren='Выбрать'/>)
            }
            {!pizzaData.length && <p>Loading...</p>}
          </div>
        </div>
        <PizzaModal isOpen={isModalOpen} onClose={closeModal} pizza={selectedPizza}/>  
      
    </>
  )
}

export default App
