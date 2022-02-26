import { CardsResultType } from "../types/fetchedData-types";

export const fetchCategories = async () => {
  const res = await fetch("https://swapi.dev/api/");
  const data = await res.json();

  const categories = Object.keys(data);

  return categories;
};

export const fetchAllCardsByCategory = async (category: string) => {
  let next = "...";
  const arr = [];

  const res = await fetch(`https://swapi.dev/api/${category}`);
  const data: CardsResultType = await res.json();
  arr.push(...data.results);
  next = data.next;

  while (next) {
    const res = await fetch(next);
    const data = await res.json();
    arr.push(...data.results);
    next = data.next;
  }

  return arr;
};
