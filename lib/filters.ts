import { CardsType } from "../types/fetchedData-types";
import { FiltersType } from "../types/filter-types";

export const generateFilters = (cards: CardsType[]) => {
  const card = cards[0];

  const filters = [];
  const keys = Object.keys(card);

  for (let i = 0; i < 3; i++) {
    let key = keys[i];
    let value = card[key as keyof typeof card];

    if (parseInt(value!)) {
      const allValues = cards.map(() => +value!);
      const onlyInt = allValues.filter((value) => !isNaN(value));
      const sortedValues = onlyInt.sort((a: number, b: number) => {
        return a - b;
      });
      const minValue = sortedValues[0];
      const maxValue = sortedValues[sortedValues.length - 1];
      const obj = {
        type: "number",
        name: key,
        minValue,
        maxValue,
      };

      filters.push(obj);
      continue;
    }

    if (typeof value === "string") {
      const obj = {
        type: "string",
        name: key,
      };

      filters.push(obj);
      continue;
    }
  }

  return filters;
};

export const filterCards = (filtersState: FiltersType, cards: CardsType) => {
  const filters = filtersState.state;

  if (!filters) {
    return cards;
  }

  let filteredData = cards;

  const filterKeys = Object.keys(filters);

  filterKeys.map((filterKey) => {
    const filterValue: any = filters[filterKey as keyof typeof filteredData];
    if (
      typeof filterKey === "string" &&
      filterValue.length !== 0 &&
      typeof filterValue === "string"
    ) {
      const valueLower = filterValue.toLowerCase();

      const d = filteredData as Array<string>;

      filteredData = d.filter((card) =>
        card[filterKey as keyof typeof cards].toLowerCase().includes(valueLower)
      );
    }

    if (
      (typeof filterKey === "string" && filterValue && filterValue.minValue) ||
      filterValue.maxValue
    ) {
      let maxValue = filterValue.maxValue;
      let minValue = filterValue.minValue;
      if (filterValue.minValue || filterValue.maxValue) {
        minValue = filterValue.minValue || 0;
        maxValue = filterValue.maxValue || 10000;
      }

      const d = filteredData as Array<Object>;

      filteredData = d.filter(
        (card) =>
          minValue <= +card[filterKey as keyof typeof cards] &&
          +card[filterKey as keyof typeof cards] <= maxValue
      );
    }
  });

  return filteredData;
};
