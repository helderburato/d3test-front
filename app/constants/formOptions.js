const cities = [
  {
    name: 'São Paulo',
    value: 'São Paulo'
  }
];

const states = [
  {
    name: 'SP',
    value: 'SP'
  },
  {
    name: 'SC',
    value: 'SC'
  }
];

const months = [
  {
    name: 'Janeiro',
    value: 1
  },
  {
    name: 'Fevereiro',
    value: 2
  },
  {
    name: 'Março',
    value: 3
  },
  {
    name: 'Abril',
    value: 4
  },
  {
    name: 'Maio',
    value: 5
  },
  {
    name: 'Junho',
    value: 6
  },
  {
    name: 'Julho',
    value: 7
  },
  {
    name: 'Agosto',
    value: 8
  },
  {
    name: 'Setembro',
    value: 9
  },
  {
    name: 'Outubro',
    value: 10
  },
  {
    name: 'Novembro',
    value: 11
  },
  {
    name: 'Dezembro',
    value: 12
  },
];

const startYear = (new Date()).getFullYear();
const endYear = startYear + 10;
let years = [];
let i = 0;

for (let year = startYear; year<endYear; year++) {
  years[i] = {
    name: year,
    value: year
  };

  i++;
};

const plots = [
  {
    name: '1x R$ 660,00',
    value: '1x R$ 660,00'
  },
  {
    name: '2x R$ 330,00',
    value: '2x R$ 330,00'
  },
  {
    name: '3x R$ 220,00',
    value: '3x R$ 220,00'
  },
  {
    name: '4x R$ 165,00',
    value: '4x R$ 165,00'
  },
  {
    name: '5x R$ 132,00',
    value: '5x R$ 132,00'
  }
];

export { states, cities, months, years, plots };