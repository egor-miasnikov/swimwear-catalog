export const getCategories = async () => {
  let response = await fetch(
    "http://localhost:8080/api/contents?type=Category"
  );
  response = await response.json();

  return response.data;
};

export const getItems = items => {
  return Promise.all(
    items.map(async item => {
      let response = await fetch(`http://localhost:8080/${item}`);
      response = await response.json();

      return response.data;
    })
  );
};
