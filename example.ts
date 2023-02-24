// type Enumerate<
//   N extends number,
//   Acc extends number[] = []
// > = Acc["length"] extends N
//   ? Acc[number]
//   : Enumerate<N, [...Acc, Acc["length"]]>;

// export type Range<F extends number, T extends number> =
//   | Exclude<Enumerate<T>, Enumerate<F>>
//   | T; 

type T = Range<0, typeof screens.length>;


// export type Messages = {
//   [key: string]: string | Messages;
// }; oof fr hot

  //  "downLevelIterator": true - чтобы сет заспредить и т.д.