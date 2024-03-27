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

export const extractURLFromText = (texto) => {
  // Expresión regular para buscar el patrón src="https..."
  const patron = /src="([^"]+)"/;

  // Buscar el patrón en el texto
  const coincidencias = texto.match(patron);

  // Verificar si se encontraron coincidencias
  if (coincidencias && coincidencias.length > 1) {
    // El valor deseado estará en la segunda posición del array de coincidencias
    const url = coincidencias[1];
    return url;
  } else {
    // Si no se encuentra ninguna coincidencia, devolver null
    return null;
  }
};

//Convierte un array a un string
const convertirAString = (tags) => {
  if (!Array.isArray(tags)) return '';
  const texto = tags.join(' ');
  return texto.replace(/,/g, ''); // Elimina todas las comas
};

//Separa los tags de un string ejemplo , "#tag1 #tag2" para colocarlos en un array, [#tag1, #tag2]
export const extractTags = (string) => {
  let convertString = string;
  if (typeof string !== 'string') {
    convertString = convertirAString(convertString);
  } else {
    convertString = string.replace(/,/g, '');
  }
  const tagsConSeparadores = convertString.match(/#[^\s#]+(?:\s+[^\s#]+)*/g); // Encuentra todos los tags que comienzan con # y no contienen espacios, o contienen espacios pero no son solo espacios
  return tagsConSeparadores || []; // Manejar caso de que no se encuentren tags
};
