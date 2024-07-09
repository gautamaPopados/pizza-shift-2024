import { useState } from 'react';
import Header from './components/Header/Header';
import PizzaCard from './components/PizzaCard/PizzaCard';
import PizzaModal from './components/PizzaModal/PizzaModal';
import styles from './App.module.css'
import useFetch from './utils/hooks/useFetch';
import { getCatalog } from './utils/api/requests';

const App = () => {
  const { data: pizzaData, isPending, error } = useFetch(getCatalog);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState<Pizza>();

  const openModal = (pizza: Pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };

  const closeModal = () =>
    setIsModalOpen(false);

  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={styles.pizzaCards}>
          {pizzaData.length > 0 &&
            pizzaData.map((pizza) => <PizzaCard key={pizza.id} pizza={pizza} onChoose={openModal} buttonChildren='Выбрать' />)
          }
          {isPending && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </div>
      </div>
      <PizzaModal isOpen={isModalOpen} onClose={closeModal} pizza={selectedPizza} />
    </>
  )
}

export default App
