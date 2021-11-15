export const Add = 'Add' as const;
export const Init = 'Init' as const;
export const Select = 'Select' as const;

export type OperationType
  = typeof Add
  | typeof Init
  | typeof Select
;

