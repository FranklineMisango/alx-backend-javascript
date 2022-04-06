export default function handleResponseFromAPI(promise) {
  const Body = {
      status: 200,
      body: 'success'
  };

  return promise
    .then(() => Body)
    .catch(() => new Error())
    .finally(() => {
        console.log('Got a response from the API');
    });
}
