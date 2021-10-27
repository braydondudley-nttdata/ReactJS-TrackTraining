const postMeals = async (url, cartCtx) => {
  // console.log("Cart: " + JSON.stringify(cartCtx))
  const response = await fetch('https://saga-quick-attempt-default-rtdb.firebaseio.com/cart.json', {
    method: 'POST',
    body: JSON.stringify({
      item: cartCtx,
    }),
  })

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const responseData = await response.json();
  // console.log(JSON.stringify(responseData))
  return responseData
}

export default postMeals