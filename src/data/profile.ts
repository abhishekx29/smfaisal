// Content preserved from https://sites.google.com/view/dr-faisal/home

export const profile = {
  name: "Dr. Syed Mohammad Faisal",
  shortName: "Dr. S. M. Faisal",
  tagline: "Finance Strategist | Finance Researcher | Jazan University, Saudi Arabia",
  role: "Finance Strategist",
  institution: "Jazan University",
  location: "Jazan, Saudi Arabia",
  portrait:
    "https://lh3.googleusercontent.com/sitesv/AG8ngQVPlIuuYDvf0GPZiOcQvbb7C5NpM5HMVWonpXT4NgfuSdTyQv0m6z4T0sa-kk4pwyiOUeTnvGSNBaGtvC7V2dHamK4o17IXfLg1qbvcvLpobi2tzDdl2OkfC8h-jZn-i8puq7Hxcg6vX1xdnf48u7Z221zCY3eRs1PPrAamKDROJFHdtiE1-2HK2SU5MVit8NuvcYPAcrvs0xjiYAg8qBUtnhPBPxCANCE4Ib3qd04=w1280",
  source: "https://sites.google.com/view/dr-faisal/home",
  welcome: [
    "Welcome to my academic website.",
    "I am Dr. Syed Mohammad Faisal, Finance Strategist at Jazan University, Saudi Arabia. My teaching and research interests include Finance, ESG, Corporate Governance, FinTech, Artificial Intelligence in Accounting and Finance, and Sustainable Business. This website presents my academic profile, research publications, teaching experience, and professional activities.",
  ],
  about: [
    "Dr. Syed Mohammad Faisal is an Finance Strategist at Jazan University, Saudi Arabia. He holds an MBA and a PhD in Finance and has over 20 years of teaching, research, and academic administration experience.",
    "His research interests include Corporate Finance, ESG, Corporate Governance, FinTech, Artificial Intelligence in Accounting and Finance, Sustainable Business, and Financial Markets. He has published numerous research papers in international journals and actively participates in international conferences.",
    "He is committed to excellence in teaching, research, academic leadership, and mentoring students.",
  ],
};

export const academicProfile = [
  { icon: "GraduationCap", label: "Doctorate", value: "PhD in Finance" },
  { icon: "Clock", label: "Experience", value: "20+ Years of Teaching Experience" },
  { icon: "BookOpen", label: "Scholarship", value: "120+ Research Publications" },
  { icon: "Globe", label: "Global Reach", value: "International Conference Presenter" },
  {
    icon: "Layers",
    label: "Research Areas",
    value: "Finance, ESG, AI, FinTech, Corporate Governance",
  },
  { icon: "Award", label: "Qualification", value: "MBA and PhD in Finance" },
  {
    icon: "Building2",
    label: "Current Position",
    value: "Finance Strategist, Jazan University, Saudi Arabia",
  },
];

export const researchInterests = [
  { title: "Corporate Finance", icon: "LineChart" },
  { title: "ESG", icon: "Leaf" },
  { title: "Corporate Governance", icon: "Scale" },
  { title: "FinTech", icon: "Cpu" },
  { title: "Artificial Intelligence in Accounting and Finance", icon: "BrainCircuit" },
  { title: "Sustainable Business", icon: "Sprout" },
  { title: "Financial Markets", icon: "CandlestickChart" },
];

export type Book = {
  index: string;
  title: string;
  publisher: string;
  isbn: string;
  description?: string;
  doi?: string;
  amazon?: string;
};

export const books: Book[] = [
  {
    index: "1",
    title: "Capital Market and Investment Management",
    publisher: "Laxmi Publications, India",
    isbn: "ISBN-10: 9380856318",
    description:
      "This book provides a thorough examination of capital markets, including the various instruments available for investment, market structures, and the role of financial institutions. It also covers investment management strategies, risk assessment, and portfolio management, making it an essential read for those looking to deepen their understanding of investment practices.",
    amazon: "https://www.amazon.com/s?k=9380856318",
  },
  {
    index: "2",
    title: "Finance in Accounting Thought",
    publisher: "Book River Publications, India",
    isbn: "ISBN: 9789355156587",
    description:
      '"Finance in Accounting Thought" offers insights into the relationship between finance and accounting, emphasizing the theoretical frameworks that guide financial decision-making. This publication is particularly useful for accounting professionals and students who wish to grasp the financial implications of accounting practices and the broader economic environment.',
    amazon: "https://www.amazon.com/s?k=9789355156587",
  },
  {
    index: "3",
    title: "Strategic Frameworks for Managing Risk in FinTech Ecosystems",
    publisher: "IGI, USA",
    isbn: "ISBN: 9798337329802",
    doi: "https://doi.org/10.4018/979-8-3373-2980-2",
    description:
      "Edited book by Faisal, S. M., & Khan, A. K. (2026). Strategic Frameworks for Managing Risk in FinTech Ecosystems. IGI, USA.",
    amazon: "https://www.amazon.com/s?k=9798337329802",
  },
];

export const articles = [
  "Published article on â€œStock Market Behaviorâ€ in â€˜Hindustan Times Editorialâ€™ in 2007.",
  "Published article on â€œFOREXâ€ in â€˜Hindustan Times Editorialâ€™ in 2007.",
  "Published article on â€œKnowing Inflationâ€ in â€˜Hindustan Times Editorialâ€™ in 2008.",
  "Published article on â€œTheory of Exchange Rate in the context of inflationâ€ in â€˜Hindustan Times Editorialâ€™ in 2008.",
  "Published article on â€œIslamic Banking Instrumentsâ€ in â€˜Hindustan Times Editorialâ€™ in 2009.",
];

export const achievements = [
  {
    year: "2024",
    icon: "Lightbulb",
    title: "Patent Filed â€” Automated Project Risk Assessment and Mitigation System",
    detail:
      "Title of the Invention: AUTOMATED PROJECT RISK ASSESSMENT AND MITIGATION SYSTEM. The Patents Act, 1970 (39 of 1970), India. No. 202421005820.",
  },
  {
    year: "2026",
    icon: "BookMarked",
    title: "Edited Book with IGI Global, USA",
    detail:
      "Strategic Frameworks for Managing Risk in FinTech Ecosystems. IGI, USA. DOI: 10.4018/979-8-3373-2980-2. ISBN: 9798337329802.",
  },
  {
    year: "2025",
    icon: "Mic",
    title: "Session Chair â€” ICABERâ€™2025, Turkey",
    detail:
      "Session Chair in ICABER'2025, International Conference on Applied Business & Economic Research, Turkey 7-8 Nov; 2025, â€œSmart Inventory, Fewer Claims: Redefining Risk and Efficiency in Insurance Managementâ€.",
  },
  {
    year: "2007â€“2009",
    icon: "Newspaper",
    title: "Editorial Columns, Hindustan Times",
    detail:
      "Five invited editorial articles on Stock Market Behavior, FOREX, Knowing Inflation, Theory of Exchange Rate, and Islamic Banking Instruments.",
  },
  {
    year: "Ongoing",
    icon: "Globe2",
    title: "International Conference Presenter",
    detail:
      "Papers presented across Denmark, Malaysia, Thailand, Oman, Spain, France, Egypt, Turkey and Saudi Arabia.",
  },
  {
    year: "Ongoing",
    icon: "BookOpen",
    title: "120+ Research Publications",
    detail:
      "Published in Scopus, ABDC, Springer, Elsevier, Emerald, Wiley, Taylor & Francis, SAGE and IGI Global outlets.",
  },
];

export const teaching = [
  {
    period: "2009 â€“ Present",
    role: "Finance Strategist",
    org: "Jazan University, Saudi Arabia",
    detail:
      "Teaching Finance and Accounting, supervising research, academic administration and quality assurance at Applied College. Organized seminars and workshops on scientific research paper writing, investment analysis and portfolio management, and accounting and risk management.",
  },
  {
    period: "2004 â€“ 2009",
    role: "Faculty â€” Management & Finance",
    org: "Institutes in Lucknow, India",
    detail:
      "Taught management and finance subjects, participated in national seminars and faculty development programmes, including Lal Bahadur Shastri Institute of Management & Technology and Integral University, Lucknow.",
  },
  {
    period: "20+ Years",
    role: "Teaching, Research & Academic Administration",
    org: "India & Saudi Arabia",
    detail:
      "Over 20 years of combined teaching, research and academic administration experience, with a sustained commitment to mentoring students and academic leadership.",
  },
];

export const stats = [
  { label: "Years Teaching", value: 20, suffix: "+" },
  { label: "Research Publications", value: 120, suffix: "+" },
  { label: "Books", value: 3, suffix: "" },
  { label: "Conferences & Seminars", value: 23, suffix: "+" },
  { label: "Workshops", value: 12, suffix: "+" },
];

export const testimonials = [
  {
    quote:
      "He is committed to excellence in teaching, research, academic leadership, and mentoring students.",
    author: "Academic Profile",
    role: "sites.google.com/view/dr-faisal",
  },
  {
    quote:
      "His research interests include Corporate Finance, ESG, Corporate Governance, FinTech, Artificial Intelligence in Accounting and Finance, Sustainable Business, and Financial Markets.",
    author: "Research Statement",
    role: "Academic Website",
  },
  {
    quote:
      "He has published numerous research papers in international journals and actively participates in international conferences.",
    author: "Professional Summary",
    role: "Academic Website",
  },
];

export const contact = {
  institution: "Jazan University",
  department: "Applied College",
  address: "Jazan, Kingdom of Saudi Arabia",
  website: "https://drsmfaisal.com",
  mapEmbed:
    "https://www.google.com/maps?q=Jazan%20University%2C%20Jazan%2C%20Saudi%20Arabia&output=embed",
};

