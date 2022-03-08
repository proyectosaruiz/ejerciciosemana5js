"use strict";

// puntuaciones

const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];
//comentarios
//copia del objeto con los puntos sumados
//hacer una funcion de maximo y minimo

const getPoints = (pointsArray) => {
  if (Array.isArray(pointsArray)) {
    return pointsArray.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  } else {
    return pointsArray;
  }
};

const getMinMax = (puntuaciones) => {
  const orderPoints = puntuaciones.sort((a, b) => {
    a.puntos = getPoints(a.puntos);
    b.puntos = getPoints(b.puntos);

    return b.puntos - a.puntos;
  });
  return {
    first: orderPoints[0],
    last: orderPoints[orderPoints.length - 1],
  };
};
console.log(getMinMax(puntuaciones));
