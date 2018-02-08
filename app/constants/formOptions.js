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
    value: '01'
  },
  {
    name: 'Fevereiro',
    value: '02'
  },
  {
    name: 'Março',
    value: '03'
  },
  {
    name: 'Abril',
    value: '04'
  },
  {
    name: 'Maio',
    value: '05'
  },
  {
    name: 'Junho',
    value: '06'
  },
  {
    name: 'Julho',
    value: '07'
  },
  {
    name: 'Agosto',
    value: '08'
  },
  {
    name: 'Setembro',
    value: '09'
  },
  {
    name: 'Outubro',
    value: '10'
  },
  {
    name: 'Novembro',
    value: '11'
  },
  {
    name: 'Dezembro',
    value: '12'
  },
];

const startYear = (new Date()).getFullYear().toString().substr(-2);
const countYear = 10;
const endYear = parseInt(startYear) + countYear;
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