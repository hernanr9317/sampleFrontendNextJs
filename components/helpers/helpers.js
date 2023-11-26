export const ascendingOrder = (array) => {
  return array?.sort((a, b) => {
    if (a.precio > b.precio) {
      return 1;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    return 0;
  });
};

export const generatePath = (str) => {
  const path = str
    .replace(/ñ/g, 'n') // Reemplazar ñ por n
    .normalize('NFD') // Convertir caracteres acentuados en su forma de base + marca diacrítica
    .replace(/[\u0300-\u036f]/g, '') // Eliminar las marcas diacríticas
    .toLowerCase() // Convertir todo a minúsculas
    .replace(/ /g, '-') // Cambiar los espacios por guiones
    .replace(/[^a-zA-Z0-9\-]/g, '')
    .replace(/--+/g, '-'); // Eliminar guiones repetidos

  return path;
};
