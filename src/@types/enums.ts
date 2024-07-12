export enum Ingridients {
    PINEAPPLE = 'PINEAPPLE', 
    MOZZARELLA = 'MOZZARELLA',
    PEPERONI = 'PEPERONI', 
    GREEN_PEPPER = 'GREEN_PEPPER', 
    MUSHROOMS = 'MUSHROOMS', 
    BASIL = 'BASIL', 
    CHEDDAR = 'CHEDDAR', 
    PARMESAN = 'PARMESAN', 
    FETA = 'FETA', 
    HAM = 'HAM', 
    PICKLE = 'PICKLE', 
    TOMATO = 'TOMATO', 
    BACON = 'BACON', 
    ONION = 'ONION', 
    CHILE = 'CHILE', 
    SHRIMPS = 'SHRIMPS', 
    CHICKEN_FILLET = 'CHICKEN_FILLET', 
    MEATBALLS = 'MEATBALLS'
  }

  export enum Sizes {
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
    LARGE = 'LARGE'
  }

  export enum Doughs {
    THIN = 'THIN',
    THICK = 'THICK'
  }
  
  export const translationIngridients: { [key: string]: string } = {
    [Ingridients.PINEAPPLE]: 'Ананас',
    [Ingridients.MOZZARELLA]: 'Моцарелла',
    [Ingridients.PEPERONI]: 'Пеперони',
    [Ingridients.GREEN_PEPPER]: 'Зеленый перец',
    [Ingridients.MUSHROOMS]: 'Грибы',
    [Ingridients.BASIL]: 'Базилик',
    [Ingridients.CHEDDAR]: 'Чеддер',
    [Ingridients.PARMESAN]: 'Пармезан',
    [Ingridients.FETA]: 'Фета',
    [Ingridients.HAM]: 'Гамбургер',
    [Ingridients.PICKLE]: 'Огурец',
    [Ingridients.TOMATO]: 'Помидор',
    [Ingridients.BACON]: 'Бекон',
    [Ingridients.ONION]: 'Лук',
    [Ingridients.CHILE]: 'Чили',
    [Ingridients.SHRIMPS]: 'Раки',
    [Ingridients.CHICKEN_FILLET]: 'Филе курицы',
    [Ingridients.MEATBALLS]: 'Мясные шарики'
  };
  export const translationSizes: { [key: string]: string } = {
    [Sizes.SMALL]: '25см',
    [Sizes.MEDIUM]: '30см',
    [Sizes.LARGE]: '35см'
  };