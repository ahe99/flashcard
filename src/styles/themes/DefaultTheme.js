import {fonts, position} from '$styles/variables';

const colorPalettes = {
  $white: '#fff',
  $black: '#000',
  $0: '#fff1e6',
  $1: '#797D62',
  $2: '#9B9B7A',
  $3: '#D9AE94',
  $4: '#E5C59E',
  $5: '#F1DCA7',
  $6: '#F8D488',
  $7: '#E4B074',
  $8: '#D08C60',
  $9: '#b58463',
  $10: '#997B66',
  $11: '#c8c8c8',
  $12: '#646464',
  $13: '#bfb',
  $14: '#fbb',
  $15: 'rgb(155,100,155)',
  $16: 'rgb(100,155,155)',
};

const transparncy = {
  $100: 'FF',
  $95: 'F2',
  $90: 'E6',
  $85: 'D9',
  $80: 'CC',
  $75: 'BF',
  $70: 'B3',
  $65: 'A6',
  $60: '99',
  $55: '8C',
  $50: '80',
  $45: '73',
  $40: '66',
  $35: '59',
  $30: '4D',
  $25: '40',
  $20: '33',
  $15: '26',
  $10: '1A',
  $5: '0D',
  $0: '00',
};

const withTransparentcy = (color, transparncy) => {
  return `${color}${transparncy}`;
};

export const DefaultTheme = {
  dark: true,
  fonts: {...fonts},
  position: {...position},
  colors: {
    heading: colorPalettes.$10,
    text: colorPalettes.$9,
    icon: colorPalettes.$9,
    border: colorPalettes.$10,
    loader: colorPalettes.$9,
    checkbox: colorPalettes.$9,
    checkboxSelected: colorPalettes.$4,
    progress: colorPalettes.$9,
    progressGap: colorPalettes.$0,
    placeholder: withTransparentcy(colorPalettes.$1, transparncy.$30),
    //Card
    cardContent: colorPalettes.$1,
    indicator: colorPalettes.$11,
    indicatorActive: colorPalettes.$12,
    statusUp: colorPalettes.$13,
    statusDown: colorPalettes.$14,
  },
  bgColors: {
    mask: withTransparentcy(colorPalettes.$0, transparncy.$80),
    modalMask: withTransparentcy(colorPalettes.$2, transparncy.$60),
    modalOuter: colorPalettes.$4,
    modalInner: colorPalettes.$4,
    button: colorPalettes.$4,
    form: colorPalettes.$4,
    input: colorPalettes.$0,
    inputIcon: withTransparentcy(colorPalettes.$6, transparncy.$40),
    checkbox: colorPalettes.$4,
    checkboxSelected: colorPalettes.$9,
    //Card
    card: colorPalettes.$white,
    cardOuter: colorPalettes.$16,
    statusUp: colorPalettes.$13,
    statusDown: colorPalettes.$14,

    //List item
    itemHeader: colorPalettes.$4,
    item: colorPalettes.$0,
    itemInner: colorPalettes.$5,
    itemUp: colorPalettes.$13,
    itemDown: colorPalettes.$14,
  },
};
