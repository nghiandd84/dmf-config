import('./Root');
/*
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: 'nghia',
  lastName: 'Nguyen',
  age: 38,
});

person.on('firstNameChanged', (val) => {
  console.log(val);
});

type Point = {
  x: number;
  y: number;
};

type P = keyof Point;
const p: P = 'x';

function f() {
  return {
    x: 12,
    y: 13,
    z: '23',
  };
}

type F = ReturnType<typeof f>;
const f_const: F = {
  x: 1,
  y: 20,
  z: 'Z val',
};

const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Person = Partial<typeof MyArray[0]>;
const p1: Person = {
  age: 13,
//   name: '232',
};
*/
