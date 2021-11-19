export const Roles = [
  'Executive',
  'Manager',
  'Staff',
] as const

export type EmployeeRole = typeof Roles[number];
