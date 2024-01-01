export const createServerActionsError = (error: Error | undefined) => {
  return new Error(error?.message);
};
