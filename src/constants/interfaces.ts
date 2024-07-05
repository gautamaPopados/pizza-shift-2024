export interface SizeDough {
    name : string;
    price : number;
  }

  export interface Extra {
    name : string;
    cost : number;
    img : string;
  }

  export interface Pizza {
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

  export interface ApiResponse {
    success : boolean;
    catalog : Pizza[];
  }

  export interface CardProps {
    pizza : Pizza;
    openModalComponent: (id: number) => void;
  }