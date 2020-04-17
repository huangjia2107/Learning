let p = Promise.resolve(8);
let p1 = p.then((value) => Error("fff"));
p1.then((value) => console.log(value, p1));
p1.catch((r) => console.log(r));
//# sourceMappingURL=tester.js.map