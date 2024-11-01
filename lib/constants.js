export const services = [
  {
    slug: 'noodslotenmaker',
    title: 'Noodslotenmaker',
    description: '24/7 beschikbaar voor noodgevallen. Snelle en professionele hulp bij buitensluiting.',
    features: [
      'Binnen 30 minuten ter plaatse',
      'Deur openen zonder schade',
      'Sleutel afgebroken in slot',
      'Deur dichtgevallen',
      'Sleutel verloren',
      'Inbraakschade herstelling'
    ],
    icon: 'emergency'
  },
  {
    slug: 'sloten-vervangen',
    title: 'Sloten Vervangen',
    description: 'Professionele vervanging van alle soorten sloten voor optimale beveiliging.',
    features: [
      'Cilindersloten vervangen',
      'Veiligheidssloten installeren',
      'Meerpuntssluiting',
      'Elektronische sloten',
      'SKG gecertificeerde sloten',
      'Anti-kerntrek beveiliging'
    ],
    icon: 'lock'
  },
  {
    slug: 'inbraakbeveiliging',
    title: 'Inbraakbeveiliging',
    description: 'Expertise in het beveiligen van uw woning of bedrijfspand tegen inbraak.',
    features: [
      'Gratis beveiligingsadvies',
      'Anti-inbraakstrips',
      'Deurbeveiliging',
      'Raambeveiliging',
      'Camerasystemen',
      'Alarmsystemen'
    ],
    icon: 'shield'
  },
  {
    slug: 'auto-slotenmaker',
    title: 'Auto Slotenmaker',
    description: 'Specialistische hulp bij problemen met autosleutels en -sloten.',
    features: [
      'Autosleutel verloren',
      'Sleutel afgebroken',
      'Startonderbreker problemen',
      'Nieuwe autosleutel maken',
      'Transponder programmeren',
      'Keyless entry problemen'
    ],
    icon: 'car'
  },
  {
    slug: 'kluisservice',
    title: 'Kluisservice',
    description: 'Professionele dienstverlening voor alle soorten kluizen.',
    features: [
      'Kluis openen',
      'Kluisslot vervangen',
      'Nieuwe kluis installeren',
      'Kluiscode vergeten',
      'Elektronische kluizen',
      'Onderhoud kluizen'
    ],
    icon: 'safe'
  },
  {
    slug: 'smart-locks',
    title: 'Smart Locks',
    description: 'Installatie en onderhoud van slimme sloten voor moderne beveiliging.',
    features: [
      'Smart lock installatie',
      'App-gestuurde toegang',
      'Bluetooth sloten',
      'WiFi deursloten',
      'Toegangsbeheer systemen',
      'Smart home integratie'
    ],
    icon: 'smartphone'
  },
  {
    slug: 'bedrijfsbeveiliging',
    title: 'Bedrijfsbeveiliging',
    description: 'Specialistische beveiligingsoplossingen voor bedrijven en kantoren.',
    features: [
      'Toegangscontrolesystemen',
      'Masterkey systemen',
      'Nooduitgang beveiliging',
      'Industriële sloten',
      'Beveiligingsadvies',
      'Onderhoudscontracten'
    ],
    icon: 'building'
  },
  {
    slug: 'preventief-onderhoud',
    title: 'Preventief Onderhoud',
    description: 'Regelmatig onderhoud van sloten en beveiligingssystemen.',
    features: [
      'Jaarlijkse inspectie',
      'Slotencheck',
      'Smeren van sloten',
      'Veiligheidscheck',
      'Preventief vervangen',
      'Onderhoudsabonnement'
    ],
    icon: 'tools'
  },
  {
    slug: 'certificering',
    title: 'Certificering & Advies',
    description: 'Professioneel advies en certificering van uw beveiliging.',
    features: [
      'Politiekeurmerk',
      'Verzekeringscertificering',
      'Beveiligingsadvies',
      'Veiligheidskeuring',
      'Certificaat afgifte',
      'Risico-analyse'
    ],
    icon: 'certificate'
  }
];

export const mainCities = [
  {
    slug: 'gent',
    name: 'Gent',
    neighborhoods: ['Centrum', 'Ledeberg', 'Sint-Amandsberg', 'Wondelgem', 'Mariakerke', 'Drongen', 'Gentbrugge', 'Oostakker', 'Sint-Denijs-Westrem', 'Zwijnaarde'],
    response_time: '20-30 minuten'
  },
  {
    slug: 'aalst',
    name: 'Aalst',
    neighborhoods: ['Centrum', 'Erembodegem', 'Hofstade', 'Gijzegem', 'Baardegem', 'Herdersem', 'Meldert', 'Moorsel', 'Nieuwerkerken'],
    response_time: '20-30 minuten'
  },
  {
    slug: 'sint-niklaas',
    name: 'Sint-Niklaas',
    neighborhoods: ['Centrum', 'Belsele', 'Sinaai', 'Nieuwkerken-Waas', 'Puivelde', 'Clementwijk', 'De Ster'],
    response_time: '25-35 minuten'
  },
  // ... existing cities ...
  {
    slug: 'oudenaarde',
    name: 'Oudenaarde',
    neighborhoods: ['Centrum', 'Eine', 'Bevere', 'Ename', 'Leupegem', 'Mater', 'Nederename', 'Welden'],
    response_time: '30-40 minuten'
  },
  {
    slug: 'ronse',
    name: 'Ronse',
    neighborhoods: ['Centrum', 'Louise-Marie', 'Klijpe', 'Fiertel', 'Kruisstraat', 'Stookt'],
    response_time: '35-45 minuten'
  },
  {
    slug: 'deinze',
    name: 'Deinze',
    neighborhoods: ['Centrum', 'Astene', 'Petegem', 'Zeveren', 'Vinkt', 'Gottem', 'Meigem'],
    response_time: '25-35 minuten'
  },
  {
    slug: 'eeklo',
    name: 'Eeklo',
    neighborhoods: ['Centrum', 'Balgerhoeke', 'Oostveld', 'Sint-Jozef', 'Kerkestee'],
    response_time: '30-40 minuten'
  },
  {
    slug: 'maldegem',
    name: 'Maldegem',
    neighborhoods: ['Centrum', 'Adegem', 'Middelburg', 'Kleit', 'Donk'],
    response_time: '35-45 minuten'
  },
  {
    slug: 'evergem',
    name: 'Evergem',
    neighborhoods: ['Centrum', 'Belzele', 'Doornzele', 'Ertvelde', 'Kluizen', 'Sleidinge', 'Wippelgem'],
    response_time: '25-35 minuten'
  },
  {
    slug: 'merelbeke',
    name: 'Merelbeke',
    neighborhoods: ['Centrum', 'Flora', 'Bottelare', 'Lemberge', 'Melsen', 'Munte', 'Schelderode'],
    response_time: '25-35 minuten'
  },
  {
    slug: 'destelbergen',
    name: 'Destelbergen',
    neighborhoods: ['Centrum', 'Heusden', 'Beervelde', 'Bergenmeersen'],
    response_time: '25-35 minuten'
  },
  {
    slug: 'lochristi',
    name: 'Lochristi',
    neighborhoods: ['Centrum', 'Zaffelare', 'Zeveneken', 'Beervelde', 'Hyfte'],
    response_time: '25-35 minuten'
  },
  {
    slug: 'wachtebeke',
    name: 'Wachtebeke',
    neighborhoods: ['Centrum', 'Overslag', 'Sint-Kruis-Winkel', 'Warande'],
    response_time: '30-40 minuten'
  },
  {
    slug: 'moerbeke',
    name: 'Moerbeke',
    neighborhoods: ['Centrum', 'Koewacht', 'Kruisstraat', 'Terwest'],
    response_time: '30-40 minuten'
  },
  {
    slug: 'stekene',
    name: 'Stekene',
    neighborhoods: ['Centrum', 'Kemzeke', 'Klein-Sinaai', 'Hellestraat'],
    response_time: '30-40 minuten'
  }
  // ... Add more cities to reach 25+ total
];