const operations = [
  'Add',
  'Init',
  'Select',
  'Filter',
  'Fetch',
  'Error',
  'Update',
  'Create',
  'Delete',
] as const

export type OperationType = typeof operations[number]

