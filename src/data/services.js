import {
  FileText, ClipboardCheck, TrendingUp, ReceiptText, Briefcase, Building2,
  ShieldCheck, Search, FileSearch, Scale,
  Calculator, Users, Landmark, FileBarChart,
  BookOpen, BarChart3, CreditCard, PieChart,
  Rocket, LineChart, Layers, CheckSquare,
  Receipt, FileBadge, Wallet, FileCheck
} from 'lucide-react';

export const serviceCategories = [
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    shortDesc: 'Comprehensive audit services ensuring accuracy, compliance, and transparency in financial reporting.',
    desc: 'Our audit and assurance practice delivers independent, objective evaluations of your financial statements and operations. We help organizations build stakeholder confidence through rigorous, transparent, and insightful audit processes aligned with the latest regulatory standards.',
    icon: ClipboardCheck,
    color: 'from-primary-blue to-blue-400',
    image: '/images/audit-services.png',
    subServices: [
      { title: 'Statutory Audit', desc: 'Independent examination of financial statements as required by law, ensuring compliance with accounting standards and regulatory requirements.', icon: ShieldCheck },
      { title: 'Internal Audit', desc: 'Systematic evaluation of internal controls, risk management, and governance processes to improve organizational efficiency.', icon: Search },
      { title: 'Tax Audit', desc: 'Comprehensive audit under Section 44AB of the Income Tax Act to ensure accurate reporting of taxable income.', icon: FileSearch },
      { title: 'Due Diligence', desc: 'Thorough investigation and analysis of a business before mergers, acquisitions, or major financial transactions.', icon: Scale },
    ],
  },
  {
    slug: 'income-tax',
    title: 'Income Tax Services',
    shortDesc: 'Strategic tax planning and timely filing services to minimize liability and maximize savings.',
    desc: 'Navigate the complexities of Indian income tax with confidence. Our tax experts provide end-to-end solutions from strategic planning to dispute resolution, ensuring you stay compliant while optimizing your tax position for maximum benefit.',
    icon: FileText,
    color: 'from-growth-green to-emerald-500',
    image: '/images/tax-planning.png',
    subServices: [
      { title: 'Individual Tax Filing', desc: 'Hassle-free ITR preparation and filing for salaried individuals, freelancers, and professionals with maximum deduction optimization.', icon: Calculator },
      { title: 'Corporate Tax', desc: 'Strategic corporate tax planning, advance tax computation, and return filing for companies of all sizes.', icon: Users },
      { title: 'Tax Planning', desc: 'Proactive tax-saving strategies through investment planning, restructuring, and utilization of available exemptions and deductions.', icon: Landmark },
      { title: 'Tax Litigation Support', desc: 'Expert representation and advisory during income tax assessments, appeals, and dispute resolution proceedings.', icon: FileBarChart },
    ],
  },
  {
    slug: 'gst-consultancy',
    title: 'GST Consultancy',
    shortDesc: 'End-to-end GST registration, return filing, and compliance management for seamless operations.',
    desc: 'Stay ahead of GST compliance with our comprehensive consultancy services. From registration to complex advisory, we ensure your business operations remain smooth and fully compliant with the ever-evolving GST framework.',
    icon: ReceiptText,
    color: 'from-amber-500 to-orange-500',
    image: '/images/hero-boardroom.png',
    subServices: [
      { title: 'GST Registration', desc: 'Complete assistance with new GST registration, amendments, and cancellation processes for all business types.', icon: Receipt },
      { title: 'GST Return Filing', desc: 'Timely and accurate filing of GSTR-1, GSTR-3B, annual returns, and other GST compliance requirements.', icon: FileBadge },
      { title: 'GST Audit', desc: 'Comprehensive GST audit services including reconciliation, compliance review, and preparation of GSTR-9C.', icon: Wallet },
      { title: 'GST Advisory', desc: 'Strategic GST advisory on input tax credit optimization, HSN classification, and compliance structuring.', icon: FileCheck },
    ],
  },
  {
    slug: 'company-registration',
    title: 'Company Registration',
    shortDesc: 'Hassle-free company incorporation, annual compliance, and ROC filing for startups and enterprises.',
    desc: 'Launch your business with confidence. Our registration experts handle all aspects of company incorporation — from choosing the right structure to completing regulatory formalities — so you can focus on building your vision.',
    icon: Building2,
    color: 'from-violet-500 to-purple-500',
    image: '/images/startup-advisory.png',
    subServices: [
      { title: 'Private Limited Registration', desc: 'Complete Pvt Ltd company incorporation including DSC, DIN, name approval, MOA/AOA drafting, and CIN issuance.', icon: Building2 },
      { title: 'LLP Registration', desc: 'Limited Liability Partnership formation with partner agreement drafting, filing, and compliance setup.', icon: Users },
      { title: 'OPC Registration', desc: 'One Person Company registration enabling solo entrepreneurs to operate with limited liability protection.', icon: Briefcase },
      { title: 'Startup India Registration', desc: 'DPIIT recognition, tax exemptions, and compliance support under the Startup India initiative.', icon: Rocket },
    ],
  },
  {
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    shortDesc: 'Professional bookkeeping, financial statements, payroll, and MIS reporting services.',
    desc: 'Transform your financial record-keeping with our professional accounting services. We leverage modern cloud-based tools to provide accurate, real-time financial insights that empower better business decisions and growth.',
    icon: TrendingUp,
    color: 'from-teal-500 to-cyan-500',
    image: '/images/accounting-services.png',
    subServices: [
      { title: 'Bookkeeping', desc: 'Systematic recording of all financial transactions using modern accounting software for accurate record-keeping.', icon: BookOpen },
      { title: 'Financial Statements', desc: 'Preparation of balance sheets, profit & loss statements, and cash flow reports compliant with Indian accounting standards.', icon: BarChart3 },
      { title: 'Payroll Management', desc: 'End-to-end payroll processing including salary computation, TDS deduction, PF/ESI compliance, and payslip generation.', icon: CreditCard },
      { title: 'MIS Reports', desc: 'Customized Management Information System reports providing actionable insights for strategic decision-making.', icon: PieChart },
    ],
  },
  {
    slug: 'startup-advisory',
    title: 'Startup Advisory',
    shortDesc: 'Expert guidance on business structuring, funding readiness, and financial modelling for startups.',
    desc: 'From ideation to scale-up, we partner with founders to build financially sound businesses. Our startup advisory combines financial expertise with entrepreneurial understanding to help you secure funding, manage compliance, and plan for sustainable growth.',
    icon: Briefcase,
    color: 'from-rose-500 to-pink-500',
    image: '/images/startup-advisory.png',
    subServices: [
      { title: 'Business Structuring', desc: 'Strategic advice on optimal business entity selection, equity structuring, and governance frameworks for startups.', icon: Layers },
      { title: 'Funding Readiness', desc: 'Investor-ready financial documentation, pitch deck support, and due diligence preparation for fundraising rounds.', icon: LineChart },
      { title: 'Financial Modelling', desc: 'Comprehensive financial projections, scenario analysis, and valuation models to guide strategic decisions.', icon: BarChart3 },
      { title: 'Compliance Management', desc: 'End-to-end regulatory compliance setup and ongoing management for startups across all stages.', icon: CheckSquare },
    ],
  },
];

export const allServices = serviceCategories.flatMap(cat =>
  cat.subServices.map(sub => ({ ...sub, category: cat.title, categorySlug: cat.slug }))
);
