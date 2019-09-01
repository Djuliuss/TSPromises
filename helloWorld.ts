const dodgyPromise = async ():Promise<string> => {
   return Math.random() > 0.5 ? Promise.resolve("I am resolved") : Promise.reject("I am rejected");
}

const main = () => {
      dodgyPromise()
      .then(result => {
         console.info(`Result dodgyPromise: ${result}`);
      })
      .catch(result => {
         console.info(`Result dodgyPromise: ${result}`);
      })
}

main();