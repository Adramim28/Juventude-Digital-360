export type PageId =
  | 'inicio'
  | 'emprego'
  | 'bolsas'
  | 'cursos'
  | 'empreendedorismo'
  | 'tecnologia'
  | 'laboratorio'
  | 'noticias'
  | 'sobre'
  | 'contactos'
  | 'privacidade'
  | 'termos'
  | 'admin'
  | 'criar-cv'
  | 'plano-negocio'
  | 'guia-publicacao';

export type MozambiqueProvince =
  | 'Zambézia'
  | 'Maputo Cidade'
  | 'Maputo Província'
  | 'Gaza'
  | 'Inhambane'
  | 'Sofala'
  | 'Manica'
  | 'Tete'
  | 'Nampula'
  | 'Cabo Delgado'
  | 'Niassa'
  | 'Nacional / Todo o País'
  | 'Remoto';

export interface Opportunity {
  id: string;
  title: string;
  entity: string;
  location: MozambiqueProvince | string;
  city?: string;
  category: 'Tecnologia' | 'Administração' | 'Educação' | 'Saúde' | 'Finanças' | 'Comunicação' | 'Agricultura' | 'Outros';
  opportunityType: 'Estágio Profissional' | 'Emprego Tempo Inteiro' | 'Meio Período' | 'Trabalho Remoto' | 'Programa Trainee';
  requirements: string[];
  description: string;
  deadline: string; // YYYY-MM-DD
  publishedAt: string; // YYYY-MM-DD
  sourceName: string;
  officialUrl: string;
  howToApply: string;
  contactEmail?: string;
  isVerified: boolean;
  isExpired?: boolean;
}

export interface Scholarship {
  id: string;
  title: string;
  institution: string;
  country: string;
  level: 'Licenciatura' | 'Mestrado' | 'Doutoramento' | 'Pós-Graduação' | 'Intercâmbio / Pesquisa' | 'Técnico Profissional';
  fieldOfStudy: string;
  requirements: string[];
  benefits: string[];
  deadline: string; // YYYY-MM-DD
  officialUrl: string;
  sourceName: string;
  notes: string;
  coverage: 'Integral (100%)' | 'Parcial' | 'Isenção de Propinas';
  isVerified: boolean;
  isExpired?: boolean;
}

export interface Course {
  id: string;
  title: string;
  entity: string;
  category:
    | 'Informática & Fundamentos'
    | 'Inglês'
    | 'Design Gráfico'
    | 'Fotografia & Vídeo'
    | 'Marketing Digital'
    | 'Programação & Web'
    | 'Inteligência Artificial'
    | 'Gestão & Negócios';
  costType: 'Gratuito' | 'Gratuito com Certificado' | 'Apoio Financeiro / Bolsa' | 'Preço Social';
  duration: string;
  certificateConfirmed: boolean;
  certificateDetails: string;
  description: string;
  platformUrl: string;
  language: string;
  level: 'Iniciante' | 'Intermédio' | 'Avançado';
  isVerified: boolean;
}

export interface EntrepreneurshipProgram {
  id: string;
  title: string;
  organization: string;
  category: 'Incubadora' | 'Programa de Financiamento' | 'Concurso' | 'Aceleração' | 'Guia Prático';
  location: string;
  targetAudience: string;
  fundingAmountOrSupport: string;
  description: string;
  requirements: string[];
  deadlineOrStatus: string;
  officialUrl: string;
  isVerified: boolean;
}

export interface TechToolGuide {
  id: string;
  title: string;
  category: 'Inteligência Artificial' | 'Ferramentas Digitais' | 'Segurança na Internet' | 'Criação de Sites' | 'Programação' | 'Produtividade';
  summary: string;
  practicalSteps: string[];
  toolUrl?: string;
  isFree: boolean;
  difficulty: 'Iniciante' | 'Intermédio';
}

export interface IdeaProject {
  id: string;
  projectName: string;
  area: 'Educação' | 'Agricultura & Agronegócio' | 'Ambiente & Sustentabilidade' | 'Cultura & Artes' | 'Tecnologia' | 'Empreendedorismo Comunitário' | 'Saúde & Bem-estar';
  province: MozambiqueProvince;
  district?: string;
  problem: string;
  solution: string;
  targetBeneficiaries: string;
  resourcesNeeded: string;
  projectPhase: 'Ideia Inicial' | 'Pesquisa e Validação' | 'Protótipo / Piloto' | 'Em Atividade Inicial';
  authorName?: string;
  contactEmailOrPhone?: string;
  publicConsentGiven: boolean; // Explicit separate consent
  status: 'aprovada_em_destaque' | 'em_revisao' | 'arquivada';
  submittedAt: string;
  likesCount: number;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Oportunidades' | 'Educação' | 'Tecnologia' | 'Empreendedorismo' | 'Zambézia & Moçambique';
  imageUrl: string;
  summary: string;
  content: string;
  publishedAt: string;
  sourceName: string;
  sourceUrl: string;
  isDemonstration: boolean;
}

export interface ContactSubmission {
  id: string;
  type: 'mensagem' | 'correcao' | 'sugestao' | 'parceria';
  name: string;
  email: string;
  phone?: string;
  province?: MozambiqueProvince;
  subject: string;
  message: string;
  submittedAt: string;
  isRead: boolean;
}

export interface UserCV {
  fullName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  province: string;
  city: string;
  bio: string;
  education: Array<{
    school: string;
    degree: string;
    year: string;
  }>;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    responsibilities: string;
  }>;
  skills: string[];
  languages: string[];
}

export interface BusinessPlanCanvas {
  projectName: string;
  province: string;
  valueProposition: string;
  customerSegments: string;
  channels: string;
  revenueStreams: string;
  costStructure: string;
  keyActivities: string;
  keyPartners: string;
}
