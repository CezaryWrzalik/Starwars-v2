interface Categories {
  categories: string[];
}

export type CategoriesType = Categories;

interface CardsResult {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string,
    data: string,
  }[];
}

export type CardsResultType = CardsResult;

interface Cards {

} 

export type CardsType = Cards;