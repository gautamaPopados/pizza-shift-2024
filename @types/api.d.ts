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

   interface ApiResponse  {
    success : boolean;
    catalog : Pizza[];
  }

   interface CardProps {
    pizza : Pizza;
    openModal: (pizza: Pizza) => void;
  }

  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    pizza?: Pizza;
  }
