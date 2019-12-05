var arrValores = new Array();

arrValores[0] = 0;
arrValores[1] = 1;
arrValores[2] = 2;
arrValores[3] = 3;
arrValores[4] = 4;

const teste = (x) => {
   return x % 2 == 0;
}

function testar(fn, arr) {
   var arr2 = new Array();
   for(var i=0; i<arr.length; i++) {
      if (fn(arr[i]) == true) {
         arr2.push(arr[i]);
      }
   }
   return arr2;
}



const filter2 = (fn, arrValores) => {
   var arr2 = new Array()
   arrValores.forEach(
      valor => {
         if (fn(valor)) {
            arr2.push(valor);
         }
      }
   );

   return arr2;
}

console.log(
   filter2(
      teste,
      arrValores
   )
);



const multiplyBy2 = (x) => x * 2;
const multiplyBy3 = (x) => x * 3;
const fnMap = (funcaoA, funcaoB) => (x => funcaoA(funcaoB(x)));
const multiplyBy6 = fnMap(multiplyBy2, multiplyBy3);
console.log(multiplyBy6(2));




const curryByBind = fn =>
    fn.length === 0 ? fn() : p => curryByBind(fn.bind(null, p));


const partialByClosure = (fn, ...args) => {
    const partialize = (...args1) => (...args2) => {
        for (let i = 0; i < args1.length && args2.length; i++) {
            if (args1[i] === undefined) {
                args1[i] = args2.shift();
            }
        }
        const allParams = [...args1, ...args2];
        return (allParams.includes(undefined) ||
            allParams.length < fn.length ?
            partialize :
            fn)(...allParams);
    };
    return partialize(...args);
};


const partialCurryingByBind = fn =>
    fn.length === 0 ?
    fn() :
    (...pp) => partialCurryingByBind(fn.bind(null, ...pp));


const partialCurryByClosure = fn => {
    const curryize = (...args1) => (...args2) => {
        const allParams = [...args1, ...args2];
        return (allParams.length < func.length ? curryize : fn)(
            ...allParams
        );
    };
    return curryize();
};