interface Categories {
  categories: string[];
}

export type CategoriesType = Categories;

interface CardsResult {
  count: number;
  next: string;
  previous: string;
  results: {}[];
}

export type CardsResultType = CardsResult;


