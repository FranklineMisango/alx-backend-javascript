export default function getResponseFromAPI() {
  const promise = new Promise(function(resolve, reject) {

    if (getResponseFromAPI) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });

  return promise;
}
