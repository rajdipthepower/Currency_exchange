const countryList = {
  AED: "AE", // United Arab Emirates
  AFN: "AF", // Afghanistan
  XCD: "AG", // Antigua and Barbuda
  ALL: "AL", // Albania
  AMD: "AM", // Armenia
  ANG: "AN", // Netherlands Antilles (defunct, replaced by multiple)
  AOA: "AO", // Angola
  ARS: "AR", // Argentina
  AUD: "AU", // Australia
  AZN: "AZ", // Azerbaijan
  BAM: "BA", // Bosnia and Herzegovina
  BBD: "BB", // Barbados
  BDT: "BD", // Bangladesh
  BGN: "BG", // Bulgaria
  BHD: "BH", // Bahrain
  BIF: "BI", // Burundi
  BMD: "BM", // Bermuda
  BND: "BN", // Brunei Darussalam
  BOB: "BO", // Bolivia
  BRL: "BR", // Brazil
  BSD: "BS", // Bahamas
  BWP: "BW", // Botswana
  BYN: "BY", // Belarus (new ruble)
  BZD: "BZ", // Belize
  CAD: "CA", // Canada
  CDF: "CD", // Congo (Democratic Republic)
  XAF: "CF", // Central African CFA franc (Central African Republic etc.)
  CHF: "CH", // Switzerland
  CLP: "CL", // Chile
  CNY: "CN", // China
  COP: "CO", // Colombia
  CRC: "CR", // Costa Rica
  CUP: "CU", // Cuba
  CVE: "CV", // Cabo Verde
  CZK: "CZ", // Czechia
  DJF: "DJ", // Djibouti
  DKK: "DK", // Denmark
  DOP: "DO", // Dominican Republic
  DZD: "DZ", // Algeria
  EGP: "EG", // Egypt
  ETB: "ET", // Ethiopia
  EUR: "EU", // Eurozone (France, Germany, etc.)
  FJD: "FJ", // Fiji
  FKP: "FK", // Falkland Islands
  GBP: "GB", // United Kingdom
  GEL: "GE", // Georgia
  GHS: "GH", // Ghana
  GIP: "GI", // Gibraltar
  GMD: "GM", // Gambia
  GNF: "GN", // Guinea
  GTQ: "GT", // Guatemala
  GYD: "GY", // Guyana
  HKD: "HK", // Hong Kong
  HNL: "HN", // Honduras
  HRK: "HR", // Croatia
  HTG: "HT", // Haiti
  HUF: "HU", // Hungary
  IDR: "ID", // Indonesia
  ILS: "IL", // Israel
  INR: "IN", // India
  IQD: "IQ", // Iraq
  IRR: "IR", // Iran
  ISK: "IS", // Iceland
  JMD: "JM", // Jamaica
  JOD: "JO", // Jordan
  JPY: "JP", // Japan
  KES: "KE", // Kenya
  KGS: "KG", // Kyrgyzstan
  KHR: "KH", // Cambodia
  KMF: "KM", // Comoros
  KPW: "KP", // North Korea
  KRW: "KR", // South Korea
  KWD: "KW", // Kuwait
  KYD: "KY", // Cayman Islands
  KZT: "KZ", // Kazakhstan
  LAK: "LA", // Laos
  LBP: "LB", // Lebanon
  LKR: "LK", // Sri Lanka
  LRD: "LR", // Liberia
  LSL: "LS", // Lesotho
  LYD: "LY", // Libya
  MAD: "MA", // Morocco
  MDL: "MD", // Moldova
  MGA: "MG", // Madagascar
  MKD: "MK", // North Macedonia
  MMK: "MM", // Myanmar
  MNT: "MN", // Mongolia
  MOP: "MO", // Macao
  MRU: "MR", // Mauritania
  MUR: "MU", // Mauritius
  MVR: "MV", // Maldives
  MWK: "MW", // Malawi
  MXN: "MX", // Mexico
  MYR: "MY", // Malaysia
  MZN: "MZ", // Mozambique
  NAD: "NA", // Namibia
  NGN: "NG", // Nigeria
  NIO: "NI", // Nicaragua
  NPR: "NP", // Nepal
  NZD: "NZ", // New Zealand
  OMR: "OM", // Oman
  PAB: "PA", // Panama
  PEN: "PE", // Peru
  PGK: "PG", // Papua New Guinea
  PHP: "PH", // Philippines
  PKR: "PK", // Pakistan
  PLN: "PL", // Poland
  PYG: "PY", // Paraguay
  QAR: "QA", // Qatar
  RON: "RO", // Romania
  RSD: "RS", // Serbia
  RUB: "RU", // Russia
  RWF: "RW", // Rwanda
  SAR: "SA", // Saudi Arabia
  SBD: "SB", // Solomon Islands
  SCR: "SC", // Seychelles
  SDG: "SD", // Sudan
  SEK: "SE", // Sweden
  SGD: "SG", // Singapore
  SLL: "SL", // Sierra Leone
  SOS: "SO", // Somalia
  SRD: "SR", // Suriname
  STN: "ST", // São Tomé and Príncipe (new)
  SVC: "SV", // El Salvador
  SYP: "SY", // Syria
  SZL: "SZ", // Eswatini
  THB: "TH", // Thailand
  TJS: "TJ", // Tajikistan
  TMT: "TM", // Turkmenistan
  TND: "TN", // Tunisia
  TOP: "TO", // Tonga
  TRY: "TR", // Türkiye
  TTD: "TT", // Trinidad and Tobago
  TWD: "TW", // Taiwan
  TZS: "TZ", // Tanzania
  UAH: "UA", // Ukraine
  UGX: "UG", // Uganda
  USD: "US", // United States
  UYU: "UY", // Uruguay
  UZS: "UZ", // Uzbekistan
  VEF: "VE", // Venezuela (replaced, now VES)
  VES: "VE", // Venezuela Bolívar Soberano (current)
  VND: "VN", // Vietnam
  VUV: "VU", // Vanuatu
  YER: "YE", // Yemen
  ZAR: "ZA", // South Africa
  ZMW: "ZM", // Zambia
  ZWL: "ZW"  // Zimbabwe (reintroduced)
};

const countryNames = {
  "Afghanistan": "AF",
  "Albania": "AL",
  "Algeria": "DZ",
  "Andorra": "AD",
  "Angola": "AO",
  "Antigua and Barbuda": "AG",
  "Argentina": "AR",
  "Armenia": "AM",
  "Australia": "AU",
  "Austria": "AT",
  "Azerbaijan": "AZ",
  "Bahamas": "BS",
  "Bahrain": "BH",
  "Bangladesh": "BD",
  "Barbados": "BB",
  "Belarus": "BY",
  "Belgium": "BE",
  "Belize": "BZ",
  "Benin": "BJ",
  "Bhutan": "BT",
  "Bolivia": "BO",
  "Bosnia and Herzegovina": "BA",
  "Botswana": "BW",
  "Brazil": "BR",
  "Brunei Darussalam": "BN",
  "Bulgaria": "BG",
  "Burkina Faso": "BF",
  "Burundi": "BI",
  "Cabo Verde": "CV",
  "Cambodia": "KH",
  "Cameroon": "CM",
  "Canada": "CA",
  "Central African Republic": "CF",
  "Chad": "TD",
  "Chile": "CL",
  "China": "CN",
  "Colombia": "CO",
  "Comoros": "KM",
  "Congo": "CG",
  "Congo (Democratic Republic)": "CD",
  "Costa Rica": "CR",
  "Croatia": "HR",
  "Cuba": "CU",
  "Cyprus": "CY",
  "Czechia": "CZ",
  "Denmark": "DK",
  "Djibouti": "DJ",
  "Dominica": "DM",
  "Dominican Republic": "DO",
  "Ecuador": "EC",
  "Egypt": "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  "Eritrea": "ER",
  "Estonia": "EE",
  "Eswatini": "SZ",
  "Ethiopia": "ET",
  "Fiji": "FJ",
  "Finland": "FI",
  "France": "FR",
  "Gabon": "GA",
  "Gambia": "GM",
  "Georgia": "GE",
  "Germany": "DE",
  "Ghana": "GH",
  "Greece": "GR",
  "Grenada": "GD",
  "Guatemala": "GT",
  "Guinea": "GN",
  "Guinea-Bissau": "GW",
  "Guyana": "GY",
  "Haiti": "HT",
  "Honduras": "HN",
  "Hungary": "HU",
  "Iceland": "IS",
  "India": "IN",
  "Indonesia": "ID",
  "Iran": "IR",
  "Iraq": "IQ",
  "Ireland": "IE",
  "Israel": "IL",
  "Italy": "IT",
  "Jamaica": "JM",
  "Japan": "JP",
  "Jordan": "JO",
  "Kazakhstan": "KZ",
  "Kenya": "KE",
  "Kiribati": "KI",
  "Kuwait": "KW",
  "Kyrgyzstan": "KG",
  "Laos": "LA",
  "Latvia": "LV",
  "Lebanon": "LB",
  "Lesotho": "LS",
  "Liberia": "LR",
  "Libya": "LY",
  "Liechtenstein": "LI",
  "Lithuania": "LT",
  "Luxembourg": "LU",
  "Madagascar": "MG",
  "Malawi": "MW",
  "Malaysia": "MY",
  "Maldives": "MV",
  "Mali": "ML",
  "Malta": "MT",
  "Marshall Islands": "MH",
  "Mauritania": "MR",
  "Mauritius": "MU",
  "Mexico": "MX",
  "Micronesia": "FM",
  "Moldova": "MD",
  "Monaco": "MC",
  "Mongolia": "MN",
  "Montenegro": "ME",
  "Morocco": "MA",
  "Mozambique": "MZ",
  "Myanmar": "MM",
  "Namibia": "NA",
  "Nauru": "NR",
  "Nepal": "NP",
  "Netherlands": "NL",
  "New Zealand": "NZ",
  "Nicaragua": "NI",
  "Niger": "NE",
  "Nigeria": "NG",
  "North Korea": "KP",
  "North Macedonia": "MK",
  "Norway": "NO",
  "Oman": "OM",
  "Pakistan": "PK",
  "Palau": "PW",
  "Palestine": "PS",
  "Panama": "PA",
  "Papua New Guinea": "PG",
  "Paraguay": "PY",
  "Peru": "PE",
  "Philippines": "PH",
  "Poland": "PL",
  "Portugal": "PT",
  "Qatar": "QA",
  "Romania": "RO",
  "Russia": "RU",
  "Rwanda": "RW",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  "Samoa": "WS",
  "San Marino": "SM",
  "Saudi Arabia": "SA",
  "Senegal": "SN",
  "Serbia": "RS",
  "Seychelles": "SC",
  "Sierra Leone": "SL",
  "Singapore": "SG",
  "Slovakia": "SK",
  "Slovenia": "SI",
  "Solomon Islands": "SB",
  "Somalia": "SO",
  "South Africa": "ZA",
  "South Korea": "KR",
  "South Sudan": "SS",
  "Spain": "ES",
  "Sri Lanka": "LK",
  "Sudan": "SD",
  "Suriname": "SR",
  "Sweden": "SE",
  "Switzerland": "CH",
  "Syria": "SY",
  "Tajikistan": "TJ",
  "Tanzania": "TZ",
  "Thailand": "TH",
  "Timor-Leste": "TL",
  "Togo": "TG",
  "Tonga": "TO",
  "Trinidad and Tobago": "TT",
  "Tunisia": "TN",
  "Türkiye": "TR",
  "Turkmenistan": "TM",
  "Tuvalu": "TV",
  "Uganda": "UG",
  "Ukraine": "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  "Uruguay": "UY",
  "Uzbekistan": "UZ",
  "Vanuatu": "VU",
  "Vatican City": "VA",
  "Venezuela": "VE",
  "Vietnam": "VN",
  "Yemen": "YE",
  "Zambia": "ZM",
  "Zimbabwe": "ZW"
};
