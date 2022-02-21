export const fetchCategories = async () => {
  const res = await fetch("https://swapi.dev/api/");
  const data = await res.json();

  const categories = Object.keys(data);

  return categories;
};