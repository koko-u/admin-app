export const Executive = 'Executive' as const;
export const Manager = 'Manager' as const;
export const Staff = 'Staff' as const;

export type EmployeeRole
  = typeof Executive
  | typeof Manager
  | typeof Staff
;
