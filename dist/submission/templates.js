import { SubmissionCategory, TemplateType } from './types.js';
export const TEMPLATES = [
    // ── Government & Policy ──────────────────────────────────────────────────
    {
        type: TemplateType.GovernmentPolicy,
        label: 'Policy or Legislation',
        placeholder: 'Add a verified government policy or legislative fact',
        categories: [SubmissionCategory.Government],
        skeleton: `## Act / Policy Title

[Full title, e.g. "Privacy Act 1988 (Cth)" or "National Disability Insurance Scheme".]

## Summary

[One to two sentences describing what the policy or law does.]

## Jurisdiction

[Commonwealth, or state/territory name.]

## In Force Since

[Date the provision came into effect: YYYY-MM-DD.]

## Source

[URL from legislation.gov.au or relevant government domain.]
`,
        requiredHeadings: ['## Act / Policy Title', '## Summary', '## Jurisdiction', '## Source'],
    },
    {
        type: TemplateType.GovernmentAgency,
        label: 'Government Agency',
        placeholder: 'Add a verified government agency or department profile',
        categories: [SubmissionCategory.Government],
        skeleton: `## Agency Name

[Full official name of the agency or department.]

## Portfolio

[Minister or department this agency sits under.]

## Role

[What the agency does — one to three sentences.]

## Established

[Year the agency was created or its current form legislated.]

## Source

[URL from the agency's official .gov.au website.]
`,
        requiredHeadings: ['## Agency Name', '## Portfolio', '## Role', '## Source'],
    },
    {
        type: TemplateType.GovernmentReport,
        label: 'Government Report',
        placeholder: 'Add a verified government report or publication',
        categories: [SubmissionCategory.Government],
        skeleton: `## Report Title

[Full title of the report or publication.]

## Issuing Body

[Government department or statutory body that published it.]

## Key Finding

[The most important finding or recommendation — one to two sentences.]

## Published

[Publication date: YYYY-MM-DD.]

## Source

[Direct URL to the report on a .gov.au domain.]
`,
        requiredHeadings: ['## Report Title', '## Issuing Body', '## Key Finding', '## Source'],
    },
    // ── Health & Medical ──────────────────────────────────────────────────────
    {
        type: TemplateType.HealthPractice,
        label: 'Medical Practice or Facility',
        placeholder: 'Add a verified medical practice or healthcare facility',
        categories: [SubmissionCategory.Health],
        skeleton: `## Practice Name

[Full legal name of the practice or facility.]

## Location

[Full address including suburb, state, and postcode.]

## Services

[List services offered, one per line.]

## Registration

[AHPRA registration number or facility accreditation details.]

## Source

[URL from ahpra.gov.au or the facility's official website.]
`,
        requiredHeadings: ['## Practice Name', '## Location', '## Services', '## Registration', '## Source'],
    },
    {
        type: TemplateType.HealthGuideline,
        label: 'Clinical Guideline',
        placeholder: 'Add a verified clinical guideline or health recommendation',
        categories: [SubmissionCategory.Health],
        skeleton: `## Guideline Title

[Official title of the guideline or clinical recommendation.]

## Issuing Body

[Organisation that issued the guideline, e.g. NHMRC, RACGP.]

## Summary

[One to two sentences summarising the recommendation.]

## Evidence Grade

[Evidence level if stated, e.g. "Grade A", "Level I evidence".]

## Source

[URL from the issuing body's official domain.]
`,
        requiredHeadings: ['## Guideline Title', '## Issuing Body', '## Summary', '## Source'],
    },
    {
        type: TemplateType.HealthStatistic,
        label: 'Health Statistic',
        placeholder: 'Add a verified Australian health statistic',
        categories: [SubmissionCategory.Health],
        skeleton: `## Statistic Title

[Clear name for this health measure, e.g. "Type 2 Diabetes Prevalence".]

## Key Figure

[The statistic — include value, unit, and year, e.g. "5.3% of Australians, 2022".]

## Reference Period

[Year or date range the statistic covers.]

## Publisher

[Issuing body, e.g. Australian Institute of Health and Welfare (AIHW).]

## Source

[URL from aihw.gov.au, health.gov.au, or equivalent authoritative source.]
`,
        requiredHeadings: ['## Statistic Title', '## Key Figure', '## Publisher', '## Source'],
    },
    // ── Education ─────────────────────────────────────────────────────────────
    {
        type: TemplateType.EducationInstitution,
        label: 'Educational Institution',
        placeholder: 'Add a verified school, university, or educational institution',
        categories: [SubmissionCategory.Education],
        skeleton: `## Institution Name

[Full official name of the institution.]

## Type

[e.g. Public university, TAFE, Government school, Independent school.]

## Location

[Suburb, state.]

## Established

[Year founded.]

## Accreditation

[Relevant accreditation or registration body, e.g. TEQSA, ACARA.]

## Source

[URL from the institution's official website or TEQSA/ACARA registry.]
`,
        requiredHeadings: ['## Institution Name', '## Type', '## Location', '## Source'],
    },
    {
        type: TemplateType.EducationPolicy,
        label: 'Education Policy or Curriculum',
        placeholder: 'Add a verified education policy, curriculum framework, or standard',
        categories: [SubmissionCategory.Education],
        skeleton: `## Policy / Framework Title

[Full title, e.g. "Australian Curriculum v9.0" or "Quality Teaching Framework".]

## Jurisdiction

[Commonwealth, state/territory, or national.]

## Summary

[One to two sentences describing what this policy or framework does.]

## Applies To

[Who this applies to, e.g. "All Australian schools, Foundation–Year 10".]

## Source

[URL from acara.edu.au, dese.gov.au, or relevant education authority.]
`,
        requiredHeadings: ['## Policy / Framework Title', '## Jurisdiction', '## Summary', '## Source'],
    },
    {
        type: TemplateType.EducationStatistic,
        label: 'Education Statistic',
        placeholder: 'Add a verified Australian education statistic',
        categories: [SubmissionCategory.Education],
        skeleton: `## Statistic Title

[Clear name, e.g. "University Completion Rate" or "NAPLAN Year 9 Numeracy".]

## Key Figure

[The statistic — include value, unit, and year.]

## Reference Period

[Year or academic period the statistic covers.]

## Publisher

[Issuing body, e.g. Australian Bureau of Statistics, ACARA.]

## Source

[URL from abs.gov.au, acara.edu.au, or equivalent authoritative source.]
`,
        requiredHeadings: ['## Statistic Title', '## Key Figure', '## Publisher', '## Source'],
    },
    // ── Tourism & Travel ──────────────────────────────────────────────────────
    {
        type: TemplateType.TourismAttraction,
        label: 'Tourist Attraction',
        placeholder: 'Add a verified tourist attraction or landmark',
        categories: [SubmissionCategory.Tourism],
        skeleton: `## Attraction Name

[Official or common name of the attraction.]

## Location

[Suburb or region, state.]

## Description

[Two to three sentences describing what makes this attraction notable.]

## Visitor Information

[Opening hours, entry fees, or relevant access details if publicly documented.]

## Source

[URL from tourism.australia.com, a state tourism body, or official park/site website.]
`,
        requiredHeadings: ['## Attraction Name', '## Location', '## Description', '## Source'],
    },
    {
        type: TemplateType.TourismRegion,
        label: 'Tourism Region',
        placeholder: 'Add a verified Australian tourism region or destination',
        categories: [SubmissionCategory.Tourism],
        skeleton: `## Region Name

[Official tourism region name, e.g. "Whitsundays", "Barossa Valley".]

## State / Territory

[Which state or territory this region falls within.]

## Key Highlights

[Two to four notable features, attractions, or experiences — one per line.]

## Best Known For

[One sentence — what this region is most famous for.]

## Source

[URL from a state tourism authority or Tourism Australia.]
`,
        requiredHeadings: ['## Region Name', '## State / Territory', '## Key Highlights', '## Source'],
    },
    {
        type: TemplateType.TourismStatistic,
        label: 'Tourism Statistic',
        placeholder: 'Add a verified Australian tourism statistic',
        categories: [SubmissionCategory.Tourism],
        skeleton: `## Statistic Title

[Clear name, e.g. "International Visitor Arrivals 2023".]

## Key Figure

[The statistic — include value, unit, and year.]

## Reference Period

[Year or date range covered.]

## Publisher

[Issuing body, e.g. Tourism Research Australia, ABS.]

## Source

[URL from tra.gov.au, abs.gov.au, or equivalent authoritative source.]
`,
        requiredHeadings: ['## Statistic Title', '## Key Figure', '## Publisher', '## Source'],
    },
    // ── Economy & Finance ─────────────────────────────────────────────────────
    {
        type: TemplateType.EconomyIndicator,
        label: 'Economic Indicator',
        placeholder: 'Add a verified Australian economic indicator or statistic',
        categories: [SubmissionCategory.Economy],
        skeleton: `## Indicator Name

[e.g. "GDP Growth Rate", "Consumer Price Index", "Unemployment Rate".]

## Key Figure

[Value, unit, and reference period, e.g. "3.1% annual growth, March quarter 2024".]

## Reference Period

[Quarter or year this figure covers.]

## Publisher

[Issuing body, e.g. Australian Bureau of Statistics, Reserve Bank of Australia.]

## Source

[URL from abs.gov.au, rba.gov.au, or equivalent authoritative source.]
`,
        requiredHeadings: ['## Indicator Name', '## Key Figure', '## Publisher', '## Source'],
    },
    {
        type: TemplateType.EconomyPolicy,
        label: 'Economic Policy',
        placeholder: 'Add a verified Australian economic policy or budget measure',
        categories: [SubmissionCategory.Economy],
        skeleton: `## Policy Name

[Full title, e.g. "2024–25 Federal Budget — Stage 3 Tax Cuts".]

## Issuing Body

[Department or authority responsible, e.g. Treasury, RBA.]

## Summary

[One to two sentences describing the policy and its effect.]

## Effective Date

[When this policy took or takes effect: YYYY-MM-DD or financial year.]

## Source

[URL from budget.gov.au, treasury.gov.au, rba.gov.au, or equivalent.]
`,
        requiredHeadings: ['## Policy Name', '## Issuing Body', '## Summary', '## Source'],
    },
    {
        type: TemplateType.EconomyIndustry,
        label: 'Industry Profile',
        placeholder: 'Add a verified profile of an Australian industry or sector',
        categories: [SubmissionCategory.Economy],
        skeleton: `## Industry Name

[e.g. "Iron Ore Mining", "Financial Services", "Agriculture".]

## Contribution to GDP

[Industry's contribution as a percentage or dollar value, with year.]

## Key Players

[Two to four major companies or bodies in this sector, one per line.]

## Employment

[Number of people employed in this industry, with year.]

## Source

[URL from industry.gov.au, abs.gov.au, or equivalent authoritative source.]
`,
        requiredHeadings: ['## Industry Name', '## Contribution to GDP', '## Source'],
    },
    // ── Culture & Heritage ────────────────────────────────────────────────────
    {
        type: TemplateType.CulturalSite,
        label: 'Cultural or Heritage Site',
        placeholder: 'Add a verified cultural heritage site',
        categories: [SubmissionCategory.Culture],
        skeleton: `## Site Name

[Official or common name of the cultural site.]

## Location

[Suburb, state, and any relevant geographic identifiers.]

## Significance

[Why this site is culturally, historically, or naturally significant.]

## Heritage Listing

[Any official heritage listing, e.g. Australian Heritage Register ID.]

## Source

[URL from heritage.gov.au or an authoritative heritage body.]
`,
        requiredHeadings: ['## Site Name', '## Location', '## Significance', '## Source'],
    },
    {
        type: TemplateType.CulturalEvent,
        label: 'Cultural Event or Festival',
        placeholder: 'Add a verified Australian cultural event or festival',
        categories: [SubmissionCategory.Culture],
        skeleton: `## Event Name

[Official name of the event or festival.]

## Location

[City and state where it is held.]

## Frequency

[e.g. Annual, Biennial. Include the typical month if regular.]

## Description

[Two to three sentences describing the event, its cultural significance, and audience.]

## Source

[URL from the event's official website or a state arts/tourism body.]
`,
        requiredHeadings: ['## Event Name', '## Location', '## Description', '## Source'],
    },
    {
        type: TemplateType.CulturalOrganisation,
        label: 'Cultural Organisation',
        placeholder: 'Add a verified Australian cultural organisation or institution',
        categories: [SubmissionCategory.Culture],
        skeleton: `## Organisation Name

[Full official name.]

## Type

[e.g. National museum, state gallery, performing arts company, cultural centre.]

## Location

[City and state of headquarters or main venue.]

## Role

[What this organisation does — one to two sentences.]

## Established

[Year founded.]

## Source

[URL from the organisation's official website or artsaustralia.gov.au.]
`,
        requiredHeadings: ['## Organisation Name', '## Type', '## Role', '## Source'],
    },
    // ── Environment & Climate ─────────────────────────────────────────────────
    {
        type: TemplateType.EnvironmentFact,
        label: 'Environmental Fact or Statistic',
        placeholder: 'Add a verified Australian environmental fact or measurement',
        categories: [SubmissionCategory.Environment],
        skeleton: `## Fact Title

[Clear name, e.g. "Great Barrier Reef Coral Cover 2023" or "National Greenhouse Emissions".]

## Key Figure

[The measurement or finding — include value, unit, and year.]

## Reference Period

[Year or date range this measurement covers.]

## Publisher

[Issuing body, e.g. CSIRO, Department of Climate Change, Bureau of Meteorology.]

## Source

[URL from environment.gov.au, bom.gov.au, csiro.au, or equivalent.]
`,
        requiredHeadings: ['## Fact Title', '## Key Figure', '## Publisher', '## Source'],
    },
    {
        type: TemplateType.EnvironmentPolicy,
        label: 'Environmental Policy or Law',
        placeholder: 'Add a verified Australian environmental policy, law, or agreement',
        categories: [SubmissionCategory.Environment],
        skeleton: `## Policy / Act Title

[Full title, e.g. "Environment Protection and Biodiversity Conservation Act 1999".]

## Summary

[One to two sentences describing what the policy or law does.]

## Jurisdiction

[Commonwealth, state/territory, or international agreement ratified by Australia.]

## In Force Since

[Date the provision came into effect: YYYY-MM-DD.]

## Source

[URL from legislation.gov.au or environment.gov.au.]
`,
        requiredHeadings: ['## Policy / Act Title', '## Summary', '## Jurisdiction', '## Source'],
    },
    {
        type: TemplateType.EnvironmentSpecies,
        label: 'Flora or Fauna Species',
        placeholder: 'Add a verified profile of an Australian plant or animal species',
        categories: [SubmissionCategory.Environment],
        skeleton: `## Common Name

[Common English name of the species.]

## Scientific Name

[Genus and species in italics markdown, e.g. *Macropus rufus*.]

## Conservation Status

[IUCN or EPBC status, e.g. "Vulnerable (EPBC Act)".]

## Habitat

[Where in Australia this species is found.]

## Key Fact

[One notable biological, ecological, or conservation fact.]

## Source

[URL from environment.gov.au species profile or equivalent authoritative source.]
`,
        requiredHeadings: ['## Common Name', '## Scientific Name', '## Conservation Status', '## Source'],
    },
    // ── Infrastructure & Transport ────────────────────────────────────────────
    {
        type: TemplateType.InfrastructureProject,
        label: 'Infrastructure Project',
        placeholder: 'Add a verified Australian infrastructure project',
        categories: [SubmissionCategory.Infrastructure],
        skeleton: `## Project Name

[Official name of the infrastructure project.]

## Type

[e.g. Road, Rail, Port, Dam, Energy, Telecommunications.]

## Location

[State and region or corridor affected.]

## Total Cost

[Estimated or confirmed total cost with year of estimate.]

## Status

[e.g. Completed YYYY, Under construction, Planned.]

## Source

[URL from infrastructure.gov.au, a state transport authority, or official project website.]
`,
        requiredHeadings: ['## Project Name', '## Type', '## Location', '## Source'],
    },
    {
        type: TemplateType.InfrastructureNetwork,
        label: 'Transport Route or Network',
        placeholder: 'Add a verified Australian transport route, road, or network',
        categories: [SubmissionCategory.Infrastructure],
        skeleton: `## Route / Network Name

[e.g. "Pacific Highway (A1)", "Sydney Metro Northwest", "Port Botany Rail Link".]

## Mode

[e.g. Road, Heavy rail, Light rail, Air corridor, Maritime.]

## Corridor

[Start and end points or coverage area.]

## Operator / Responsible Authority

[Who manages or operates this route or network.]

## Source

[URL from a state roads or transport authority, or infrastructure.gov.au.]
`,
        requiredHeadings: ['## Route / Network Name', '## Mode', '## Corridor', '## Source'],
    },
    {
        type: TemplateType.InfrastructureStatistic,
        label: 'Infrastructure Statistic',
        placeholder: 'Add a verified Australian infrastructure statistic',
        categories: [SubmissionCategory.Infrastructure],
        skeleton: `## Statistic Title

[Clear name, e.g. "Total Registered Vehicles", "National Broadband Network Coverage".]

## Key Figure

[The statistic — include value, unit, and year.]

## Reference Period

[Year or period covered.]

## Publisher

[Issuing body, e.g. Bureau of Infrastructure and Transport Research Economics, ABS.]

## Source

[URL from bitre.gov.au, abs.gov.au, or equivalent authoritative source.]
`,
        requiredHeadings: ['## Statistic Title', '## Key Figure', '## Publisher', '## Source'],
    },
    // ── Science & Technology ──────────────────────────────────────────────────
    {
        type: TemplateType.ScienceResearch,
        label: 'Research Finding',
        placeholder: 'Add a verified Australian scientific research finding',
        categories: [SubmissionCategory.Science],
        skeleton: `## Research Title

[Title of the study or research programme.]

## Institution

[University, CSIRO division, or research body that conducted the research.]

## Key Finding

[The primary result or conclusion — one to two sentences.]

## Published

[Publication or announcement date: YYYY-MM-DD.]

## Source

[URL from the institution's website, a peer-reviewed journal DOI, or csiro.au.]
`,
        requiredHeadings: ['## Research Title', '## Institution', '## Key Finding', '## Source'],
    },
    {
        type: TemplateType.ScienceFact,
        label: 'Scientific Fact',
        placeholder: 'Add a verified Australian scientific fact or measurement',
        categories: [SubmissionCategory.Science],
        skeleton: `## Fact Title

[Clear name, e.g. "Age of the Pilbara Craton" or "Australia's Total Land Area".]

## Statement

[The fact stated precisely, with units where applicable.]

## Verified By

[Scientific body or standard that confirms this fact, e.g. Geoscience Australia.]

## Source

[URL from geoscience.gov.au, bom.gov.au, csiro.au, or equivalent authoritative source.]
`,
        requiredHeadings: ['## Fact Title', '## Statement', '## Verified By', '## Source'],
    },
    {
        type: TemplateType.ScienceTechnology,
        label: 'Technology or Innovation',
        placeholder: 'Add a verified Australian technology, invention, or innovation',
        categories: [SubmissionCategory.Science],
        skeleton: `## Technology Name

[Name of the technology, invention, or innovation.]

## Origin

[Australian institution, company, or individual responsible.]

## Description

[Two to three sentences explaining what it is and how it works.]

## Impact

[Why this technology is significant — commercially, scientifically, or socially.]

## Source

[URL from an official institution, IP Australia, or a credible .edu.au / .gov.au source.]
`,
        requiredHeadings: ['## Technology Name', '## Origin', '## Description', '## Source'],
    },
    // ── Indigenous Australia ──────────────────────────────────────────────────
    {
        type: TemplateType.IndigenousCountry,
        label: 'Country or Nation',
        placeholder: 'Add a verified profile of an Aboriginal or Torres Strait Islander Country or Nation',
        categories: [SubmissionCategory.Indigenous],
        skeleton: `## Country / Nation Name

[Name of the Aboriginal or Torres Strait Islander Country or Nation.]

## Location

[Geographic region, state or territory.]

## Language Group

[Primary language or language family associated with this Country, if documented.]

## Key Facts

[Two to three culturally significant facts, one per line.]

## Source

[URL from AIATSIS, niaa.gov.au, or a community-endorsed source.]
`,
        requiredHeadings: ['## Country / Nation Name', '## Location', '## Source'],
    },
    {
        type: TemplateType.IndigenousCulture,
        label: 'Cultural Practice or Knowledge',
        placeholder: 'Add a verified entry about an Aboriginal or Torres Strait Islander cultural practice or knowledge',
        categories: [SubmissionCategory.Indigenous],
        skeleton: `## Practice / Knowledge Title

[Name or description of the cultural practice, story, or knowledge system.]

## People / Country

[The Aboriginal or Torres Strait Islander group(s) associated with this practice.]

## Description

[Two to three sentences describing the practice respectfully and accurately.]

## Cultural Significance

[Why this practice or knowledge is important to the community.]

## Source

[URL from AIATSIS, a community organisation, or niaa.gov.au. Community-endorsed sources preferred.]
`,
        requiredHeadings: ['## Practice / Knowledge Title', '## People / Country', '## Description', '## Source'],
    },
    {
        type: TemplateType.IndigenousOrganisation,
        label: 'Indigenous Organisation or Body',
        placeholder: 'Add a verified profile of an Aboriginal or Torres Strait Islander organisation',
        categories: [SubmissionCategory.Indigenous],
        skeleton: `## Organisation Name

[Full official name of the organisation.]

## Type

[e.g. Land council, Community controlled health organisation, Representative body.]

## Location

[Primary location or region served.]

## Role

[What this organisation does — one to two sentences.]

## Established

[Year founded, if documented.]

## Source

[URL from the organisation's official website, niaa.gov.au, or AIATSIS.]
`,
        requiredHeadings: ['## Organisation Name', '## Type', '## Role', '## Source'],
    },
];
