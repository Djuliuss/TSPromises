const dodgyPromise = async ():Promise<string> => {
   return Math.random() > 0.5 ? Promise.resolve("I am resolved") : Promise.reject("I am rejected");
}

const main = async () => {
   try {
      console.info(`Result dodgyPromise: ${await dodgyPromise()}`);
   } catch(e) {
      console.info(`Result dodgyPromise: ${e}`);
   }
}

main();