export const Add = 'Add' as const;
export const Init = 'Init' as const;
export const Select = 'Select' as const;
export const Filter = 'Filter' as const;
export const Fetch = 'Fetch' as const

export type OperationType
  = typeof Add
  | typeof Init
  | typeof Select
  | typeof Filter
  | typeof Fetch
;

