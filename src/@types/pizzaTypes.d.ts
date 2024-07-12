import { Doughs, Ingridients, Sizes } from "./enums";


interface PizzaSize {
  name: Sizes;
  price: number;
}

interface PizzaDough {
  name: Doughs;
  price: number;
}

interface PizzaIngridient {
  name: Ingridients;
  cost: number;
  img: string;
}

interface Pizza {
  id: number;
  name: string;
  ingridients: PizzaIngridient[];
  toppings: PizzaIngridient[];
  description: string;
  sizes: PizzaSize[];
  doughs: PizzaDough[];
  calories: number;
  protein: string;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegeterian: boolean;
  isGlutenFree: boolean;
  isNew: boolean;
  isHit: boolean;
  img: string;
}