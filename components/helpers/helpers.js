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
    .replace(/ñ/g, 'n')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-zA-Z0-9\-]/g, '')
    .replace(/--+/g, '-');

  return path;
};

export const extractURLFromText = (texto) => {
  const patron = /src="([^"]+)"/;
  const coincidencias = texto.match(patron);

  if (coincidencias && coincidencias.length > 1) {
    const url = coincidencias[1];
    return url;
  } else {
    return null;
  }
};

//Convierte un array a un string
const convertirAString = (tags) => {
  if (!Array.isArray(tags)) return '';
  const texto = tags.join(' ');
  return texto.replace(/,/g, '');
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
