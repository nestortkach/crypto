export const selectors = {
  calcBackground: '--calcBackground',
  buttonsGroupButtonColor: '--buttonsGroupButtonColor',
  buttonsGroupButtonBackground: '--buttonsGroupButtonBackground',
  buttonsGroupButtonColorActive: '--buttonsGroupButtonColorActive',
  buttonsGroupButtonBackgroundActive: '--buttonsGroupButtonBackgroundActive',
  buttonsGroupBackground: '--buttonsGroupBackground',
  labelColor: '--labelColor',
  inputColor: '--inputColor',
  inputBackground: '--inputBackground',
  inputSelectBackground: '--inputSelectBackground',
  inputSelectColor: '--inputSelectColor',
  inputSelectCaret: '--inputSelectCaret',
  infoCirclesColor: '--infoCirclesColor',
  infoSymbolsColor: '--infoSymbolsColor',
  infoFeesColor: '--infoFeesColor',
  infoFeesTitlesColor: '--infoFeesTitlesColor',
  buttonBackground: '--buttonBackground',
  buttonBackgroundDisabled: '--buttonBackgroundDisabled',
  buttonColor: '--buttonColor',
  popupColorMain: '--popupColorMain',
  popupColorRate: '--popupColorRate',
  popupBackground: '--popupBackground',
  popupIconColor: '--popupIconColor',
  error: '--error',
  expectedRateFill: '--expectedRateFill',
  combinedInputBackgroundColor: '--combinedInputBackgroundColor',
  combinedInputLabelColor: '--combinedInputLabelColor',
};

export const partnersTheme = {
  guardarian: {
    buttonsGroupButtonColor: '#fff',
    buttonsGroupButtonColorActive: '#fff',
    buttonsGroupBackground: 'rgba(255, 255, 255, 0.4)',
    buttonsGroupButtonBackground: 'rgba(255, 255, 255, 0.17)',
    buttonsGroupButtonBackgroundActive: 'rgba(255, 255, 255, 0.4)',
    labelColor: '#4C9DE8',
    inputBackground: '#fff',
    inputColor: '#000',
    inputSelectBackground: '#5583FF',
    inputSelectColor: '#fff',
    inputSelectCaret: 'rgba(255, 255, 255, 0.4)',
    infoCirclesColor: '#1A88EE',
    infoSymbolsColor: '#fff',
    infoFeesColor: '#fff',
    infoFeesTitlesColor: '#D7EAFC',
    buttonBackground: '#03B481',
    buttonBackgroundDisabled: 'rgba(0, 153, 109, 0.3)',
    buttonColor: '#fff',
    popupColorMain: '#4C9DE8',
    popupColorRate: '#000',
    popupBackground: '#fff',
    popupIconColor: '#D7EAFC',
    error: 'red',
    expectedRateFill: '#ABD5FD',
    combinedInputBackgroundColor: '#fff',
    combinedInputLabelColor: '#4c9de8',
    calcBackground: '#0000000f',
  },
};

partnersTheme.widgetCalculator = {
  ...partnersTheme.guardarian,
  infoFeesColor: '#000',
};

partnersTheme.xym = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#4804BB',
  buttonBackground: '#FF00FB',
  buttonBackgroundDisabled: 'rgba(255, 0, 251, 0.5)',
  infoCirclesColor: '#4804BB',
  popupIconColor: '#00C3FC',
};

partnersTheme.xem = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#0E7C97',
  buttonBackground: '#F89D27',
  buttonBackgroundDisabled: 'rgba(248, 157, 39, 0.5)',
  infoCirclesColor: '#0E7C97',
  popupIconColor: '#fff',
};

partnersTheme.verge = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#237C95',
};

partnersTheme.kishu = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#5583FF',
};

partnersTheme.kishuBackgroundWhite = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#1c9cdc',
  combinedInputBackgroundColor: '#ECF6FF',
  buttonBackgroundDisabled: '#1C9CDC4D',
  buttonBackground: '#1c9cdc',
  infoCirclesColor: '#1c9cdc',
  infoSymbolsColor: '#1c9cdc',
  infoFeesColor: '#000',
  infoFeesTitlesColor: '#0000004D',
  buttonsGroupButtonBackground: '#ECF6FF',
  buttonsGroupButtonColor: '#1C9CDC',
  buttonsGroupButtonBackgroundActive: '#1C9CDC',
  buttonsGroupButtonColorActive: '#fff',
};

partnersTheme.vergeBackgroundWhite = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#003D58',
  combinedInputBackgroundColor: '#fff',
  buttonBackgroundDisabled: '#4CC2F14D',
  buttonBackground: '#4CC2F1',
  infoCirclesColor: '#4CC2F1',
  infoSymbolsColor: '#4CC2F1',
  infoFeesColor: '#000',
  infoFeesTitlesColor: '#0000004D',
  buttonsGroupButtonBackground: '#fff',
  buttonsGroupButtonColor: '#003D58',
  buttonsGroupButtonBackgroundActive: '#003D58',
  buttonsGroupButtonColorActive: '#fff',
};

partnersTheme.tron = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#FF060A',
};

partnersTheme.shiba = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#FFA409',
};

partnersTheme.monero = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#F26822',
};

partnersTheme.world = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#081DB6',
};

partnersTheme.ada = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#82A7FF',
};
partnersTheme.tether = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#267761',
};
partnersTheme.ethereum = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#D6D6D6',
  inputSelectCaret: 'rgba(0,0,0, 1)',
  inputSelectColor: 'rgba(0,0,0, 1)',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.stellar = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#3300D5',
};
partnersTheme.ripple = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#75B3FF',
};
partnersTheme.bat = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#5583FF',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.pancake = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#FEDC90',
  inputSelectCaret: 'rgba(0,0,0, 1)',
  inputSelectColor: 'rgba(0,0,0, 1)',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.polkadot = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#E6007A',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.raven = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#F0513A',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.chainlink = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#5583FF',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.solana = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#61A5FF',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.share = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#004D9F',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.dash = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#025089',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.ontology = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#0C6C85',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.horizen = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#0AB0E6',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.nem = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#F7A800',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.symbolToken = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#4804BB',
  buttonBackground: '#FF00FB',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.sushi = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#5583FF',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.cryptoCom = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#025089',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.harvestFinance = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#EFB75B',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.dfiMoney = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#5583FF',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.uniswap = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#FECAFF',
  inputSelectCaret: 'rgba(0,0,0, 1)',
  inputSelectColor: 'rgba(0,0,0, 1)',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.daoMaker = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#175BB5',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.chiliz = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#360009',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.hogeFinance = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#797979',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.nowToken = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#00EF76',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.kusama = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#A1A1A1',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.aave = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#48A7BF',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.wax = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#974E00',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.theta = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#237E8C',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.filecoin = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#61A5FF',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.nano = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#104A8D',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.bitcoin = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#FFBB69',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.bitcoinCash = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#3C6D06',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.harmony = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#09789C',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};
partnersTheme.klever = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#BD056A',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.ark = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#550000',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.icon = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#235D65',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.zilliqa = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#235D65',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.algorand = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#A4A4A4',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.keanuInu = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#2B00AA',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.bluzelle = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#FDBA4D',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.bread = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#FDBA4D',
  infoFeesTitlesColor: 'rgba(255,255,255, 1)',
};

partnersTheme.doge = {
  ...partnersTheme.guardarian,
  buttonsGroupButtonColor: '#000',
  buttonsGroupBackground: 'rgba(255, 255, 255, 0.4)',
  buttonsGroupButtonBackground: 'rgba(255, 255, 255, 0.17)',
  labelColor: '#4C9DE8',
  inputSelectBackground: '#B4952E',
  inputSelectColor: '#000',
  inputSelectCaret: 'rgba(255, 255, 255, 0.4)',
  infoCirclesColor: 'rgba(0, 0, 0, 0.5)',
  infoSymbolsColor: '#000',
  infoFeesColor: '#000',
  infoFeesTitlesColor: '#000',
  buttonBackground: '#03B481',
  buttonBackgroundDisabled: 'rgba(0, 153, 109, 0.3)',
  popupColorMain: '#4C9DE8',
  popupColorRate: '#fff',
  popupBackground: '#000',
  error: 'red',
  expectedRateFill: '#000',
};

partnersTheme.floki = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#BD643D',
};

partnersTheme.sand = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#1A3248',
};

partnersTheme.avax = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#862828',
};

partnersTheme.axs = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#2BAAF1',
};

partnersTheme.hex = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#754BED',
};

partnersTheme.sanshu = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#000076',
};

partnersTheme.rainbow = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#1D4C83',
};

partnersTheme.koromaru = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#000000',
};

partnersTheme.awc = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#212F50',
};

partnersTheme.feg = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#BD643D',
  calcBackground: 'none',
};

partnersTheme.ach = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#312CBE',
};

partnersTheme.aergo = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#212F50',
};

partnersTheme.elf = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#191957',
};

partnersTheme.mph = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#7D18AC',
};

partnersTheme.zrx = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#1F1F1F',
};

partnersTheme.dlt = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#322A3F',
};

partnersTheme.klee = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#3DC7FC',
};
partnersTheme.usdc = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#033F81',
  calcBackground: 'none',
};
partnersTheme.ggtkn = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#033F81',
  calcBackground: 'none',
};
partnersTheme.atom = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#6F7390',
  calcBackground: 'none',
};
partnersTheme.iota = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#8E86C0',
  calcBackground: 'none',
};
partnersTheme.fet = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#1F43A6',
  calcBackground: 'none',
};
partnersTheme.op = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#581B1D',
  calcBackground: 'none',
};
partnersTheme.sxp = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#581B1D',
  calcBackground: 'none',
};
partnersTheme.cfx = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#013D82',
  calcBackground: 'none',
};

partnersTheme.jasmy = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#DB5719',
  calcBackground: 'none',
};
partnersTheme.inj = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#005894',
  calcBackground: 'none',
};
partnersTheme.arb = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#134A6F',
  calcBackground: 'none',
};
partnersTheme.pepe = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#D90118',
  calcBackground: 'none',
};
partnersTheme.gala = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#0077E0',
  calcBackground: 'none',
};
partnersTheme.babydoge = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#301F1B',
  calcBackground: 'none',
};
partnersTheme.iotx = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#22F6A6',
  calcBackground: 'none',
};
partnersTheme.ocean = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#480031',
  calcBackground: 'none',
};
partnersTheme.ton = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#004466',
  calcBackground: 'none',
};
partnersTheme.raca = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#060606',
  calcBackground: 'none',
};
partnersTheme.tipsy = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#1F0058',
  calcBackground: 'none',
};
partnersTheme.kdoe = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#3B1285',
  calcBackground: 'none',
};
partnersTheme.brg = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#674500',
  calcBackground: 'none',
};
partnersTheme.ltc = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#8E86C0',
  calcBackground: 'none',
};
partnersTheme.vra = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#25020C',
  calcBackground: 'none',
};
partnersTheme.matic = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#8E86C0',
  calcBackground: 'none',
};
partnersTheme.one = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#09789C',
};

partnersTheme.mint = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#3DC7FC',
};

partnersTheme.near = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#3DC7FC',
};

partnersTheme.bitgert = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#3DC7FC',
};

partnersTheme.nyxToken = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#C0AFF7',
};

partnersTheme.voltInu = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#313030',
};
partnersTheme.egld = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#453474',
};

partnersTheme.light = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#5583FF',
  combinedInputBackgroundColor: '#F6F4F8',
  buttonBackgroundDisabled: '#4c9de875',
  buttonsGroupButtonBackground: '#F6F4F8',
  buttonsGroupButtonColor: '#4C9DE8',
  buttonsGroupButtonColorActive: '#fff',
  buttonsGroupButtonBackgroundActive: '#4C9DE8',
  buttonBackground: '#4C9DE8',
  infoCirclesColor: '#5583FF',
  infoSymbolsColor: '#5583FF',
  infoFeesColor: '#1B2125',
  infoFeesTitlesColor: '#1B2125',
  calcBackground: '#fff',
};

partnersTheme.dark = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#5583FF',
  combinedInputBackgroundColor: '#fff',
  buttonBackgroundDisabled: '#00ebb269',
  buttonsGroupButtonBackground: 'rgba(255, 255, 255, 0.17)',
  buttonsGroupButtonColor: '#fff',
  buttonsGroupButtonColorActive: '#01268A',
  buttonsGroupButtonBackgroundActive: '#fff',
  buttonBackground: '#00EBB2',
  buttonColor: '#01268A',
  infoCirclesColor: '#5583FF',
  infoSymbolsColor: '#5583FF',
  infoFeesColor: 'rgba(255, 255, 255, 0.6)',
  infoFeesTitlesColor: '#fff',
  calcBackground: '#1B2125',
};

partnersTheme.blue = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#5583FF',
  combinedInputBackgroundColor: '#fff',
  buttonBackgroundDisabled: '#00ebb269',
  buttonsGroupButtonBackground: 'rgba(255, 255, 255, 0.17)',
  buttonsGroupButtonColor: '#fff',
  buttonsGroupButtonColorActive: '#01268A',
  buttonsGroupButtonBackgroundActive: '#fff',
  buttonBackground: '#00EBB2',
  buttonColor: '#01268A',
  infoCirclesColor: '#5583FF',
  infoSymbolsColor: '#5583FF',
  infoFeesColor: 'rgba(255, 255, 255, 0.6)',
  infoFeesTitlesColor: '#fff',
  calcBackground: 'linear-gradient(90.2deg, #0E20EB 0.66%, #003CA7 100%)',
};

partnersTheme.darkblue = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#5583FF',
  combinedInputBackgroundColor: '#fff',
  buttonBackgroundDisabled: '#00ebb269',
  buttonsGroupButtonBackground: 'rgba(255, 255, 255, 0.17)',
  buttonsGroupButtonColor: '#fff',
  buttonsGroupButtonColorActive: '#01268A',
  buttonsGroupButtonBackgroundActive: '#fff',
  buttonBackground: '#00EBB2',
  buttonColor: '#01268A',
  infoCirclesColor: '#5583FF',
  infoSymbolsColor: '#5583FF',
  infoFeesColor: 'rgba(255, 255, 255, 0.6)',
  infoFeesTitlesColor: '#fff',
  calcBackground: 'linear-gradient(90.2deg, #000756 0.66%, #003CA7 100%)',
};

partnersTheme.orange = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#000756',
  combinedInputBackgroundColor: '#fff',
  buttonBackgroundDisabled: '#1b21257a',
  buttonsGroupButtonBackground: 'rgba(255, 255, 255, 0.17)',
  buttonsGroupButtonColor: '#fff',
  buttonsGroupButtonColorActive: '#1B2125',
  buttonsGroupButtonBackgroundActive: '#fff',
  buttonBackground: '#1B2125',
  buttonColor: '#fff',
  infoCirclesColor: '#1B2125',
  infoSymbolsColor: '#1B2125',
  infoFeesColor: 'rgba(255, 255, 255, 0.6)',
  infoFeesTitlesColor: '#fff',
  calcBackground: '#FF5C00',
};

partnersTheme.gradient = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#000756',
  combinedInputBackgroundColor: '#fff',
  buttonBackgroundDisabled: '#1b21257a',
  buttonsGroupButtonBackground: 'rgba(255, 255, 255, 0.17)',
  buttonsGroupButtonColor: '#fff',
  buttonsGroupButtonColorActive: '#1B2125',
  buttonsGroupButtonBackgroundActive: '#fff',
  buttonBackground: '#1B2125',
  buttonColor: '#fff',
  infoCirclesColor: '#1B2125',
  infoSymbolsColor: '#1B2125',
  infoFeesColor: 'rgba(255, 255, 255, 0.6)',
  infoFeesTitlesColor: '#fff',
  calcBackground: 'linear-gradient(90.2deg, #0E20EB 0.66%, #003CA7 100%)',
};

partnersTheme.green = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#000756',
  combinedInputBackgroundColor: '#fff',
  buttonBackgroundDisabled: '#1b21257a',
  buttonsGroupButtonBackground: 'rgba(255, 255, 255, 0.17)',
  buttonsGroupButtonColor: '#fff',
  buttonsGroupButtonColorActive: '#1B2125',
  buttonsGroupButtonBackgroundActive: '#fff',
  buttonBackground: '#1B2125',
  buttonColor: '#fff',
  infoCirclesColor: '#1B2125',
  infoSymbolsColor: '#1B2125',
  infoFeesColor: 'rgba(255, 255, 255, 0.6)',
  infoFeesTitlesColor: '#fff',
  calcBackground: 'rgba(0, 235, 178, 1)',
};

partnersTheme.bluee = {
  ...partnersTheme.guardarian,
  inputSelectBackground: '#000756',
  combinedInputBackgroundColor: '#fff',
  buttonBackgroundDisabled: '#00ebb269',
  buttonsGroupButtonBackground: 'rgba(255, 255, 255, 0.17)',
  buttonsGroupButtonColor: '#fff',
  buttonsGroupButtonColorActive: '#01268A',
  buttonsGroupButtonBackgroundActive: '#fff',
  buttonBackground: '#00EBB2',
  buttonColor: '#01268A',
  infoCirclesColor: '#5583FF',
  infoSymbolsColor: '#5583FF',
  infoFeesColor: 'rgba(255, 255, 255, 0.6)',
  infoFeesTitlesColor: '#fff',
  calcBackground: '#5583FF',
};
