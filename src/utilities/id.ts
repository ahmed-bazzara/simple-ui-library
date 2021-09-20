let idCounter = 0;

export const generateId = (): number => {
  idCounter += 1;

  return idCounter;
};
