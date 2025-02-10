import { Category, Recognizer } from "@/lib/types";

/*****************************************************************************************************************
 * Refer to the README for how to add recognizers to this file and configure recognition of your own expenditure *
 *****************************************************************************************************************/

const recognizers: Recognizer[] = [
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Apple Card",
    pattern: "Ach Deposit Internet Transfer From Account Ending In 9012", // Special case for apple card
  },
  {
    category: Category.SAVINGS,
    vendor: "American Express (withdrawal)",
    pattern: "AMERICAN EXPRESS DES:TRANSFER",
  },
  {
    category: Category.BANK_FEES,
    vendor: "BofA",
    pattern: "Bank of America DES:CASHREWARD ",
  },
  {
    category: Category.BIG_BOX_STORES,
    vendor: "BJ's Online",
    pattern: "BJS.COM ",
  },
  {
    category: Category.CAR,
    vendor: "Bonnell Ford",
    pattern: "BONNELL FORD 353 CAMBRIDGE ST WINCHESTER 01890 MA USA",
  },
  {
    category: Category.CAR,
    vendor: "Franks Auto Inspection",
    pattern: "FRANKS AUTO INSPECTION45 RICHARDSON AVE WAKEFIELD 01880 MA USA",
  },
  {
    category: Category.CAR,
    vendor: "One Kendall Parking",
    pattern: "ONE KENDALL PARKING 389 BINNEY ST CAMBRIDGE 02139 MA USA",
  },
  {
    category: Category.CHARITY,
    vendor: "AAAS",
    pattern: "AAAS SCIENCE ",
  },
  {
    category: Category.CHARITY,
    vendor: "ACLU",
    pattern: "ACLU 212-549-2543 NYACLU",
  },
  {
    category: Category.POLITICAL_DONATIONS,
    vendor: "Act Blue",
    pattern: "ACTBLUE",
  },
  {
    category: Category.DEPOSIT,
    vendor: "Wise",
    pattern: /Wise Inc DES.*dpst/,
  },
  {
    category: Category.DINING,
    vendor: "City Works",
    pattern: "CITY WORKS WATERTOWN ",
  },
  {
    category: Category.DINING,
    vendor: "Crumbl",
    pattern: "CF* CRUMBL WOBURN 2570 W 600 N LINDON 84042 UT USA",
  },
  {
    category: Category.DINING,
    vendor: "Shoyu",
    pattern: "BM * SHOYU RESTAURANT 115 PERIMETER CENTER PLACESTE 1025 ATLANTA 30346 GA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "7 Seas Whale Watch",
    pattern: /7 SEAS WHALE WATCH/,
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "City Experiences",
    pattern: "CITY EXPERIENCES BHC 1 LONG WHARF 877-733-9425 02110 MA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "WGBH",
    pattern: "WGBH ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Common Market",
    pattern: "COMMON MARKET ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Who Gives A Crap",
    pattern: "WHO GIVES A CRAP, INC.",
  },
  {
    category: Category.HOBBIES,
    vendor: "Adobe",
    pattern: "ADOBE ",
  },
  {
    category: Category.HOBBIES,
    vendor: "B&H Photo",
    pattern: "B&H PHOTO",
  },
  {
    category: Category.HOBBIES,
    vendor: "Brookline Bird Club",
    pattern: "BROOKLINE *",
  },
  {
    category: Category.HOBBIES,
    vendor: "Cults3D",
    pattern: "CULTS3D.COM",
  },
  {
    category: Category.HOBBIES_BIRDFEEDING,
    vendor: "Wild Birds Unlimited",
    pattern: "WILD BIRDS UNLIMITED ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Abode",
    pattern: "ABODE ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Williams Sonoma",
    pattern: "WILLIAMS SONOM 07/30 MOBILE PURCHASE LYNNFIELD MA",
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
    category: Category.MEDIA,
    vendor: "Copper Dog Books",
    pattern: "COPPER DOG BOOKS BEVERLY MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.MEDIA,
    vendor: "CuriosityStream",
    pattern: "CURIOSITYSTREAM SILVER SPRINGMD",
  },
  {
    category: Category.MORTGAGE,
    vendor: "Mahlowitz & Kanarek",
    pattern: /WIRE TYPE:WIRE OUT .* BNF:MAHLOWITZ & KANAREK/,
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "1Password",
    pattern: "1PASSWORD* ",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Patreon",
    pattern: /CKO.*Patreon/,
  },
  {
    category: Category.RENT,
    vendor: "Walden Park",
    pattern: "PRT*WALDEN PARK ",
  },
  {
    category: Category.SALARY,
    vendor: "Embark",
    pattern: "166785 EMBARK VE DES:DIR",
  },
  {
    category: Category.SALARY,
    vendor: "Embark",
    pattern: "PAYLOCITY DES:ACCTVERIFY ",
  },
  {
    category: Category.SALARY,
    vendor: null,
    pattern: "PAYLOCITY, ACCTVERIFY",
  },
  {
    category: Category.SALARY,
    vendor: null,
    pattern: "PAYLOCITY",
  },
  {
    category: Category.TAX,
    vendor: "MA",
    pattern:
      "COMM. OF MASS. DES:MASTTAXRFD ID:XXXXX9218 INDN:GEORGE, EVA & RICHARD CO ID:EXXXXX2284 PPD",
  },
  {
    category: Category.TRAVEL,
    vendor: "AG Travel Plazas",
    pattern: "AG TRAVEL PLAZA ",
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
    category: Category.BANK_FEES,
    vendor: null,
    pattern: "Preferred Rewards-Book Credit Fee Waiver of $15",
  },
  {
    category: Category.CAR,
    vendor: "MoS Parking",
    pattern: "PARKING-MUSEUM OF SCI 1 SCIENCE PARK BOSTON 02114 MA USA",
  },
  {
    category: Category.CASH,
    vendor: null,
    pattern: "PAYPAL *JO FUTYAN 402-935-7733 CA",
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
    category: Category.DINING,
    vendor: "MoS",
    pattern: "MOS CAFE QPS1 SCIENCE PARK BOSTON 02114 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Simons Coffee Shop",
    pattern: "PNT*SIMONS COFFEE SHOP",
  },
  {
    category: Category.DINING,
    vendor: "The Yard House",
    pattern: "YARD HOUSE ",
  },
  {
    category: Category.ELECTRONICS,
    vendor: "Pi Shop",
    pattern: "PI SHOP INC. 877-325-1799 DE",
  },
  {
    category: Category.ELECTRONICS,
    vendor: "Yubico",
    pattern: "YUBICO INC. 5201 GREAT AMERICA PKWY #122 SANTA CLARA 95054 CA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Peabody Essex Museum",
    pattern: "PEM - ADMISSIONS 161 ESSEX ST SALEM 01970 MA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Zoo New England",
    pattern: "ZOO NEW ENGLAND 02/10 PURCHASE XXX-XX92000 MA",
  },
  {
    category: Category.HOBBIES,
    vendor: "Cults3D",
    pattern: "PAYPAL *CULTS3D",
  },
  {
    category: Category.HOBBIES,
    vendor: "Field Notes",
    pattern: "FIELD NOTES 3122431107 IL",
  },
  {
    category: Category.HOBBIES,
    vendor: null,
    pattern: "PAYPAL *MNBRICKPALA BRI 888-221-1161 CA",
  },
  {
    category: Category.HOBBIES,
    vendor: null,
    pattern: "PAYPAL *SEAN LIBERAPAY 888-221-1161 CA",
  },
  {
    category: Category.MEDIA,
    vendor: "Birds And Blooms",
    pattern: "RDA*BIRDS AND BLOOM 44 SOUTH BROADWAY WHITE PLAINS 10017 NY USA",
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
    vendor: "USPS",
    pattern: "USPS CHANGE OF ADDRESS 800-238-3150 TN",
  },
  {
    category: Category.MISC,
    vendor: "USPS",
    pattern: "USPS PO 2400730180 345 MAIN ST STONEHAM 02180 MA USA",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "1Password",
    pattern: "1PASSWORD 4711 YONGE ST.10TH FLOOR TORONTO M2N6K8 ON CAN",
  },
  {
    category: Category.PERSONAL_CARE,
    vendor: null,
    pattern: "WALNUT VISION CARE MA 233 SPRING ST.6TH FL E NEW YORK 10013 NY USA",
  },
  {
    category: Category.TAX,
    vendor: "Town of Wakefield",
    pattern: "WAKEFIELD DES: EXCISE ID:XXXXXXXXXX4904 INDN:Eva George CO ID:XXXXX00529 WEB",
  },
  {
    category: Category.TAX,
    vendor: "Wakefield ???",
    pattern: "WAKEFIELD MUNICI DES:WAKEFIELD ",
  },
  {
    category: Category.TRAVEL,
    vendor: "Zipcar",
    pattern: "ZIPCAR TRIP APR02 35 THOMSON PLACE BOSTON 02210 MA USA",
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
    category: Category.UTILITIES,
    vendor: "WMGLD",
    pattern: /WMGLD .* PURCHASE /,
  },
  {
    category: null,
    vendor: null,
    pattern: "PAYPAL *RL 402-935-7733 CA",
  },
  {
    category: null,
    vendor: null,
    pattern: "PHX TRIP ADVISOR SHOP PHOENIX",
  },
  {
    category: Category.BANK_FEES,
    vendor: null,
    pattern: "Tax Pmnt Conven Fee",
  },
  {
    category: Category.BIG_BOX_STORES,
    vendor: "Five Below",
    pattern: "FIVE BELOW 8050 STONEHAM MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.CAR,
    vendor: "City of Newburyport",
    pattern: "CITY OF NEWBURYPORT 60 PLEASANT STREET NEWBURYPORT 01950 MA USA",
  },
  {
    category: Category.CAR,
    vendor: "DCR (Parking)",
    pattern: "DCR-DAY USE CASHLESS P",
  },
  {
    category: Category.CAR,
    vendor: "Enterprise Rent-A-Car: Tolls",
    pattern: "ERAC TOLL ",
  },
  {
    category: Category.CAR,
    vendor: "Harbor Garage",
    pattern: "HARBOR GARAGE",
  },
  {
    category: Category.CAR,
    vendor: "MBTA Parking",
    pattern: "MBTA PAY BY PHONE BOSTON MA",
  },
  {
    category: Category.CAR,
    vendor: "Massport Logan Parking",
    pattern: "LOGAN PKG ",
  },
  {
    category: Category.CAR,
    vendor: "Park Albany / Passport Parking",
    pattern: "APA-PASSPORT (AUTH.NET25 ORANGE ST ALBANY 12207 NY USA",
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
    category: Category.CAR,
    vendor: "RMV",
    pattern: /RMV DANVERS 10 .* PURCHASE DANVERS MA/,
  },
  {
    category: Category.CAR,
    vendor: "Toyota",
    pattern: /CONNECTED SERVICES .* TX/,
  },
  {
    category: Category.CAR,
    vendor: null,
    pattern: "BJ'S FUEL #9030 6 HUTCHINSON DR DANVERS 01923 MA USA",
  },
  {
    category: Category.CHARITY,
    vendor: "ABA",
    pattern: "PY *AMERICAN BIRDING A",
  },
  {
    category: Category.CHARITY,
    vendor: "American Bird Conservancy",
    pattern: "AMERICAN BIRD CONSERVA",
  },
  {
    category: Category.CHARITY,
    vendor: "GBFB",
    pattern: "GBFB.ORG",
  },
  {
    category: Category.POLITICAL_DONATIONS,
    vendor: "MOVEON.ORG",
    pattern: "MOVEON.ORG POLITICAL A",
  },
  {
    category: Category.CLOTHING,
    vendor: "Bird Collective",
    pattern: "SP BIRD COLLECTIVE BROOKLYN NY",
  },
  {
    category: Category.CLOTHING,
    vendor: "North Swell",
    pattern: "SP NORTH SWELL 4 COLONIAL DRIVE WATERFORD 06385 CT USA",
  },
  {
    category: Category.CLOTHING,
    vendor: "REI",
    pattern: "REI #26 READING",
  },
  {
    category: Category.CLOTHING,
    vendor: null,
    pattern: "NEW ENGLAND RUNNING CO43 ENON ST BEVERLY 01915 MA USA",
  },
  {
    category: Category.CREDIT_CARD_PAYMENT,
    vendor: "Capital One",
    pattern: "CAPITAL ONE MOBILE PYMT",
  },
  {
    category: Category.DINING,
    vendor: "365 Market Vending",
    pattern: "365 MARKET ",
  },
  {
    category: Category.DINING,
    vendor: "Anthonys Pizza",
    pattern: /ANTHONYS #\d+.*MA USA/,
  },
  {
    category: Category.DINING,
    vendor: "Avalon Brew Pub",
    pattern: "AVALON BREW PUB 05/13 PURCHASE AVALON NJ",
  },
  {
    category: Category.DINING,
    vendor: "Blue Moon Grill",
    pattern: "BLUE MOON GRILL 955 MAIN ST WAKEFIELD 01880 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "CMS Vending",
    pattern: "CMSVEND*AMERICAN FOOD",
  },
  {
    category: Category.DINING,
    vendor: "Caffe Nero",
    pattern: "1040 CAFFE NEERO WOBUR290 MISHAWUM RD STE WOBURN 01801-2289MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Cake Ann",
    pattern: /SQ .*CAKE ANN .* MOBILE PURCHASE Gloucester MA/,
  },
  {
    category: Category.DINING,
    vendor: "Cape May Zoo",
    pattern: "AMK CAPE MAY ZOO FOOD 4 MOORE RD CAPE MAY CH 08210-1654NJ USA",
  },
  {
    category: Category.DINING,
    vendor: "Cheesecake Factory",
    pattern: "CHEESECAKE CHESTNUT HI199 BOYLSTON ST CHESTNUT HILL02467 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Cheesy Street Grill",
    pattern: "CHEESYSTREETGRILL",
  },
  {
    category: Category.DINING,
    vendor: "Chipotle",
    pattern: "CHIPOTLE 3487 NEWBURYPORT MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.DINING,
    vendor: "Common Craft",
    pattern: "TST. COMMON CRAFT ",
  },
  {
    category: Category.DINING,
    vendor: "Daves Hot Chicken",
    pattern: "DAVES HOT CHICKEN ",
  },
  {
    category: Category.DINING,
    vendor: "Fuddruckers",
    pattern: "FUDDRUCKERS ",
  },
  {
    category: Category.DINING,
    vendor: "Hopothecary",
    pattern: /HOPOTHECARY/,
  },
  {
    category: Category.DINING,
    vendor: "Hopothecary",
    pattern: "TST. HOPOTHECARY ALES 303 MAIN ST NORTH READING01864 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Java Grind",
    pattern: /SQ .*JAVA GRIND & GRILL163 MAIN STREET STONEHAM 02180 MA USA/,
  },
  {
    category: Category.DINING,
    vendor: "Kipo's",
    pattern: "KIPO`S ROAST BEEF 117 WATER ST WAKEFIELD 01880 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Legal Sea Foods",
    pattern: "LSF LONG WHARF 255 STATE STREET BOSTON 02109 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Maki Maki",
    pattern: "MAKI MAKI JAPANESE ",
  },
  {
    category: Category.DINING,
    vendor: "Medford Brewing",
    pattern: /SQ .*MEDFORD BREWING CO441-481 HIGHWAY 60 MEDFORD 02155 MA USA/,
  },
  {
    category: Category.DINING,
    vendor: "Minglewood Harborside",
    pattern: "MINGLEWOOD HARBORSIDE ",
  },
  {
    category: Category.DINING,
    vendor: "Mojo Sushi",
    pattern: "MOJO SUSHI LLP WAKEFIELD MA",
  },
  {
    category: Category.DINING,
    vendor: "Mystic Seaport Museum",
    pattern: "LANCER@MYSTICSEAPORTPO75 GREENMANVILLE AVE MYSTIC 06355 CT USA",
  },
  {
    category: Category.DINING,
    vendor: "New York Lunch",
    pattern: "NEW YORK LUNCH",
  },
  {
    category: Category.DINING,
    vendor: "North Avenue Diner",
    pattern: "NORTH AVE DINER 247 NORTH AVE WAKEFIELD 01880 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Notch Brewing",
    pattern: "TST. NOTCH BREWING - S283 DERBY ST # R SALEM 01970 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Oki Poke",
    pattern: "THE OKIPOK* THE OKIPOK55 FENNO ST QUINCY 02170 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Omelette HQ",
    pattern: /SQ .*W S TWINS INC 13-31 LINCOLN STREET WAKEFIELD 01880 MA USA/,
  },
  {
    category: Category.DINING,
    vendor: "Plazita",
    pattern: "STORE*PLAZITA MEXICO T303 2ND STREETSUITE 800 SAN FRANCISCO94107 CA USA",
  },
  {
    category: Category.DINING,
    vendor: "Plazita",
    pattern: "DD PLAZITAMEXICOTACO 855-973-1040 CA",
  },
  {
    category: Category.DINING,
    vendor: "Plazita Mexico Tacos",
    pattern: "DD *PLAZITAMEXICOTACO",
  },
  {
    category: Category.DINING,
    vendor: "Plum Island Coffee",
    pattern: "PLUM ISLAND COFFEE 14 MARKET SQUARE NEWBURYPORT 01950 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Public Kitchen",
    pattern: "PUBLIC KITCHEN ",
  },
  {
    category: Category.DINING,
    vendor: "Rise & Shine Coffee",
    pattern: "TST. RISE & SHINE 400 MAIN STREET WAKEFIELD 01880 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Sakura",
    pattern: "SAKURA ORGANIC WAKEFIELD MA",
  },
  {
    category: Category.DINING,
    vendor: "Soup Shack",
    pattern: "SOUP SHACK PORTER SQUA9 WHITE ST CAMBRIDGE 02140 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "Sticky Situations",
    pattern: "STICKY SITUATIONS MYSTIC CT",
  },
  {
    category: Category.DINING,
    vendor: "Summer Shack",
    pattern: "SUMMER SHACK ",
  },
  {
    category: Category.DINING,
    vendor: "Tavern in the Square",
    pattern: "TAVERN IN THE SQUARE",
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
    vendor: "The Gingerbread Construction Company",
    pattern: "THE GINGERBREAD CONSTR",
  },
  {
    category: Category.DINING,
    vendor: "The Half Cookie",
    pattern: "SP THE HALF COOKIE 444 MOUNTAIN AVENUE REVERE 02151 MA USA",
  },
  {
    category: Category.DINING,
    vendor: "USConnect Vending",
    pattern: "USCONNECT LTD VEND",
  },
  {
    category: Category.DINING,
    vendor: "WeWork Market",
    pattern: "MARKET@WORK ",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "BRAMBLE AND BRINE 102 2ND STREET REHOBOTH BEAC19971 DE USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "CHESTNUT MARKET 536 MAIN STREET NEW PALTZ 12561 NY USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "DOGFISH HEAD BREWINGS 320 REHOBOTH AVE REHOBOTH BEAC19971 DE USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "DOGFISH HEAD CRAFT BRE6 CANNERY VLG MILTON 19968 DE USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "FINS BAR & GRILLE 142 DECATUR ST CAPE MAY 08204 NJ USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "HOT DOG TOMMY S 319 BEACH AVENUE CAPE MAY 08204 NJ USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "ICCARA ITALIAN BISTRO 315 OCEAN ST UNIT 4 CAPE MAY 08204 NJ USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "IRISH EYES LEWES 213 ANGLERS RD LEWES 19958 DE USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "PY *HEIRLOOM DELAWARE 212 SAVANNAH RD LEWES 19958 DE USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "SERVOMATION REFRESHME ",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "THEMADBATTERREST 19 JACKSON ST 00001 08204 NJ USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "VANS VIETNAMESE RESTAU307 CENTRAL AVE ALBANY 12206 NY USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "WOLFFS BIERGARTEN ALBA895 BROADWAY ALBANY 12207 NY USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "SHOGUN ON MADISON 457 MADISON AVENUE ALBANY 12210 NY USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "PBD KITCHEN QPS1 EMPIRE ST PLAZA ALBANY 12242 NY USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "PY *THE CITY BEER HALL42 HOWARD ST ALBANY 12207 NY USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "HOLLOW BAR AND KITCHEN79 N PEARL ST ALBANY 12207 NY USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "KIMBALL FARM ICE CREAM",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "KIMBALL FARM GRILL",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "JORDANS IMAX READING READING ",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "CAPPAS TRACKSIDE RESTU1 GROVE STREET MELROSE 02176 MA USA",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "OKI POKI LYNNFIELD 1205 MARKET ST LYNNFIELD 01940 MA USA",
  },
  {
    category: Category.ELECTRONICS,
    vendor: "Apple",
    pattern: /MONTHLY INSTALLMENTS \(\d+ OF 24\)/,
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
    category: Category.ENTERTAINMENT,
    vendor: "Humble Bundle",
    pattern: "HUMBLEBUNDLE.COM 163 FREELON ST SAN FRANCISCO94107 CA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Mass Audubon",
    pattern: "MASS AUDUBON",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Mystic Aquarium",
    pattern: "MYSTIC AQUARIUM",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Mystic Seaport Museum",
    pattern: "MYSTIC SEAPORT MUSEUM",
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
    vendor: "Schodack Island State Park NY",
    pattern: "SCHODACK ISLAND SP PKH1 SCHODACK ISLAND WAY SCHODACK LAND12156 NY USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "The Chocolate Expo",
    pattern: "EB THE CHOCOLATE EXPO 535 MISSION STREET 8014137200 94105 CA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "The Trustees of Reservations",
    pattern: "THE TRUSTEES 200 HIGH ST 4TH FL BOSTON 02110 MA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "The Trustees of Reservations",
    pattern: "AT* TRUSTEES RESV 200 HIGH STREET, 4TH FLOOR BOSTON 02110 MA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "US Parks Pass",
    pattern: "SP US PARK PASS BRIDGEPORT CT",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "Zoo New England",
    pattern: "ZOO NEW ENGLAND 1 FRANKLIN PARK ROAD BOSTON 02121 MA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: null,
    pattern: "EASTERN STATES EXPO ON",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: null,
    pattern: "THE EGG 5184731061 NY",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: null,
    pattern: "KIMBALL FARM MINI GOLF400 LITTLETON ROAD WESTFORD 01886 MA USA",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: null,
    pattern: /STEAM PURCHASE/,
  },
  {
    category: Category.GARDEN,
    vendor: "Blue Stem Natives",
    pattern: "BLUE STEM NATIVES, LLC500 TERRY A. FRANCOIS BOULEVARD SAN FRANCISCO94158 CA USA",
  },
  {
    category: Category.GARDEN,
    vendor: "Do My Own",
    pattern: "DO MY OWN 866-581-7378 CA",
  },
  {
    category: Category.GARDEN,
    vendor: "Garden For Wildlife",
    pattern: "SP GARDEN FOR WILDLI RESTON VA",
  },
  {
    category: Category.GARDEN,
    vendor: "Mahoneys",
    pattern: "MAHONEYS ROCKY LEDGE",
  },
  {
    category: Category.GARDEN,
    vendor: "Native Plant Trust",
    pattern: "LS NATIVE PLANT TRUST ",
  },
  {
    category: Category.GARDEN,
    vendor: "Vermont Wildflower Farm",
    pattern: "VT WILDFLOWER FARM 802-425-3641 VT",
  },
  {
    category: Category.GARDEN,
    vendor: null,
    pattern: "RF *NATIVE PLANT TRU 321 COMMONWEALTH RD WAYLAND 01778 MA USA",
  },
  {
    category: Category.GIFTS,
    vendor: "Across The Way Gifts",
    pattern: "ACROSS THE WAY 313 WASHINGTON ST CAPE MAY 08204 NJ USA",
  },
  {
    category: Category.GIFTS,
    vendor: "Bellzi",
    pattern: "SP BELLZI.COM CHINO CA",
  },
  {
    category: Category.GIFTS,
    vendor: "Candy Kitchen",
    pattern: "CANDY KITCHEN - REHOBO102 REHOBOTH AVENUE REHOBOTH BEAC19971 DE USA",
  },
  {
    category: Category.GIFTS,
    vendor: "Friends of Prime Hook",
    pattern: "SQ *FRIENDS STORE AT P",
  },
  {
    category: Category.GIFTS,
    vendor: "The Paper Store",
    pattern: "THE PAPER STORE 0040 LYNNFIELD MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.GROCERIES,
    vendor: "BJ's",
    pattern: "BJS WHOLESALE ",
  },
  {
    category: Category.GROCERIES,
    vendor: "BJs'",
    pattern: "BJS MEMBERSHIP ",
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
    category: Category.GROCERIES,
    vendor: "Kikis Kwik Mart",
    pattern: "KIKIS KWIK MART ",
  },
  {
    category: Category.GROCERIES,
    vendor: "La Colombe",
    pattern: "SP LA COLOMBE COFFEE PHILADELPHIA PA",
  },
  {
    category: Category.GROCERIES,
    vendor: "Pemberton",
    pattern: "PEMBERTON FARM",
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
    category: Category.GROCERIES,
    vendor: "Thistle & Shamrock",
    pattern: "THISTLE & SHAMROCK",
  },
  {
    category: Category.GROCERIES,
    vendor: null,
    pattern: "D'AGOSTINO'S FOODS ",
  },
  {
    category: Category.GROCERIES,
    vendor: "Hoplark",
    pattern: "SP HOPLARK 3039967541 CO",
  },
  {
    category: Category.GROCERIES,
    vendor: "Hoplark",
    pattern: "HOPLARK",
  },
  {
    category: Category.HEALTH,
    vendor: "Gentle Dental",
    pattern: "GENTLE DENTAL ",
  },
  {
    category: Category.HOBBIES,
    vendor: "ABA",
    pattern: "PY *AMERICAN BIRDING A93 CLINTON STREET DELAWARE CITY19706 DE USA",
  },
  {
    category: Category.HOBBIES,
    vendor: "All3DP",
    pattern: "ALL3DP.COM ",
  },
  {
    category: Category.HOBBIES_BIRDFEEDING,
    vendor: "Bird Watcher's Supply and Gift",
    pattern: "BIRD WATCHER`S SUPP 194 ROUTE 1 NEWBURYPORT 01950 MA USA",
  },
  {
    category: Category.HOBBIES,
    vendor: "Cape May Bird Observatory",
    pattern: "PY *CMBO NORTHWOOD CEN9 HARDSCRABBLE RD BERNARDSVILLE07924 NJ USA",
  },
  {
    category: Category.HOBBIES,
    vendor: "CraftCloud",
    pattern: "ALL3DP / CRAFTCLOUD",
  },
  {
    category: Category.HOBBIES,
    vendor: "Eastern Mountain Sports",
    pattern: "EMS.COM MERIDEN CT",
  },
  {
    category: Category.HOBBIES,
    vendor: "GL Robotics",
    pattern: "SP GL ROBOTICS DOTHAN AL",
  },
  {
    category: Category.HOBBIES,
    vendor: "Gallium Digital",
    pattern: "GALLIUM DIGITAL",
  },
  {
    category: Category.HOBBIES,
    vendor: "Haikubox",
    pattern: "HAIKUBOX ",
  },
  {
    category: Category.HOBBIES_BIRDFEEDING,
    vendor: "JCS Wildlife",
    pattern: "SP JCS WILDLIFE 8128672800 IN",
  },
  {
    category: Category.HOBBIES,
    vendor: "JetBrains",
    pattern: "JETBRAINS AMERICAS INC1900 SOUTH NORFOLK, SUITE 350 SAN MATEO 94403 CA USA",
  },
  {
    category: Category.HOBBIES,
    vendor: "MakerBox",
    pattern: "MAKERBOX",
  },
  {
    category: Category.HOBBIES,
    vendor: "Michaels",
    pattern: "MICHAELS STORES ",
  },
  {
    category: Category.HOBBIES,
    vendor: "Mintion",
    pattern: "SP HK MINTION KOWLOON KL",
  },
  {
    category: Category.HOBBIES_BIRDFEEDING,
    vendor: "My Bird Buddy",
    pattern: "MYBIRDBUDDY.COM ",
  },
  {
    category: Category.HOBBIES,
    vendor: "Partsbuilt 3D",
    pattern: "PARTSBUILT ",
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
    category: Category.HOBBIES,
    vendor: "Prusa Research",
    pattern: "Prusa Research",
  },
  {
    category: Category.HOBBIES,
    vendor: "Smashrun",
    pattern: "SMASHRUN--",
  },
  {
    category: Category.HOBBIES,
    vendor: "Topaz Labs",
    pattern: "TOPAZ LABS ",
  },
  {
    category: Category.HOBBIES,
    vendor: "inventr.io",
    pattern: "INVENTR.IO ",
  },
  {
    category: Category.HOBBIES,
    vendor: null,
    pattern: "PUZZLES AND LEWES GOUR108 FRONT STREET LEWES 19958 DE USA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Ace Hardware",
    pattern: "L R HART HDWE INC ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "DIY Direct Supply",
    pattern: "DIY DIRECT SUPPLY 2501 26TH AVE S. MINNEAPOLIS 55406 MN USA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "HP",
    pattern: "HP *INSTANT INK ",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Kat Maus Haus",
    pattern: "SP KAT MAUS HAUS ILL 36 LARCH STREET BRIGHTON 02135 MA USA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "NordicTrack",
    pattern: "NORDICTRACK 8336804348",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Sleep Number",
    pattern: "SELECT COMFORT 10000 800-472-7185 MN0000596821",
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
    category: Category.HOME_HARDWARE,
    vendor: "Tramontina",
    pattern: "TRAMONTINA USA INC. 12955 WEST AIRPORT BLVD. SUGAR LAND 77478 TX USA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Uplift Desk",
    pattern: "UPLIFT DESK",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: null,
    pattern: "WP WHIRLPOOL PARTS",
  },
  {
    category: Category.HOME_MAINTENANCE,
    vendor: "Klostermann Electrical",
    pattern: "KLOSTERMANN ELECTRI...225 STEDMAN STREET SUITE 11 LOWELL 01851 MA USA",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Beacon Hill Wine & Gourmet",
    pattern: "BEACON HILL WINE ",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Best of British",
    pattern: "BEST OF BRITISH LTD 22 STATE ST NEWBURYPORT 01950 MA USA",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Cape May Peanut Butter Company",
    pattern: /CAPE MAY PEANUT BU/,
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Caporales Liquors",
    pattern: "CAPORALES LIQUORS WAKEFIELD MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Chequessett Chocolate",
    pattern: /SQ .*CHEQUESSETT CHOCOL560 HARRISON AVENUE BOSTON 02118 MA USA/,
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Downtown Wine And Spirits",
    pattern: "DOWNTOWN WINE AND SPIRIT SOMERVILLE MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Eataly",
    pattern: "EATALY NET USA LLC 43 W 23 ST, 7 FL NEW YORK 10010 NY USA",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Karl's Sausage Kitchen",
    pattern: "PY *KARLS SAUSAGE KITC1 BOURBON ST PEABODY 01960 MA USA",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Nasty Nonni'",
    pattern: "NASTY NONNI'S WINE & S325 MAIN STREET SAUGUS 01906 MA USA",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "North Woburn Liquors",
    pattern: "NORTH WOBURN LIQUORS WOBURN MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Olio di Firenze",
    pattern: /SQ .*OLIO DI FIRENZE81-530 HARRISON AVENUE BOSTON 02118 MA USA/,
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Prospect Hill / Tower drinks",
    pattern: "SQ *PROSPECT HILL BEVE",
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
    category: Category.LUXURY_FOOD,
    vendor: "The Honeybaked Ham Company",
    pattern: "HONEYBAKED HAM ",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: null,
    pattern: "COLBY FARM 50 SCOTLAND RD NEWBURY 01951 MA USA",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: null,
    pattern: "SQ *DRIVE-BY PIES",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: null,
    pattern: "SQ *PURPLE CARROT",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: null,
    pattern: "SQ *FARMER DAVE",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: null,
    pattern: "SQ *WAKEFIELD FARMERS",
  },
  {
    category: Category.MEDIA,
    vendor: "Apple",
    pattern: "APPLE.COM/BILL",
  },
  {
    category: Category.MEDIA,
    vendor: "False Knees",
    pattern: "SP FALSE KNEES STORE GUELPH ON",
  },
  {
    category: Category.MEDIA,
    vendor: "Zoop",
    pattern: "ZOOP.GG* RAB292AQX2 221 N. BROAD ST. SUITE 3A MIDDLETOWN 19709 DE USA",
  },
  {
    category: Category.MEDIA,
    vendor: null,
    pattern: "PAYPAL *MATT STEADY 888-221-1161 CA",
  },
  {
    category: Category.MISC,
    vendor: "Dogfish Head Inn",
    pattern: "SQ *DFH INN 105 SAVANNAH RD ",
  },
  {
    category: Category.MISC,
    vendor: "Miniso",
    pattern: "MINISO BURLINGTON MALL BURLINGTON MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.MISC,
    vendor: "Stairhopper",
    pattern: "STAIRHOPPER MOVERS LLC",
  },
  {
    category: Category.MISC,
    vendor: null,
    pattern: "NAYAX VENDING 45 11350 MCCORMICK RD HUNT VALLEY 21031 MD USA",
  },
  {
    category: Category.MISC,
    vendor: null,
    pattern: "PENGUINS OTTERS AND OT27 COOGAN BLVD STE 4 MYSTIC 06355-1920CT USA",
  },
  {
    category: Category.MISC,
    vendor: null,
    pattern: "GOPOD MOBILE PURCHASE 1 SCIENCE PARK, BOSTON 02114 MA USA",
  },
  {
    category: Category.MISC,
    vendor: null,
    pattern: "USCIS ELIS N400 WASHINGTON DC",
  },
  {
    category: Category.MORTGAGE,
    vendor: "Guild",
    pattern: "SPI*GUILD MORT APPRAIS5898 COPLEY DR 800-365-4441 92111 CA USA",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Backblaze",
    pattern: /BACKBLAZE.COM .* PURCHASE HTTPSWWW.BACK CA/,
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Evernote",
    pattern: /Evernote .* PURCHASE /,
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Experian",
    pattern: "EXPERIAN* CREDIT REPO",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Gandi",
    pattern: "GANDI NET STRASSEN",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Liberapay",
    pattern: "LIBERAPAY 120222",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Masto.host",
    pattern: /FS .*MASTO.HOST/,
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Patreon",
    pattern: "Patreon* Membership",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Untappd",
    pattern: "UNTAPPD",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Wirecutter",
    pattern: "NYTimes*NYTimes 800-698-4637 NY",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: null,
    pattern: "DEADSUPERHERO, UNC. 14032 W MUSTANG STREETUNIT 3733 LUKE AFB 85309 AZ USA",
  },
  {
    category: Category.PERSONAL_CARE,
    vendor: "Loop Earplugs",
    pattern: "SP LOOPUS 6463387347 NY",
  },
  {
    category: Category.REPAYMENT_IN,
    vendor: null,
    pattern: /WIRE TYPE:BOOK IN .* ORIG:MOLLIE J BRYANT/,
  },
  {
    category: Category.REPAYMENT_IN,
    vendor: null,
    pattern: "Zelle payment from MOLLIE BRYANT",
  },
  {
    category: Category.TAX,
    vendor: "Grey Finance",
    pattern: "PAYPAL *rl ",
  },
  {
    category: Category.TAX,
    vendor: "Town of Wakefield",
    pattern: "Town of Wakefiel DES: EXCISE ID:XXXXXXXXXX4805 INDN:Eva George CO ID:XXXXX00529 WEB",
  },
  {
    category: Category.TAX,
    vendor: "Town of Wakefield",
    pattern: "Wakefield Town of",
  },
  {
    category: Category.TAX,
    vendor: "Town of Wakefield",
    pattern: "TAX PMNT CONVEN FEE 49 CHURCH STREET WHITINSVILLE 01588 MA USA",
  },
  {
    category: Category.TAX,
    vendor: "Town of Wakefield",
    pattern: "WAKEFIELD TOWN OF 49 CHURCH STREET WHITINSVILLE 01588 MA USA",
  },
  {
    category: Category.TRANSFER,
    vendor: "Citibank",
    pattern: "IIT CITIBANK DES:CITIXFR ",
  },
  {
    category: Category.TRANSFER,
    vendor: "Monzo",
    pattern: "MONZO DES:FROM MONZO ",
  },
  {
    category: Category.TRANSFER,
    vendor: "PayPal",
    pattern: /PAYPAL .*George /,
  },
  {
    category: Category.TRANSFER,
    vendor: "TD Bank",
    pattern: /TD BANK, NA DES:WEB PMT .* WEB/,
  },
  {
    category: Category.TRANSFER,
    vendor: "Wise",
    pattern: "Wise Inc DES",
  },
  {
    category: Category.TRAVEL,
    vendor: "Cape May Ferry",
    pattern: "CMAYLEWSFERRY I-NET",
  },
  {
    category: Category.TRAVEL,
    vendor: "Queen Victoria B&B",
    pattern: "THE QUEEN VICTORIA B&B102 OCEAN ST CAPE MAY 08204 NJ USA",
  },
  {
    category: Category.TRAVEL,
    vendor: "Tripit",
    pattern: "TRIPIT",
  },
  {
    category: Category.TRAVEL,
    vendor: null,
    pattern: "DOGFISHINN 105 SAVANNAH ROAD LEWES 19958 DE USA",
  },
  {
    category: Category.UTILITIES,
    vendor: "Superior Propane",
    pattern: "HOLDEN OIL INC. ",
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
    category: Category.UTILITIES,
    vendor: "WMGLD",
    pattern: "Town of Wakefiel DES: WATER ",
  },
  {
    category: Category.TRANSFER,
    vendor: null,
    pattern: "Richard Edward George",
  },
  {
    category: Category.TRANSFER,
    vendor: null,
    pattern: "Top Up",
  },
  {
    category: Category.TRANSFER,
    vendor: null,
    pattern: "Round up",
  },
  {
    category: Category.SAVINGS,
    vendor: null,
    pattern: "AMERICANEXPRESS",
  },
  {
    category: Category.DEPOSIT,
    vendor: null,
    pattern: "Direct Deposit - Sutton Bank",
  },
  {
    category: Category.RENT,
    vendor: null,
    pattern: "YPS*EQUITYRESIDENTIALM",
  },
  {
    category: Category.COMMUNICATIONS,
    vendor: null,
    pattern: "VZWRLSS*PREPAID PYMNT  888-294-6804  FL ", // recurrent active card checks
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: null,
    pattern: "CARDULLOS GOURMET FOOD BOSTON",
  },
  {
    category: Category.MEDIA,
    vendor: null,
    pattern: "PORTER SQUARE BOOKS",
  },

  {
    category: Category.DINING,
    vendor: "(via Square)",
    pattern: "SQU*",
  },

  {
    category: Category.LUXURY_FOOD,
    vendor: null,
    pattern: "PORTER SQUARE SPIRITS",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: null,
    pattern: "LA BURDICK CHOCOLATE",
  },

  {
    category: Category.DINING,
    vendor: "(via Doordash)",
    pattern: "DOORDASH",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "GOG",
    pattern: "GOG.COM",
  },

  {
    category: Category.HOBBIES,
    vendor: null,
    pattern: "MICRO CEN 730 Memorial Cambridge",
  },

  {
    category: Category.DINING,
    vendor: null,
    pattern: "CAMBRIDGE COMMON RESTA",
  },

  {
    category: Category.ELECTRONICS,
    vendor: null,
    pattern: /^CANARY\s+NEW YORK/,
  },

  {
    category: Category.COMMUNICATIONS,
    vendor: null,
    pattern: "VZWRLSS*PRPAY AUTOPAY",
  },

  {
    category: Category.LUXURY_FOOD,
    vendor: null,
    pattern: "Stumptown Coffee Roast",
  },

  {
    category: Category.ENTERTAINMENT,
    vendor: "GOG",
    pattern: "GOG sp. z o.o.",
  },
  {
    category: Category.TRANSFER,
    vendor: null,
    pattern: "Adv Plus Banking",
  },

  {
    category: Category.CAR,
    vendor: null,
    pattern: "RMV BOSTO",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "SALT AND OLIVE",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: null,
    pattern: "SIMPLEHUMAN COM",
  },
  {
    category: Category.ELECTRONICS,
    vendor: "Lego",
    pattern: "LEGO ",
  },

  {
    category: Category.LUXURY_FOOD,
    vendor: null,
    pattern: "EATALY BOSTON",
  },
  {
    category: Category.CHARITY,
    vendor: null,
    pattern: "FEEDING AMERICA",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Flickr",
    pattern: "FLICKR.COM ",
  },

  {
    category: Category.POLITICAL_DONATIONS,
    vendor: null,
    pattern: "MOVEON.ORG CIVIC ",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: null,
    pattern: "MUSEUM OF SCIENCE",
  },

  {
    category: Category.DINING,
    vendor: "Caffe Nero",
    pattern: "LEVELUP*CAFFNERO",
  },
  {
    category: Category.DINING,
    vendor: "Sweetgreen",
    pattern: "LEVELUP*SWEETGREEN",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Craft Beer Club",
    pattern: "CRAFTBEERCLUB.COM",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "The Beer Connoisseur",
    pattern: "THE BEER CONNOISSEUR",
  },
  {
    category: Category.CAR,
    vendor: "Park Mobile",
    pattern: "PARKMOBILE",
  },
  {
    category: Category.MEDIA,
    vendor: "New Scientist",
    pattern: "NEW SCIENTIST",
  },

  {
    category: Category.MEDIA,
    vendor: "Harvard co-op bookstore",
    pattern: "HARVARD COOP BKST",
  },
  {
    category: Category.MEDIA, // may be books or games
    vendor: null,
    pattern: "HUMBLEBUNDLE COM",
  },
  {
    category: Category.GROCERIES,
    vendor: "King Alfred Flour",
    pattern: "KAF*BAKER'S CATALOG",
  },
  {
    category: Category.MISC,
    vendor: null,
    pattern: "KICKSTARTER ",
  },
  {
    category: Category.MEDIA,
    vendor: "Washington Post",
    pattern: "SUB*WASHPOST",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Cambridge Wine & Spirits",
    pattern: "CAMBRIDGE WINE & SPIRI",
  },

  {
    category: Category.HOBBIES,
    vendor: "Avenza Maps",
    pattern: "PAYPAL *AVENZA MAPS",
  },
  {
    category: Category.POLITICAL_DONATIONS,
    vendor: "Open Democracy",
    pattern: "PAYPAL *OPENDEMOCRA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: null,
    pattern: "THE PRINTING OFFICE OF Boston        MA ", // Art?
  },
  {
    category: Category.PERSONAL_CARE,
    vendor: null,
    pattern: "The Body Shop",
  },
  {
    category: Category.HEALTH,
    vendor: null,
    pattern: "CAMBRIDGE HEALTH MYCHA",
  },
  {
    category: Category.DINING,
    vendor: "Cheesecake Factory",
    pattern: "CHEESECAKE 94 ONE DINE",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Crate & Barrel",
    pattern: "CRATE & BARREL ",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Flickr",
    pattern: "DRI*Flickr",
  },
  {
    category: Category.HOBBIES,
    vendor: "Ace Wheelworks", // bike
    pattern: "ACE WHEEL ACE WHEELWOR SOMERVILLE     MA",
  },
  {
    category: Category.MEDIA,
    vendor: "Newbury Comics",
    pattern: "NEWBURY COMICS",
  },
  {
    category: Category.GROCERIES,
    vendor: "Thistle and Shamrock",
    pattern: "WPY*WPY*THISTLE AND SH 866-819-1294  CA ",
  },
  {
    category: Category.HOBBIES,
    vendor: null,
    pattern: "KICKSTARTER: GPS, SEQU Lenexa",
  },
  {
    category: Category.ELECTRONICS,
    vendor: null,
    pattern: "KICKSTARTER: VECTOR UN Pittsburgh    PA ",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "iNaturalist",
    pattern: "CALACADEMY",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "iNaturalist",
    pattern: "INATURALIST",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: "Google Cloud",
    pattern: "GOOGLE *CLOUD_01B364-B G.CO/HELPPAY# IRL",
  },

  // Use source categories if statement supports it. Note that statement categories can be very approximate,
  // so this is a fallback
  {
    category: Category.DINING,
    vendor: "(source category)",
    sourceCategory: "Eating out",
  },
  {
    category: Category.DINING,
    vendor: "(source category)",
    sourceCategory: "Restaurants",
  },
  {
    category: Category.GROCERIES,
    vendor: "(source category)",
    sourceCategory: "Groceries",
  },
  {
    category: Category.CAR,
    vendor: "(source category)",
    sourceCategory: "Gasoline",
  },
  {
    category: Category.TRANSFER,
    vendor: "(source category)",
    sourceCategory: "Transfers",
  },
  {
    category: Category.TRANSFER,
    vendor: "(source category)",
    sourceCategory: "Savings", // Monzo implies this for a lot of pot transfers
  },

  {
    category: Category.CAR,
    vendor: null,
    pattern: "BERLIN IRVIN",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "BICKFORDS GRILLE ",
  },
  {
    category: Category.GARDEN,
    vendor: null,
    pattern: "BLUE STEM NATIVES",
  },
  {
    category: Category.CAR,
    vendor: null,
    pattern: "BONNELL MOTORS",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "COMMON MAN ROADSIDE",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: "COMMON MAN NO. IRVING",
  },
  {
    category: Category.BANK_FEES,
    vendor: null,
    pattern: "FOREIGN TRANS FEE ERROR CORRECTION",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: null,
    pattern: "Gandi order 129971515",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: null,
    pattern: "HOMEDEPOT.COM",
  },

  {
    category: Category.GIFTS,
    vendor: null,
    pattern: "VON TRAPP BREWING GIFT1333 LUCE HILL RD STOWE 05672 VT USA",
  },

  {
    category: Category.HOBBIES,
    vendor: null,
    pattern: "WOODBURY MOUNTAIN TOYS MONTPELIER    VT ",
  },
  {
    category: Category.DINING,
    vendor: null,
    pattern: /von Trapp Brewing.*Stowe.*VT/,
  },

  {
    category: Category.TRAVEL,
    vendor: "Lyft",
    pattern: "LYFT ",
  },

  {
    category: Category.HOME_HARDWARE,
    vendor: "Jordan's",
    pattern: "TD BANK DES:PAYMENT ID:EVA M GEORGE ",
  },
  {
    category: Category.GIFTS,
    vendor: null,
    pattern: "TRAPP FAMILY LODGE (HG700 TRAPP HILL RD STOWE 05672 VT USA",
  },

  {
    category: Category.GIFTS,
    vendor: null,
    pattern: "SAVEOURMONARCHS.ORG 6408 INDIAN HILLS ROAD EDINA 55439 MN USA",
  },

  {
    category: Category.LUXURY_FOOD,
    vendor: "Stowe Mercantile",
    pattern: "Stowe Mer",
  },

  {
    category: Category.SALARY,
    vendor: null,
    pattern: "166785 EMBARK VE, DIR DEP",
  },
  {
    category: Category.BANK_FEES,
    vendor: null,
    pattern: "ADJUSTMENT TO BALANCE",
  },

  {
    category: Category.BANK_FEES,
    vendor: null,
    pattern: "Referral bonus 🎉",
  },
  {
    category: Category.TRANSFER,
    vendor: null,
    pattern: "WISE US INC DES:RICHARD GE",
  },

  {
    category: Category.DINING,
    vendor: "Sonic",
    pattern: "SONIC DRIVE IN",
  },
  {
    category: Category.TRAVEL,
    vendor: "Trapp Family Lodge",
    pattern: "TRAPP FAMILY LODGE INC STOWE VT",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Mingle Mocktails",
    pattern: "MINGLE MOCKTAILS 8882455566 PA",
  },
  {
    category: Category.DINING,
    vendor: "Ben & Jerry's",
    pattern: "AR* BEN & JERRYS 4157295247 CA",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: null,
    pattern: "LS THE COUNTRY STORE   STOWE         VT ",
  },

  {
    category: Category.POLITICAL_DONATIONS,
    vendor: "MoveOn",
    pattern: "SP MOVEON.ORG",
  },
  {
    category: Category.GIFTS,
    vendor: null,
    pattern: "THANKBOX - CLAIRE",
  },
  {
    category: Category.LUXURIES,
    vendor: null,
    pattern: "THE JUNIPER LOFT SOAP  EAST HARTLAND CT ",
  },

  {
    category: Category.CHARITY,
    vendor: null,
    pattern: "KOFI DONATION ",
  },
  {
    category: Category.TRAVEL,
    vendor: null,
    pattern: "MBTA-",
  },
  {
    category: Category.HOME_HARDWARE,
    vendor: "Aubuchon Hardware",
    pattern: "AUBUCHON HARDWARE BEVERLY MAAPPLE PAY ENDING IN 8080",
  },
  {
    category: Category.ONLINE_SERVICES,
    vendor: null,
    pattern: "BIRDS OF THE WORLD 607-254-1143 NY",
  },
  {
    category: Category.LUXURY_FOOD,
    vendor: "Cannoli King",
    pattern: "CANNOLI KING",
  },
  {
    category: Category.ENTERTAINMENT,
    vendor: "American Miday (Big E)",
    pattern: "ALL STAR AMUSEMENTS 109 S MAIN ST FARMLAND 47340-9528IN USA",
  },

  {
    category: Category.BANK_FEES,
    vendor: null,
    pattern: /NORTH SHORE BA 0.*FEE/,
  },
  {
    category: Category.CASH,
    vendor: null,
    pattern: "NORTH SHORE BA",
  },
  {
    category: Category.HEALTH,
    vendor: "AFC URGENT CARE",
    pattern: "AFC URGENT CARE",
  },
  {
    category: Category.HOBBIES,
    vendor: "Ambient Weather",
    pattern: "AMBIENTWEATHER.COM 888-221-1161 AZ",
  },
  {
    category: Category.HOBBIES,
    vendor: "Amplex (Bird Stamp?)",
    pattern: "AMPLEX CORP 800-889-8871 TX",
  },
  {
    category: Category.AMAZON,
    vendor: "Amazon Marketplace",
    pattern: "AMZNMktplace*",
  },

  {
    category: Category.CLOTHING,
    vendor: "Bass Pro Shops",
    pattern: "BASS PRO ONLINE U.S.",
  },
  {
    category: Category.CAR,
    vendor: "BJs",
    pattern: "BJ'S FUEL 6 HUTCHINSON DANVERS        MA",
  },
  {
    category: Category.CLOTHING,
    vendor: "Duluth Trading",
    pattern: "CS *DULUTHTRADING GC 855-793-8451",
  },
  {
    category: Category.HOBBIES,
    vendor: "Chess.com",
    pattern: "Chess.com Chess.com",
  },
  {
    category: Category.DINING,
    vendor: "Dave's Hot Chicken",
    pattern: "DAVESHOTCHICKEN ",
  },

  {
    category: Category.ONLINE_SERVICES,
    vendor: "Gandi",
    pattern: /Gandi order \d+/,
  },

  {
    category: Category.HOME_MAINTENANCE,
    vendor: "Service Finance / Rite Window",
    pattern: "SERVICE FINANCE DES:PAYMENTS ",
  },

  {
    category: Category.CLOTHING,
    vendor: "Levis",
    pattern: "LEVIS.COM 800-923-6245 CA",
  },
  {
    category: Category.TRAVEL,
    vendor: "Mass Pike misc",
    pattern: /MM [\d.]+ (EAST|WEST)BOUND MA T/,
  },
  {
    category: Category.CAR,
    vendor: "NAPA Auto",
    pattern: "NAPA STORE #0609008    SAUGUS        MA ",
  },
  {
    category: Category.POLITICAL_DONATIONS,
    vendor: "Pizza to the polls",
    pattern: "PIZZA TO THE POLLS 9712663544 OR",
  },
  {
    category: Category.MEDIA,
    vendor: "Pro Publica",
    pattern: "PROPUBLICA 6199611892 NY",
  },

  {
    category: Category.HOBBIES,
    vendor: "Polymaker",
    pattern: "SP POLYMAKER 3D PRIN",
  },
  {
    category: Category.CLOTHING,
    vendor: "Rockabilia",
    pattern: "SP ROCKABILIA 9525561121 MN",
  },
  {
    category: Category.CLOTHING,
    vendor: "Spencer's Gifts",
    pattern: "SPENCER GIFTS ",
  },
  {
    category: Category.BIG_BOX_STORES,
    vendor: "Target",
    pattern: "TARGET.COM 800-591-3869 MN",
  },
  {
    category: Category.GIFTS,
    vendor: "The Chocolate Truffle",
    pattern: "THE CHOCOLATE TRUFFL   READING       MA ",
  },
  {
    category: Category.GIFTS,
    vendor: "The Paper Store",
    pattern: "The Paper Store 0040   Lynnfield     MA ",
  },
  {
    category: Category.GIFTS,
    vendor: "Whitelam Books",
    pattern: "Whitelam Books",
  },

  {
    category: Category.CAR,
    vendor: "Shell",
    pattern: "SHELL                  WAKEFIELD     MA ",
  },
  {
    category: Category.CLOTHING,
    vendor: "Bird Collective",
    pattern: "SP BIRD COLLECTIVE 7189095711 NY",
  },
  {
    category: Category.GIFTS,
    vendor: "I Love Veterinary",
    pattern: "SP ILOVEVETERINARY ",
  },
  {
    category: Category.HOBBIES_BIRDFEEDING,
    vendor: "Nature Niche",
    pattern: "SP NATURE NICHE",
  },
  {
    category: Category.CAR,
    vendor: 'Gulf',
    pattern: "GULF MART ",
  },
  {
    category: Category.CAR,
    vendor: 'Gulf',
    pattern: "GULF STONEHAM ",
  },
];

export default recognizers;
