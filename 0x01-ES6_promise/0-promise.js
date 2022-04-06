export default function getResponseFromAPI() {
  var promise = new Promise(function(resolve, reject) {
      resolve("Stuff worked!");
      reject(Error("It broke"));
  });

  return promise;
}
