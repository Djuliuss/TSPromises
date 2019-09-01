"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const dodgyPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return Math.random() > 0.5 ? Promise.resolve("I am resolved") : Promise.reject("I am rejected");
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.info(`Result dodgyPromise: ${yield dodgyPromise()}`);
    }
    catch (e) {
        console.info(`Result dodgyPromise: ${e}`);
    }
});
main();
