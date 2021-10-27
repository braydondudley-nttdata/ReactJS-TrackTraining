const fetchMeals = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const responseData = await response.json();
  // console.log(JSON.stringify(responseData))
  return responseData
}

export default fetchMeals