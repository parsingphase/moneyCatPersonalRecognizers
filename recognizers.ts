import { Category, Recognizer } from "../../types";

const recognizers: Recognizer[] = [
  {
    category: Category.SALARY,
    vendor: "Embark",
    pattern: "166785 EMBARK VE DES:DIR",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "1Password",
    pattern: "1PASSWORD* ",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "7 Seas Whale Watch",
    pattern: /7 SEAS WHALE WATCH/,
  },
  {
    category: Category.CHARITY,
    vendor: "AAAS",
    pattern: "AAAS SCIENCE ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Abode",
    pattern: "ABODE ",
  },
  {
    category: Category.TRANSFER,
    vendor: null,
    pattern: "ACH DEPOSIT ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Ace Hardware",
    pattern: "ACE HARDWARE CORPORATI",
  },
  {
    category: Category.CHARITY,
    vendor: "ACLU",
    pattern: "ACLU 212-549-2543 NYACLU",
  },
  {
    category: Category.CHARITY,
    vendor: "Act Blue",
    pattern: "ACTBLUE_",
  },
  {
    category: Category.HOBBIES,
    vendor: "Adobe",
    pattern: "ADOBE ",
  },
  {
    category: Category.TRAVEL,
    vendor: "AG Travel Plazas",
    pattern: "AG TRAVEL PLAZA ",
  },
  {
    category: Category.INSURANCE,
    vendor: "AGI",
    pattern: "AGI*RENTERS/CONDO INS 800-370-1990 FL",
  },
  {
    category: Category.GROCERIES,
    vendor: "ALDI",
    pattern: "ALDI 73146 DANVERS MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.TRAVEL,
    vendor: "Allianz",
    pattern: "ALLIANZ TRAVEL INS 800-628-5404 VA",
  },
  {
    category: Category.HOBBIES,
    vendor: "All3DP",
    pattern: "ALL3DP.COM ",
  },
  {
    category: Category.AMAZON,
    vendor: "Amazon",
    pattern: "AMAZON PRIME",
  },
  {
    category: Category.AMAZON,
    vendor: "Amazon",
    pattern: "AMAZON.COM",
  },
  {
    category: Category.TRAVEL,
    vendor: "American Airlines",
    pattern: "AMERICAN AIRLINES ",
  },
  {
    category: Category.TRAVEL,
    vendor: "American Airlines",
    pattern: "AMERICANAIR",
  },
  {
    category: Category.CHARITY,
    vendor: "American Bird Conservancy",
    pattern: "AMERICAN BIRD CONSERVAPO BOX 249 540-2535780 20115 VA USA",
  },
  {
    category: Category.BANK_FEES,
    vendor: "American Express",
    pattern: "AMERICANEXPRESS DES:ACCTVERIFY ",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Amazon",
    pattern: "AMZN DIGITAL",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Apple",
    pattern: "APPLE.COM/BILL ",
  },
  {
    category: Category.ELECTRONICS,
    vendor: "Apple",
    pattern: "APPLE.COM/US ",
  },
  {
    category: Category.ELECTRONICS,
    vendor: "Apple",
    pattern: "APPLE STORE #",
  },
  {
    category: Category.DINING,
    vendor: "Applebees",
    pattern: "APPLEBEES ",
  },
  {
    category: Category.DINING,
    vendor: "Arbys",
    pattern: "ARBYS ",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "The Trustees of Reservations",
    pattern: "AT* TRUSTEES RESV 200 HIGH STREET, 4TH FLOOR BOSTON 02110 MA USA",
  },
  {
    category: Category.CAR,
    vendor: "Autozone",
    pattern: "AUTOZONE ",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: null,
    pattern: "AUTOMATIC PAYMENT - THANK YOU",
  },
  {
    category: Category.TRANSFER,
    vendor: "American Express",
    pattern: "AMERICAN EXPRESS DES:TRANSFER ",
  },
  {
    category: Category.AMAZON,
    vendor: "Amazon",
    pattern: "AMZN MKTP ",
  },
  {
    category: Category.AMAZON,
    vendor: "Amazon",
    pattern: "AMZNMktplace ",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "AppleCard",
    pattern: "APPLECARD GSBANK DES:PAYMENT ",
  },
  {
    category: Category.AMAZON,
    vendor: "Amazon",
    pattern: "Amazon Prime",
  },
  {
    category: Category.HOBBIES,
    vendor: "AWS",
    pattern: "Amazon web services",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Backblaze",
    pattern: /BACKBLAZE.COM .* PURCHASE HTTPSWWW.BACK CA/,
  },
  {
    category: Category.MEDIA,
    vendor: "Barnes & Noble",
    pattern: "BARNES & NOBLE ",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Beacon Hill Wine & Gourmet",
    pattern: "BEACON HILL WINE ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Bed Bath & Beyond",
    pattern: "BED BATH & BEYOND #810119 MIDDLESEX AVENUE SOMERVILLE 02145 MA USA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Best Buy",
    pattern: "BEST BUY MHT ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Best Buy",
    pattern: "BESTBUY.COM ",
  },
  {
    category: Category.CASH,
    vendor: "BofA",
    pattern: "BKOFAMERICA ATM ",
  },
  {
    category: Category.CASH,
    vendor: "BofA",
    pattern: "BKOFAMERICA BC ",
  },
  {
    category: Category.DEPOSIT,
    vendor: "BofA",
    pattern: /BKOFAMERICA MOBILE .* DEPOSIT/,
  },
  {
    category: Category.BANK_FEES,
    vendor: "BofA",
    pattern: "Bank of America DES:CASHREWARD ",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "BofA",
    pattern: "BANK OF AMERICA CREDIT CARD Bill Payment",
  },
  {
    category: Category.MEDIA,
    vendor: "Boston Globe",
    pattern: "BOSTON GLOBE SUBSCRPT",
  },
  {
    category: Category.HOBBIES,
    vendor: "Brookline Bird Club",
    pattern: "BROOKLINE *",
  },
  {
    category: Category.HOBBIES,
    vendor: "B&H Photo",
    pattern: "B&H PHOTO",
  },
  {
    category: Category.DINING,
    vendor: "Shoyu",
    pattern: "BM * SHOYU RESTAURANT 115 PERIMETER CENTER PLACESTE 1025 ATLANTA 30346 GA USA",
  },
  {
    category: Category.CAR,
    vendor: "Bonnell Ford",
    pattern: "BONNELL FORD 353 CAMBRIDGE ST WINCHESTER 01890 MA USA",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "British Stores",
    pattern: "BRITISH STORES LTD ",
  },
  {
    category: Category.MEDIA,
    vendor: "BWD Magazine",
    pattern: "BWD MAGAZINE 8122418995 IN",
  },
  {
    category: Category.PERSONAL_CARE,
    vendor: "The Body Shop",
    pattern: "Buth-Na-Bodhaige",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Capital One",
    pattern: "CAPITAL ONE DES:CRCARDPMT ",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Capital One",
    pattern: "CAPITAL ONE DES:MOBILE PMT ",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Capital One",
    pattern: "CAPITAL ONE DES:ONLINE ",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Capital One",
    pattern: "CAPITAL ONE AUTOPAY PYMT",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Capital One",
    pattern: "CAPITAL ONE MOBILE PYMT",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Capital One",
    pattern: "CAPITAL ONE ONLINE PYMT",
  },
  {
    category: Category.CAR,
    vendor: "Circle K",
    pattern: "CIRCLE K ",
  },
  {
    category: Category.DINING,
    vendor: "City Works",
    pattern: "CITY WORKS WATERTOWN 91 ARSENAL YARDS BLVD WATERTOWN 02472 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Caffe Nero",
    pattern: /Caffe Nero /,
  },
  {
    category: Category.TAX,
    vendor: "MA",
    pattern:
      "COMM. OF MASS. DES:MASTTAXRFD ID:XXXXX9218 INDN:GEORGE, EVA & RICHARD CO ID:EXXXXX2284 PPD",
  },
  {
    category: Category.GROCERIES,
    vendor: "Common Market",
    pattern: "COMMON MARKET ",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Comenity",
    pattern: "COMN CAP APY F1 ",
  },
  {
    category: Category.CAR,
    vendor: "Toyota",
    pattern: /CONNECTED SERVICES .* TX/,
  },
  {
    category: Category.HOBBIES,
    vendor: "Cults3D",
    pattern: "CULTS3D.COM",
  },
  {
    category: Category.MEDIA,
    vendor: "CuriosityStream",
    pattern: "CURIOSITYSTREAM SILVER SPRINGMD",
  },
  {
    category: Category.PERSONAL_CARE,
    vendor: "CVS",
    pattern: "CVS/PHARM",
  },
  {
    category: Category.DINING,
    vendor: "Caffe Nero",
    pattern: "Caffe Nero ",
  },
  {
    category: Category.CHECK,
    vendor: null,
    pattern: /Check \d+/,
  },
  {
    category: Category.DINING,
    vendor: "Chipotle",
    pattern: "CHIPOTLE ONLINE",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "City Experiences",
    pattern: "CITY EXPERIENCES BHC 1 LONG WHARF 877-733-9425 02110 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Crumbl",
    pattern: "CF* CRUMBL WOBURN 2570 W 600 N LINDON 84042 UT USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Patreon",
    pattern: /CKO.*Patreon/,
  },
  {
    category: Category.COMMUNICATIONS,
    vendor: "Comcast",
    pattern: "COMCAST CABLE COMM",
  },
  {
    category: Category.MEDIA,
    vendor: "Copper Dog Books",
    pattern: "COPPER DOG BOOKS BEVERLY MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.TRAVEL,
    vendor: "County Fair",
    pattern: "COUNTRY FAIR #78 10358 BENNETT RD FREDONIA 14063 NY USA",
  },
  {
    category: null,
    vendor: null,
    pattern: "Customer Withdrawal Image",
  },
  {
    category: Category.GROCERIES,
    vendor: "D'Agostino's",
    pattern: "D'AGOSTINO'S FOODS ARLINGTON",
  },
  {
    category: Category.MISC,
    vendor: "AppleCard",
    pattern: "DAILY CASH ADJUSTMENT",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Discover",
    pattern: "DIRECTPAY FULL BALANCESEE DETAILS OF YOUR NEXT DIRECTPAY BELOW",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Discover",
    pattern: "DIRECTPAY MINIMUM PLUS PAYMENT",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Discover",
    pattern: "DISCOVER DES:E-PAYMENT ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "DIY Direct Supply",
    pattern: "DIY DIRECT SUPPLY 2501 26TH AVE S. MINNEAPOLIS 55406 MN USA",
  },
  {
    category: Category.GARDEN,
    vendor: "Do My Own",
    pattern: "DO MY OWN 866-581-7378 CA",
  },
  {
    category: Category.DINING,
    vendor: "Domino's",
    pattern: "DOMINO'S ",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Downtown Wine And Spirits",
    pattern: "DOWNTOWN WINE AND SPIRIT SOMERVILLE MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.CLOTHING,
    vendor: "Duluth Trading",
    pattern: "DULUTH TRADING BURLING112 BURLINGTON MALL RD BURLINGTON 01803 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Dunkin",
    pattern: "DUNKIN ",
  },
  {
    category: Category.CLOTHING,
    vendor: "Dicks Sporting Goods",
    pattern: "Dicks Sporting Goods ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Earth Breeze",
    pattern: "EARTH BREEZE INC",
  },
  {
    category: Category.GROCERIES,
    vendor: "Earth Breeze",
    pattern: "EARTHBREEZE.COM ",
  },

  {
    category: Category.LUXURY_FOOD,
    vendor: "Eataly",
    pattern: "EATALY NET USA LLC 43 W 23 ST, 7 FL NEW YORK 10010 NY USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "The Chocolate Expo",
    pattern: "EB THE CHOCOLATE EXPO 535 MISSION STREET 8014137200 94105 CA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Eastern Mountain Sports",
    pattern: "EMS.COM MERIDEN CT",
  },
  {
    category: Category.CAR,
    vendor: "Enterprise Rent-A-Car",
    pattern: "ENTERPRISE RENT-A-CAR 25 RIVER STREET CAMBRIDGE 02139 MA USA",
  },
  {
    category: Category.CAR,
    vendor: "Enterprise Rent-A-Car: Tolls",
    pattern: "ERAC TOLL ",
  },
  {
    category: Category.CAR,
    vendor: "E-ZPass",
    pattern: "E-ZPass MA ",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Evernote",
    pattern: /Evernote .* PURCHASE /,
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Experian",
    pattern: /EXPERIAN.* CREDIT REPOR/,
  },
  {
    category: Category.CAR,
    vendor: "Exxon Mobil",
    pattern: "EXXON",
  },
  {
    category: Category.TRAVEL,
    vendor: "Fairfield Inn",
    pattern: "FAIRFIELD INN & SUITES UTICA NY",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Fastmail",
    pattern: "Fastmail Pty Ltd Melbourne",
  },
  {
    category: Category.DINING,
    vendor: "Fuddruckers",
    pattern: "FUDDRUCKERS ",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Gandi",
    pattern: "GANDI NET STRASSEN",
  },
  {
    category: Category.CLOTHING,
    vendor: "Gap",
    pattern: "GAP US 1492 900 MARKET STREET LYNNFIELD 01940 MA USA",
  },
  {
    category: Category.CHARITY,
    vendor: "GBFB",
    pattern: "GBFB.ORG",
  },
  {
    category: Category.INSURANCE,
    vendor: "GEICO",
    pattern: /GEICO .*AUTO /,
  },
  {
    category: Category.HEALTH,
    vendor: "Gentle Dental",
    pattern: "GENTLE DENTAL CAMBRIDGE CAMBRIDGE MA",
  },
  {
    category: Category.CHARITY,
    vendor: "GoFundMe",
    pattern: "GFM*",
  },
  {
    category: Category.MEDIA,
    vendor: "Boston Globe",
    pattern: "GNC*BOSTON GLOBE SUBS 888-694-5623 MA",
  },
  {
    category: Category.MORTGAGE,
    vendor: "Guild",
    pattern: "GUILD MORTGAGE DES:MTG-PAYMNT ",
  },
  {
    category: Category.CAR,
    vendor: "Gulf",
    pattern: /GULF OIL .* PURCHASE /,
  },
  {
    category: Category.HOBBIES,
    vendor: "Garmin",
    pattern: "Garmin",
  },
  {
    category: Category.CAR,
    vendor: "GasBuddy",
    pattern: "GasBuddy DES:GasBuddy ",
  },
  {
    category: Category.DINING,
    vendor: "GrubHub",
    pattern: "GRUBHUB",
  },
  {
    category: Category.HOBBIES,
    vendor: "Haikubox",
    pattern: "HAIKUBOX ",
  },
  {
    category: Category.HEALTH,
    vendor: "HD Physical Therapy",
    pattern: "HD PHYSICAL THERAPY LL607 NORTH AVE #16 WAKEFIELD 01880 MA USA",
  },
  {
    category: Category.CAR,
    vendor: "Harbor Garage",
    pattern: "HARBOR GARAGE",
  },
  {
    category: Category.UTILITIES,
    vendor: "Superior Propane",
    pattern: "HOLDEN OIL INC. ",
  },
  {
    category: Category.TRAVEL,
    vendor: "Holiday Inn",
    pattern: "HOLIDAY INN ",
  },
  {
    category: Category.HOME_MAINTENANCE,
    vendor: "American Home Shield",
    pattern: "HOME* AHS.COM MEMPHIS TN",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "The Honeybaked Ham Company",
    pattern: "HONEYBAKED HAM ",
  },
  {
    category: Category.DINING,
    vendor: "Hopothecary",
    pattern: /HOPOTHECARY/,
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "HP",
    pattern: "HP *INSTANT INK ",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Hulu",
    pattern: /HLU.*HULU /,
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Hulu",
    pattern: "HULU 877-8244858 CA",
  },
  {
    category: Category.TRANSFER,
    vendor: "Citibank",
    pattern: "IIT CITIBANK DES:CITIXFR ",
  },
  {
    category: Category.BANK_FEES,
    vendor: null,
    pattern: "INTEREST CHARGE",
  },
  {
    category: Category.HOBBIES,
    vendor: "inventr.io",
    pattern: "INVENTR.IO ",
  },
  {
    category: Category.TAX,
    vendor: "IRS",
    pattern: "IRS TREAS 310 DES: TAX REF ",
  },
  {
    category: Category.HOBBIES,
    vendor: "JetBrains",
    pattern: "JETBRAINS AMERICAS INC1900 SOUTH NORFOLK, SUITE 350 SAN MATEO 94403 CA USA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Jordan's Furniture",
    pattern: "JORDANS FURNITURE ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Kikis Kwik Mart",
    pattern: "KIKIS KWIK MART ",
  },
  {
    category: Category.MEDIA,
    vendor: "Amazon (Kindle)",
    pattern: "KINDLE SVCS",
  },
  {
    category: Category.DINING,
    vendor: "Kipo's",
    pattern: "KIPO`S ROAST BEEF 117 WATER ST WAKEFIELD 01880 MA USA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Ace Hardware",
    pattern: "L R HART HDWE INC ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Lowes",
    pattern: "LOWES ",
  },
  {
    category: Category.CAR,
    vendor: "Massport Logan Parking",
    pattern: "LOGAN PKG ",
  },
  {
    category: Category.HOBBIES,
    vendor: "MakerBox",
    pattern: "MAKERBOX",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Native Plant Trust",
    pattern: "LS NATIVE PLANT TRUST ",
  },
  {
    category: Category.DINING,
    vendor: "Legal Sea Foods",
    pattern: "LSF LONG WHARF 255 STATE STREET BOSTON 02109 MA USA",
  },
  {
    category: Category.GARDEN,
    vendor: "Mahoneys",
    pattern: "MAHONEYS ROCKY LEDGE 242 CAMBRIDGE ST WINCHESTER 01890 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Maki Maki",
    pattern: "MAKI MAKI JAPANESE ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Market Basket",
    pattern: "MARKET BASK",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Mass Audubon",
    pattern: "MASS AUDUBON",
  },
  {
    category: Category.DINING,
    vendor: "McDonald's",
    pattern: "MCDONALD'S ",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "McDonoughs Liquors",
    pattern: "MCDONOUGHS LIQUORS ",
  },
  {
    category: Category.HOBBIES,
    vendor: "Michaels",
    pattern: "MICHAELS STORES ",
  },
  {
    category: Category.HOBBIES,
    vendor: "Micro Center",
    pattern: "MICRO CENTER ",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Microsoft",
    pattern: "MICROSOFT*SUBSCRIPTION MSBILL.INFO WA",
  },
  {
    category: Category.DINING,
    vendor: "Minglewood Harborside",
    pattern: "MINGLEWOOD HARBORSIDE ",
  },
  {
    category: Category.ELECTRONICS, // iPhone?
    vendor: "Apple",
    pattern: /MONTHLY INSTALLMENTS \(\d+ OF 24\)/,
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Flickr",
    pattern: "FLICKR.COM MOUNTAIN VIEWCA",
  },
  {
    category: Category.BANK_FEES,
    vendor: null,
    pattern: "FOREIGN TRANSACTION FEE",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Masto.host",
    pattern: /FS .*MASTO.HOST/,
  },
  {
    category: Category.TRANSFER,
    vendor: "Monzo",
    pattern: "MONZO DES:FROM MONZO ",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Naked Wines",
    pattern: "NAKEDWINES.COM ",
  },
  {
    category: Category.CHARITY,
    vendor: "National Audubon Society",
    pattern: "NATIONAL AUDUBON SOCIE 212-9793000 NY",
  },
  {
    category: Category.MISC,
    vendor: null,
    pattern: "NAYAX VENDING 45 11350 MCCORMICK RD HUNT VALLEY 21031 MD USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "NEAQ",
    pattern: "NEW ENG AQUARIUM ",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "NEAQ",
    pattern: "NEW ENGLAND AQUARIUM ",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "NESN",
    pattern: "NEW ENGLAND SPORTS NET",
  },
  {
    category: Category.DINING,
    vendor: "New York Lunch",
    pattern: "NEW YORK LUNCH",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "NordicTrack",
    pattern: "NORDICTRACK 8336804348",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "North Woburn Liquors",
    pattern: "NORTH WOBURN LIQUORS WOBURN MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.CAR,
    vendor: "One Kendall Parking",
    pattern: "ONE KENDALL PARKING 389 BINNEY ST CAMBRIDGE 02139 MA USA",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Wirecutter",
    pattern: "NYTimes*NYTimes 800-698-4637 NY",
  },
  {
    category: Category.TRANSFER,
    vendor: null,
    pattern: "Online Banking transfer ",
  },
  {
    category: Category.TRANSFER,
    vendor: null,
    pattern: "Online scheduled transfer ",
  },
  {
    category: Category.DINING,
    vendor: "Panera",
    pattern: "PANERA BREAD ",
  },
  {
    category: Category.HOBBIES,
    vendor: "Partsbuilt 3D",
    pattern: "PARTSBUILT ",
  },
  {
    category: Category.SALARY,
    vendor: "Embark",
    pattern: "PAYLOCITY DES:ACCTVERIFY ",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: null,
    pattern: "PAYMENT - THANK YOU",
  },
  {
    category: Category.TRANSFER,
    vendor: "PayPal",
    pattern: /PAYPAL .*George /,
  },
  {
    category: Category.GROCERIES,
    vendor: "Pemberton",
    pattern: "PEMBERTON FARM",
  },
  {
    category: Category.CAR,
    vendor: "Prestige Car Wash",
    pattern: "PRESTIEGE DRB HUB CAR W ",
  },
  {
    category: Category.CAR,
    vendor: "Prestige Car Wash",
    pattern: "PRESTIGE DRB SOMERVILLE ",
  },
  {
    category: Category.MEDIA,
    vendor: "Amazon",
    pattern: "PRIME VIDEO ",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Patreon",
    pattern: "Patreon* Membership",
  },
  {
    category: Category.RENT,
    vendor: "Walden Park",
    pattern: "PRT*WALDEN PARK ",
  },
  {
    category: Category.HOBBIES,
    vendor: "Prusa Research",
    pattern: "Prusa Research",
  },
  {
    category: Category.DINING,
    vendor: "Public Kitchen",
    pattern: "PUBLIC KITCHEN ",
  },
  {
    category: Category.HOBBIES,
    vendor: "ABA",
    pattern: "PY *AMERICAN BIRDING A93 CLINTON STREET 800-8502473 19706 DE USA",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Karl's Sausage Kitchen",
    pattern: "PY *KARLS SAUSAGE KITC1 BOURBON ST PEABODY 01960 MA USA",
  },
  {
    category: Category.CLOTHING,
    vendor: "REI",
    pattern: "REI #26 READING",
  },
  {
    category: Category.CAR,
    vendor: "RMV",
    pattern: /RMV DANVERS 10 .* PURCHASE DANVERS MA/,
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Russell Orchards",
    pattern: "RUSSELL ORCHARDS ",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "S&M Liquor",
    pattern: "S&M LIQUOR ",
  },
  {
    category: Category.DINING,
    vendor: "Sakura",
    pattern: "SAKURA ORGANIC WAKEFIELD MA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Sleep Number",
    pattern: "SELECT COMFORT 10000 800-472-7185 MN0000596821",
  },
  {
    category: Category.DINING,
    vendor: "Shake Shack",
    pattern: "SHAKE SHACK ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Shaws",
    pattern: "SHAWS ",
  },
  {
    category: Category.CAR,
    vendor: "Shell Oil",
    pattern: "SHELL OIL ",
  },
  {
    category: Category.CHARITY,
    vendor: "Sierra Club",
    pattern: "SIERRA CLUB ",
  },
  {
    category: Category.HOBBIES,
    vendor: "Smashrun",
    pattern: "SMASHRUN----PROMEMBER 9173103858 NY",
  },

  {
    category: Category.DINING,
    vendor: "Soup Shack",
    pattern: "SOUP SHACK PORTER SQUA9 WHITE ST CAMBRIDGE 02140 MA USA",
  },
  {
    category: Category.MISC,
    vendor: "Bellzi",
    pattern: "SP BELLZI.COM CHINO CA",
  },
  {
    category: Category.CLOTHING,
    vendor: "Bird Collective",
    pattern: "SP BIRD COLLECTIVE BROOKLYN NY",
  },
  {
    category: Category.ELECTRONICS,
    vendor: "Ember",
    pattern: "SP EMBER-US WESTLAKE VILLCA",
  },
  {
    category: Category.ELECTRONICS,
    vendor: "Eufy",
    pattern: "SP EUFY US BELLEVUE WA",
  },
  {
    category: Category.MEDIA,
    vendor: "False Knees",
    pattern: "SP FALSE KNEES STORE GUELPH ON",
  },
  {
    category: Category.HOBBIES,
    vendor: "GL Robotics",
    pattern: "SP GL ROBOTICS DOTHAN AL",
  },
  {
    category: Category.HOBBIES,
    vendor: "Mintion",
    pattern: "SP HK MINTION KOWLOON KL",
  },
  {
    category: Category.HOME_HARDWARE, // magnets?
    vendor: "Kat Maus Haus",
    pattern: "SP KAT MAUS HAUS ILL 36 LARCH STREET BRIGHTON 02135 MA USA",
  },
  {
    category: Category.GROCERIES,
    vendor: "La Colombe",
    pattern: "SP LA COLOMBE COFFEE PHILADELPHIA PA",
  },
  {
    category: Category.HOBBIES,
    vendor: "Polymaker 3D",
    pattern: "SP POLYMAKER 3D PRIN MISSOURI CITYTX",
  },
  {
    category: Category.HOBBIES,
    vendor: "Printed Solid",
    pattern: "SP PRINTED SOLID, IN NEWARK DE",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Ruggable",
    pattern: "SP RUGGABLE.COM VERNON CA",
  },

  {
    category: Category.HOME_HARDWARE,
    vendor: "SimpleHuman",
    pattern: "SP SIMPLEHUMAN, LLC",
  },
  {
    category: Category.DINING,
    vendor: "The Half Cookie",
    pattern: "SP THE HALF COOKIE 444 MOUNTAIN AVENUE REVERE 02151 MA USA",
  },
  {
    category: Category.CAR,
    vendor: "Speedway",
    pattern: "SPEEDWAY ",
  },
  {
    category: Category.MORTGAGE,
    vendor: "Guild",
    pattern: "SPI*GUILD MORT APPRAIS5898 COPLEY DR 800-365-4441 92111 CA USA",
  },
  {
    category: Category.CLOTHING,
    vendor: "Mizuno",
    pattern: /SPN.*MIZUNO/,
  },
  {
    category: Category.GROCERIES,
    vendor: "Star Market",
    pattern: "STAR.COM #0163 49 WHITE ST", // NB not actually their domain!
  },
  {
    category: Category.MISC,
    vendor: "Stairhopper",
    pattern: "STAIRHOPPER MOVERS LLC",
  },
  {
    category: Category.CAR,
    vendor: "Sunoco",
    pattern: "SUNOCO ",
  },
  {
    category: Category.CHARITY,
    vendor: "Sierra Club",
    pattern: "SIERRA CLUB ",
  },
  {
    category: Category.DINING,
    vendor: "Slice Pizza - Pizza Mia",
    pattern: "SLICE*PIZZAMIA 902 BROADWAY19TH FLOOR NEW YORK CITY10010 NY USA",
  },
  {
    category: Category.DINING,
    vendor: "Slice Pizza - My Brother's Place",
    pattern: "SLICE*MYBROTHERSPLACE 902 BROADWAY19TH FLOOR NEW YORK CITY10010 NY USA",
  },
  {
    category: Category.DINING,
    vendor: "Slice Pizza - ?",
    pattern: "SLICE*",
  },
  {
    category: Category.DINING,
    vendor: "Cake Ann",
    pattern: /SQ .*CAKE ANN .* MOBILE PURCHASE Gloucester MA/,
  },
  {
    category: Category.DINING,
    vendor: "Java Grind",
    pattern: /SQ .*JAVA GRIND & GRILL163 MAIN STREET STONEHAM 02180 MA USA/,
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Chequessett Chocolate",
    pattern: /SQ .*CHEQUESSETT CHOCOL560 HARRISON AVENUE BOSTON 02118 MA USA/,
  },
  {
    category: Category.DINING,
    vendor: "Medford Brewing",
    pattern: /SQ .*MEDFORD BREWING CO441-481 HIGHWAY 60 MEDFORD 02155 MA USA/,
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Olio di Firenze",
    pattern: /SQ .*OLIO DI FIRENZE81-530 HARRISON AVENUE BOSTON 02118 MA USA/,
  },
  {
    category: Category.DINING,
    vendor: "The Bread Shop",
    pattern: /SQ .*THE BREAD SHOP .* Wakefield/,
  },
  {
    category: Category.DINING,
    vendor: "The Catered Affair",
    pattern: /SQ .*THE CATERED AFFAIR560 HARRISON AVENUE BOSTON 02118 MA USA/,
  },
  {
    category: Category.DINING,
    vendor: "Omlette HQ",
    pattern: /SQ .*W S TWINS INC 13-31 LINCOLN STREET WAKEFIELD 01880 MA USA/,
  },
  {
    category: Category.DINING,
    vendor: null, // Default for Square payment - *usually* dining, but not always
    pattern: /^SQ \*/,
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Staples",
    pattern: "STAPLES ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Star Market",
    pattern: "STAR MARKET ",
  },
  {
    category: Category.DINING,
    vendor: "Starbucks",
    pattern: "STARBUCKS ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Stop & Shop",
    pattern: "STOP & SHOP ",
  },
  {
    category: Category.DINING,
    vendor: "Plazita",
    pattern: "STORE*PLAZITA MEXICO T303 2ND STREETSUITE 800 SAN FRANCISCO94107 CA USA",
  },
  {
    category: Category.DINING,
    vendor: "Summer Shack",
    pattern: "SUMMER SHACK ",
  },
  {
    category: Category.PERSONAL_CARE,
    vendor: "Supercuts",
    pattern: "SUPERCUTS ",
  },
  {
    category: Category.UTILITIES,
    vendor: "Superior Propane",
    pattern: "SUPERIOR PLUS ENERGY ",
  },
  {
    category: Category.UTILITIES,
    vendor: "Superior Propane",
    pattern: "SUPERIOR PLUS PROPANE ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Ace Hardware",
    pattern: "TAG'S ACE HARDWARE ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Target",
    pattern: "TARGET 000",
  },
  {
    category: Category.CAR,
    vendor: "TD Auto Finance",
    pattern: "TD AUTO FINANCE DES:LOAN PYMT ",
  },
  {
    category: Category.TRANSFER,
    vendor: "TD Bank",
    pattern: /TD BANK, NA DES:WEB PMT .* WEB/,
  },
  {
    category: Category.PERSONAL_CARE,
    vendor: "The Body Shop",
    pattern: "THE BODY SHOP BUTH-NA",
  },
  {
    category: Category.GROCERIES,
    vendor: "The Farmland",
    pattern: "THE FARM ",
  },
  {
    category: Category.GROCERIES,
    vendor: "The Farmland",
    pattern: /THE FARM LAND .* PURCHASE WAKEFIELD MA/,
  },
  {
    category: Category.DINING,
    vendor: "The Gingerbread Construction Company",
    pattern: "THE GINGERBREAD CONSTR",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Home Depot",
    pattern: "THE HOME DEPOT ",
  },
  {
    category: Category.DINING,
    vendor: "Oki Poke",
    pattern: "THE OKIPOK* THE OKIPOK55 FENNO ST QUINCY 02170 MA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "The Trustees of Reservations",
    pattern: "THE TRUSTEES 200 HIGH ST 4TH FL BOSTON 02110 MA USA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "The UPS Store",
    pattern: "THE UPS STORE 4423 15 LINCOLN ST WAKEFIELD 01880 MA USA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Thermoworks",
    pattern: "THERMOWORKS",
  },
  {
    category: Category.GROCERIES,
    vendor: "Thistle & Shamrock",
    pattern: "THISTLE & SHAMROCK",
  },
  {
    category: Category.GROCERIES,
    vendor: "Thistle & Shamrock",
    pattern: "THISTLE AND SHAMROCK",
  },
  {
    category: Category.COMMUNICATIONS,
    vendor: "T-mobile",
    pattern: "T-MOBILE STORE # 4ESA 75 MIDDLESEX TPKE STE 2113B BURLINGTON 01803 MA USA",
  },
  {
    category: Category.HOBBIES,
    vendor: "Topaz Labs",
    pattern: "TOPAZ LABS ",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Total Wine",
    pattern: "TOTAL WINE AND MORE ",
  },
  {
    category: Category.CAR,
    vendor: "Toyota",
    pattern: "TOYOTA FINANCIAL DES:LEASE_PAY ",
  },
  {
    category: Category.TAX,
    vendor: "Town of Wakefield",
    pattern: "Town of Wakefiel DES: EXCISE ID:XXXXXXXXXX4805 INDN:Eva George CO ID:XXXXX00529 WEB",
  },
  {
    category: Category.UTILITIES,
    vendor: "WMGLD",
    pattern: "Town of Wakefiel DES: WATER ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Trade Coffee",
    pattern: "TRADE COFFEE CO",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Tramontina",
    pattern: "TRAMONTINA USA INC. 12955 WEST AIRPORT BLVD. SUGAR LAND 77478 TX USA",
  },
  {
    category: Category.TRAVEL,
    vendor: "Tripit",
    pattern: "TRIPIT",
  },
  {
    category: Category.DINING,
    vendor: "Common Craft",
    pattern: "TST. COMMON CRAFT ",
  },
  {
    category: Category.DINING,
    vendor: "Hopothecary",
    pattern: "TST. HOPOTHECARY ALES 303 MAIN ST NORTH READING01864 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Notch Brewing",
    pattern: "TST. NOTCH BREWING - S283 DERBY ST # R SALEM 01970 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Rise & Shine Coffee",
    pattern: "TST. RISE & SHINE 400 MAIN STREET WAKEFIELD 01880 MA USA",
  },
  {
    // Default category for TOAST payment, no vendor
    category: Category.DINING,
    vendor: null,
    pattern: /^TST\* /,
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Untappd",
    pattern: "UNTAPPD",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Uplift Desk",
    pattern: "UPLIFT DESK",
  },
  {
    category: Category.COMMUNICATIONS, // might be internet?
    vendor: "Verizon",
    pattern: "VERIZON DES:PAYMENTREC ",
  },
  {
    category: Category.COMMUNICATIONS,
    vendor: "Verizon",
    pattern: "VERIZON WIRELESS DES:PAYMENTS",
  },
  {
    category: Category.GARDEN,
    vendor: "Vermont Wildflower Farm",
    pattern: "VT WILDFLOWER FARM 802-425-3641 VT",
  },
  {
    category: Category.DINING,
    vendor: "Wahlburgers",
    pattern: "WAHLBURGERS ",
  },
  {
    category: Category.UTILITIES,
    vendor: "WMGLD",
    pattern: "WAKEFIELD DES: WATER ",
  },
  {
    category: Category.UTILITIES,
    vendor: "WMGLD",
    pattern: "WAKEFIELD MUNICIPAL GAS ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Who Gives A Crap",
    pattern: "WHO GIVES A CRAP, INC.",
  },
  {
    category: Category.HOBBIES,
    vendor: "Wild Birds Unlimited",
    pattern: "WILD BIRDS UNLIMITED ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Williams Sonoma",
    pattern: "WILLIAMS SONOM 07/30 MOBILE PURCHASE LYNNFIELD MA",
  },
  {
    category: Category.MORTGAGE,
    vendor: "Mahlowitz & Kanarek",
    pattern: /WIRE TYPE:WIRE OUT .* BNF:MAHLOWITZ & KANAREK/,
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "WGBH",
    pattern: "WGBH ",
  },
  {
    category: Category.UTILITIES,
    vendor: "WMGLD",
    pattern: /WMGLD .* PURCHASE /,
  },
  {
    category: Category.BANK_FEES,
    vendor: null,
    pattern: "Wire Transfer Fee",
  },
  {
    category: Category.TRANSFER,
    vendor: "Wise",
    pattern: "Wise Inc DES",
  },
  {
    category: Category.DINING,
    vendor: "The Yard House",
    pattern: "YARD HOUSE ",
  },
  {
    category: Category.ELECTRONICS,
    vendor: "Yubico",
    pattern: "YUBICO INC. 5201 GREAT AMERICA PKWY #122 SANTA CLARA 95054 CA USA",
  },
  {
    category: Category.TRAVEL,
    vendor: "Zipcar",
    pattern: "ZIPCAR TRIP APR02 35 THOMSON PLACE BOSTON 02210 MA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Zoo New England",
    pattern: "ZOO NEW ENGLAND 02/10 PURCHASE XXX-XX92000 MA",
  },

  {
    category: Category.MISC,
    vendor: "City Of Cambridge",
    pattern: "CITY OF CAMBRIDGE, MA 6525 CROWN BLVD#41340 SAN JOSE 95160 CO USA",
  },
  {
    category: Category.MISC,
    vendor: "City Of Salem",
    pattern: "CITY OF SALEM, MA 128 S TRYON ST STE 1000 CHARLOTTE 28208 NC USA",
  },
  {
    category: Category.HOBBIES,
    vendor: "Field Notes",
    pattern: "FIELD NOTES 3122431107 IL",
  },
  {
    category: Category.CHARITY,
    vendor: "GoFundMe",
    pattern: "GOFUNDME HELP TO PROTE REDWOOD CITY CA",
  },
  {
    category: Category.MISC,
    vendor: null,
    pattern: "GOPOD MOBILE PURCHASE 1 SCIENCE PARK, BOSTON 02114 MA USA",
  },
  {
    category: Category.CAR,
    vendor: "Gulf Oil",
    pattern: "GULF EXPRESS",
  },
  {
    category: Category.CAR,
    vendor: "Gulf Oil",
    pattern: "GULF OIL ",
  },
  {
    category: Category.MISC,
    vendor: "Just Lewes",
    pattern: "JUST LEWES LEWES DE",
  },
  {
    category: Category.MISC,
    vendor: "M&S",
    pattern: "MARKS&SPENCER PLC",
  },
  {
    category: Category.MISC,
    vendor: null,
    pattern: "MBTA HARVARD CAMBRIDGE",
  },
  {
    category: Category.MISC,
    vendor: null,
    pattern: "MBTA PARK ENFORCEMENT 10 PARK PLZ BOSTON 02116 MA USA",
  },
  {
    category: Category.MISC,
    vendor: null,
    pattern: "MBTA PAY BY PHONE BOSTON MA",
  },
  {
    category: Category.DINING,
    vendor: "MoS",
    pattern: "MOS CAFE QPS1 SCIENCE PARK BOSTON 02114 MA USA",
  },
  {
    category: Category.CAR,
    vendor: "MoS Parking",
    pattern: "PARKING-MUSEUM OF SCI 1 SCIENCE PARK BOSTON 02114 MA USA",
  },
  {
    category: Category.HOBBIES,
    vendor: "Cults3D",
    pattern: "PAYPAL *CULTS3D",
  },
  {
    category: Category.CHARITY,
    vendor: null,
    pattern: "PAYPAL *FOONETURING",
  },
  {
    category: Category.CHARITY,
    vendor: null,
    pattern: "PAYPAL *GIVINGFUND GIVI 888-221-1161 CA",
  },
  {
    category: Category.CHARITY,
    vendor: null,
    pattern: "PAYPAL *GOFUNDME HELP D 402-935-2244 CA",
  },
  {
    category: Category.CASH,
    vendor: null,
    pattern: "PAYPAL *JO FUTYAN 402-935-7733 CA",
  },
  {
    category: Category.HOBBIES,
    vendor: null,
    pattern: "PAYPAL *MNBRICKPALA BRI 888-221-1161 CA",
  },
  {
    category: null,
    vendor: null,
    pattern: "PAYPAL *RL 402-935-7733 CA",
  },
  {
    category: Category.HOBBIES,
    vendor: null,
    pattern: "PAYPAL *SEAN LIBERAPAY 888-221-1161 CA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Peabody Essex Museum",
    pattern: "PEM - ADMISSIONS 161 ESSEX ST SALEM 01970 MA USA",
  },
  {
    category: null,
    vendor: null,
    pattern: "PHX TRIP ADVISOR SHOP PHOENIX",
  },
  {
    category: Category.ELECTRONICS,
    vendor: "Pi Shop",
    pattern: "PI SHOP INC. 877-325-1799 DE",
  },
  {
    category: Category.DINING,
    vendor: "Simons Coffee Shop",
    pattern: "PNT*SIMONS COFFEE SHOP",
  },
  {
    category: Category.MEDIA,
    vendor: "Birds And Blooms",
    pattern: "RDA*BIRDS AND BLOOM 44 SOUTH BROADWAY WHITE PLAINS 10017 NY USA",
  },
  {
    category: Category.GROCERIES,
    vendor: "Star Market",
    pattern: "STAR OSCO 2565 ",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Steam Games",
    pattern: "STEAMGAMES.COM ",
  },
  {
    category: Category.DINING,
    vendor: "Tavern in the Square",
    pattern: "TAVERN IN THE SQUARE",
  },
  {
    category: Category.MISC,
    vendor: "USPS",
    pattern: "USPS CHANGE OF ADDRESS 800-238-3150 TN",
  },
  {
    category: Category.MISC,
    vendor: "USPS",
    pattern: "USPS PO 2400730180 345 MAIN ST STONEHAM 02180 MA USA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Walmart",
    pattern: "WAL-MART ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Walmart",
    pattern: "WALMART STORE ",
  },
  {
    category: Category.PERSONAL_CARE,
    vendor: null,
    pattern: "WALNUT VISION CARE MA 233 SPRING ST.6TH FL E NEW YORK 10013 NY USA",
  },
  {
    category: Category.PERSONAL_CARE,
    vendor: "Warby Parker",
    pattern: "WARBY PARKER 233 SPRING ST 6TH FL EAST NEW YORK CITY10013 NY USA",
  },
  {
    category: Category.GROCERIES,
    vendor: "Whole Foods",
    pattern: "WHOLEFDS ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Kohls",
    pattern: "WWW.KOHLS.COM ",
  },
];

export default recognizers;
