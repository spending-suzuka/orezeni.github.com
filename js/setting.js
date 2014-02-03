/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'suzuka_kessan_2011';
OpenSpending.year = '2011';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* spending data party in nagoya 2013 winter で作成したフォーマットの普通会計（決算統計）用。以下のcolorは使われていないというウワサ */
  '1': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '1-1': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '2': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-2': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-3': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-4': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-5': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-6': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-7': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#0AB971' },
  '3': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-8': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-9': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-10': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-11': { icon: 'icons/social-system.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-12': { icon: 'icons/foreign-military-aid.svg', color: '#C75746', bcolor: '#4E6D00' },
  '4': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#D33673' },
  '4-13': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#D33673' },
  '4-14': { icon: 'icons/street-lights.svg', color: '#C75746', bcolor: '#D33673' },
  '4-15': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#D33673' },
  '4-16': { icon: 'icons/waste.svg', color: '#C75746', bcolor: '#D33673' },
  '5': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#2A3A03' },
  '5-17': { icon: 'icons/mics-services.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '5-18': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '6': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-19': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-20': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-21': { icon: 'icons/island.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-22': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-23': { icon: 'icons/fishing.svg', color: '#C75746', bcolor: '#EC2406' },
  '7': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },
  '7-24': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },
  '8': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '8-25': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#C75746' },
  '8-26': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '8-27': { icon: 'icons/water.svg', color: '#C75746', bcolor: '#C75746' },
  '8-28': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#C75746' },
  '8-29': { icon: 'icons/community.svg', color: '#C75746', bcolor: '#C75746' },
  '8-30': { icon: 'icons/street-lights.svg', color: '#C75746', bcolor: '#C75746' },
  '8-31': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#C75746' },
  '8-32': { icon: 'icons/toilet.svg', color: '#C75746', bcolor: '#C75746' },
  '8-33': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#C75746' },
  '8-34': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#C75746' },
  '8-35': { icon: 'icons/airplane.svg', color: '#C75746', bcolor: '#C75746' },
  '9': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#D33673' },
  '9-36': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#D33673' },
  '10': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '10-37': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '10-38': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#790586' },
  '10-39': { icon: 'icons/secondary-upper.svg', color: '#C75746', bcolor: '#790586' },
  '10-40': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '10-41': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#790586' },
  '10-42': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' },
  '10-43': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#790586' },
  '10-44': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#790586' },
  '10-45': { icon: 'icons/government-uk.svg', color: '#C75746', bcolor: '#790586' },
  '10-46': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#790586' },
  '10-47': { icon: 'icons/books.svg', color: '#C75746', bcolor: '#790586' },
  '11': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '11-48': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '12': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#790586' },
  '12-49': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#790586' },
  '13': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },
  '13-50': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },
  '13-51': { icon: 'icons/nuclear.svg', color: '#C75746', bcolor: '#790586' },
  '13-52': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#790586' },
  '14': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#790586' },
  '14-53': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#790586' }
};


