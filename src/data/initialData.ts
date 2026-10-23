import { Opportunity, Scholarship, Course, EntrepreneurshipProgram, TechToolGuide, IdeaProject, NewsItem } from '../types';

export const INITIAL_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Estágio Profissional em Suporte Técnico e Redes Informáticas',
    entity: 'Hub Tecnológico da Zambézia (Quelimane)',
    location: 'Zambézia',
    city: 'Quelimane',
    category: 'Tecnologia',
    opportunityType: 'Estágio Profissional',
    requirements: [
      'Estudante ou recém-graduado em Informática, Telecomunicações ou áreas afins',
      'Conhecimentos básicos de configuração de redes LAN/Wi-Fi e manutenção de hardware',
      'Residência em Quelimane ou disponibilidade imediata',
      'Idade compreendida entre 18 e 29 anos'
    ],
    description: 'Oportunidade para jovens técnicos desenvolverem competências práticas em suporte a utilizadores, gestão de infraestrutura de rede e apoio a projetos comunitários de conectividade.',
    deadline: '2026-11-30',
    publishedAt: '2026-10-15',
    sourceName: 'Hub Local de Quelimane / Anúncio Institucional',
    officialUrl: 'https://inep.gov.mz/',
    howToApply: 'Enviar CV em formato PDF e carta de motivação indicando a referência EST-ZAM-2026.',
    contactEmail: 'oportunidades@juventudedigital360.org.mz',
    isVerified: true
  },
  {
    id: 'opp-2',
    title: 'Assistente Júnior de Gestão de Projetos e Extensão Comunitária',
    entity: 'Associação de Desenvolvimento Rural e Juventude de Mocuba',
    location: 'Zambézia',
    city: 'Mocuba',
    category: 'Administração',
    opportunityType: 'Emprego Tempo Inteiro',
    requirements: [
      '12ª Classe concluída ou Bacharelato em Gestão, Agronomia ou Ciências Sociais',
      'Domínio da língua Portuguesa e conhecimento de línguas locais (ex: Chuabo ou Lomwe é vantagem)',
      'Capacidade de elaboração de relatórios básicos no Word/Excel',
      'Espírito de iniciativa e trabalho em equipa'
    ],
    description: 'Apoio à coordenação de atividades de campo com jovens produtores agrícolas, registo de dados de colheita e facilitação de encontros comunitários no distrito de Mocuba.',
    deadline: '2026-11-15',
    publishedAt: '2026-10-10',
    sourceName: 'Quadro de Avisos Distrital de Mocuba / Emprego Moçambique',
    officialUrl: 'https://inep.gov.mz/',
    howToApply: 'Entrega física na sede da associação em Mocuba ou via correio eletrónico com o assunto "Candidatura - Mocuba".',
    contactEmail: 'info@juventudedigital360.org.mz',
    isVerified: true
  },
  {
    id: 'opp-3',
    title: 'Desenvolvedor(a) Web Front-End Júnior (Remoto)',
    entity: 'Coletivo Digital Moçambique',
    location: 'Remoto',
    category: 'Tecnologia',
    opportunityType: 'Trabalho Remoto',
    requirements: [
      'Conhecimentos sólidos em HTML5, CSS3, JavaScript e noções de React',
      'Portfólio com pelo menos 1 ou 2 projetos pessoais ou académicos hospedados',
      'Acesso estável à Internet para reuniões de planeamento semanais',
      'Vontade contínua de aprender e documentar código'
    ],
    description: 'Integração em equipa jovem de tecnologia para manutenção de portais informativos, criação de interfaces acessíveis e otimização para redes móveis em Moçambique.',
    deadline: '2026-12-15',
    publishedAt: '2026-10-20',
    sourceName: 'Comunidade MozDevz & Portais Oficiais',
    officialUrl: 'https://mozdevz.org/',
    howToApply: 'Submissão de link do GitHub e formulário de inscrição online.',
    isVerified: true
  },
  {
    id: 'opp-4',
    title: 'Monitor de Alfabetização Digital e Inclusão Juvenil',
    entity: 'Centro de Formação Comunitária de Gurúè',
    location: 'Zambézia',
    city: 'Gurúè',
    category: 'Educação',
    opportunityType: 'Meio Período',
    requirements: [
      'Facilidade de comunicação e gosto pelo ensino comunitário',
      'Domínio de informática na ótica do utilizador (Windows, Office, Navegação Segura na Internet)',
      'Disponibilidade para trabalhar 20 horas por semana (manhãs ou tardes)'
    ],
    description: 'Orientação de jovens e mulheres locais em cursos de introdução à informática, pesquisa de oportunidades escolares e elaboração de currículos.',
    deadline: '2026-11-20',
    publishedAt: '2026-10-12',
    sourceName: 'Centro Vocacional de Gurúè',
    officialUrl: 'https://inep.gov.mz/',
    howToApply: 'Apresentar documento de identificação e CV atualizado no centro.',
    isVerified: true
  },
  {
    id: 'opp-5',
    title: 'Trainee em Contabilidade e Gestão de Microfinanças',
    entity: 'Instituição de Poupança e Crédito Comunitário',
    location: 'Nacional / Todo o País',
    city: 'Maputo / Quelimane / Nampula',
    category: 'Finanças',
    opportunityType: 'Programa Trainee',
    requirements: [
      'Formação média ou superior em Contabilidade, Finanças ou Economia',
      'Boa capacidade analítica e rigor ético',
      'Aptidão no manuseamento de folhas de cálculo (Excel)'
    ],
    description: 'Programa de aceleração de carreira com 12 meses de tutoria direta com especialistas financeiros e rotação em departamentos de auditoria e crédito juvenil.',
    deadline: '2026-11-10',
    publishedAt: '2026-09-28',
    sourceName: 'Boletim do Setor Financeiro de Moçambique',
    officialUrl: 'https://www.bancomoc.mz/',
    howToApply: 'Candidatura formal através do portal institucional de recrutamento.',
    isVerified: true
  }
];

export const INITIAL_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'bolsa-1',
    title: 'Bolsas Nacionais e Internacionais do IBE (Instituto de Bolsas de Estudo)',
    institution: 'Ministério da Ciência, Tecnologia e Ensino Superior de Moçambique',
    country: 'Moçambique e Países Parceiros',
    level: 'Licenciatura',
    fieldOfStudy: 'Engenharias, Saúde, Agricultura, Educação e Ciências Exatas',
    requirements: [
      'Nacionalidade Moçambicana e residência no país',
      'Idade máxima conforme o regulamento anual (geralmente até 25 anos para licenciatura)',
      'Média de conclusão do ensino secundário ou pré-universitário compatível',
      'Comprovativo de carência socioeconómica para bolsas com subsídio de manutenção'
    ],
    benefits: [
      'Isenção total de propinas na instituição pública de acolhimento',
      'Subsídio mensal de alimentação e alojamento (conforme categoria atribuída)',
      'Apoio para material didático e seguro escolar básico'
    ],
    deadline: '2026-12-10',
    officialUrl: 'https://ibe.gov.mz/',
    sourceName: 'Instituto de Bolsas de Estudo de Moçambique (IBE Gov)',
    notes: 'Canal oficial e legal do Governo de Moçambique para distribuição de bolsas internas e acordos com governos estrangeiros.',
    coverage: 'Integral (100%)',
    isVerified: true
  },
  {
    id: 'bolsa-2',
    title: 'Bolsas Chevening para Mestrado no Reino Unido (Edição para Moçambique)',
    institution: 'Governo do Reino Unido (Foreign, Commonwealth & Development Office)',
    country: 'Reino Unido',
    level: 'Mestrado',
    fieldOfStudy: 'Todas as áreas académicas em universidades britânicas',
    requirements: [
      'Cidadania moçambicana',
      'Grau de licenciatura concluído',
      'Pelo menos 2 anos (2.800 horas) de experiência de trabalho profissional ou voluntário',
      'Compromisso de regressar a Moçambique por pelo menos 2 anos após a conclusão'
    ],
    benefits: [
      'Pagamento integral de propinas universitárias de mestrado',
      'Passagem aérea de ida e volta em classe económica para o Reino Unido',
      'Estipêndio mensal para despesas de custo de vida e alojamento',
      'Subsídio de instalação na chegada e despesas de visto'
    ],
    deadline: '2026-11-05',
    officialUrl: 'https://www.chevening.org/scholarship/mozambique/',
    sourceName: 'High Commission of the UK in Maputo / Chevening Secretariat',
    notes: 'Programa de liderança prestigiado. As candidaturas abrem anualmente entre agosto e novembro para o ano letivo seguinte.',
    coverage: 'Integral (100%)',
    isVerified: true
  },
  {
    id: 'bolsa-3',
    title: 'Bolsas Camões, I.P. de Cooperação Universitária e Língua Portuguesa',
    institution: 'Instituto Camões & Embaixada de Portugal em Moçambique',
    country: 'Moçambique e Portugal',
    level: 'Pós-Graduação',
    fieldOfStudy: 'Língua e Cultura Portuguesa, Formação de Professores e Especialização',
    requirements: [
      'Nacionalidade moçambicana',
      'Titulares de grau superior ou estudantes finalistas destacados',
      'Plano de estudos ou proposta de investigação alinhada com as prioridades da cooperação bilateral'
    ],
    benefits: [
      'Subsídio mensal de bolsa',
      'Isenção ou comparticipação das propinas oficiais',
      'Seguro de acidentes pessoais e viagens quando aplicável'
    ],
    deadline: '2026-12-20',
    officialUrl: 'https://www.instituto-camoes.pt/',
    sourceName: 'Camões, Instituto da Cooperação e da Língua, I.P.',
    notes: 'Informações detalhadas disponíveis anualmente junto do Centro Cultural Português em Maputo e polos universitários.',
    coverage: 'Integral (100%)',
    isVerified: true
  },
  {
    id: 'bolsa-4',
    title: 'Bolsas DAAD - Serviço Alemão de Intercâmbio Académico para África',
    institution: 'DAAD (Deutscher Akademischer Austauschdienst)',
    country: 'Alemanha e Centros de Excelência Africanos',
    level: 'Mestrado',
    fieldOfStudy: 'Engenharia, Clima, Energias Renováveis, Economia do Desenvolvimento e Saúde Pública',
    requirements: [
      'Licenciatura obtida com classificação destacada nos últimos 6 anos',
      'Domínio da língua Inglesa ou Alemã dependendo do programa selecionado',
      'Motivação clara voltada para o desenvolvimento do continente africano'
    ],
    benefits: [
      'Estipêndio mensal de manutenção',
      'Passagens aéreas internacionais',
      'Seguro médico integral durante o período de estudos',
      'Subsídio para aquisição de livros e investigação de campo'
    ],
    deadline: '2026-11-25',
    officialUrl: 'https://www.daad-kenya.org/en/',
    sourceName: 'DAAD Regional Office for Africa',
    notes: 'Oferece bolsas In-Country/In-Region (em universidades africanas parceiras) e bolsas diretas para universidades alemãs.',
    coverage: 'Integral (100%)',
    isVerified: true
  },
  {
    id: 'bolsa-5',
    title: 'Programa Internacional de Bolsas da Fundação Aga Khan (AKF ISP)',
    institution: 'Aga Khan Foundation (AKDN)',
    country: 'Vários Países',
    level: 'Mestrado',
    fieldOfStudy: 'Estudos de Desenvolvimento, Arquitetura Sustentável, Educação, Saúde Comunitária',
    requirements: [
      'Estudantes moçambicanos com excelência académica comprovada e necessidade financeira genuína',
      'Admissão prévia ou em curso numa universidade de reputação reconhecida',
      'Prioridade para programas de mestrado com forte impacto comunitário'
    ],
    benefits: [
      'Financiamento 50% bolsa a fundo perdido e 50% empréstimo sem juros bonificado',
      'Cobertura de propinas e despesas de subsistência essenciais'
    ],
    deadline: '2027-03-31',
    officialUrl: 'https://the.akdn/en/how-we-work/our-agencies/aga-khan-foundation',
    sourceName: 'Aga Khan Development Network Moçambique',
    notes: 'Candidaturas anuais abrem no primeiro trimestre através da delegação nacional da Fundação Aga Khan em Maputo.',
    coverage: 'Parcial',
    isVerified: true
  }
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'curso-1',
    title: 'Fundamentos de Marketing Digital e Presença Online',
    entity: 'Google Digital Skills for Africa',
    category: 'Marketing Digital',
    costType: 'Gratuito com Certificado',
    duration: '40 horas (Auto-didata)',
    certificateConfirmed: true,
    certificateDetails: 'Certificado oficial gratuito emitido pela Google e IAB Europe após conclusão dos 26 módulos e exame final.',
    description: 'Aprende a criar a presença digital do teu negócio ou perfil profissional: SEO, publicidade online, redes sociais e análise de audiência.',
    platformUrl: 'https://grow.google/intl/africa/',
    language: 'Português',
    level: 'Iniciante',
    isVerified: true
  },
  {
    id: 'curso-2',
    title: 'Introdução à Cibersegurança e Segurança Digital',
    entity: 'Cisco Networking Academy (Skills for All)',
    category: 'Informática & Fundamentos',
    costType: 'Gratuito com Certificado',
    duration: '6 horas',
    certificateConfirmed: true,
    certificateDetails: 'Crachá digital e certificado de conclusão oficial da Cisco aceites no LinkedIn e no mercado de TI.',
    description: 'Compreende os princípios de proteção de dados pessoais na Internet, ataques de phishing, segurança em redes sem fios e navegação segura em telemóveis.',
    platformUrl: 'https://www.skillsforall.com/',
    language: 'Português',
    level: 'Iniciante',
    isVerified: true
  },
  {
    id: 'curso-3',
    title: 'Elements of AI: Introdução Prática à Inteligência Artificial',
    entity: 'Universidade de Helsínquia & Reaktor',
    category: 'Inteligência Artificial',
    costType: 'Gratuito com Certificado',
    duration: '30 horas',
    certificateConfirmed: true,
    certificateDetails: 'Certificado universitário europeu com 2 créditos ECTS disponível gratuitamente para todos os participantes que completem os exercícios.',
    description: 'Curso pioneiro e desmistificado sem necessidade de matemática complexa. Aprende o que é IA, machine learning, redes neuronais e ética dos algoritmos.',
    platformUrl: 'https://www.elementsofai.pt/',
    language: 'Português',
    level: 'Iniciante',
    isVerified: true
  },
  {
    id: 'curso-4',
    title: 'Inglês para Carreira e Comunicação Profissional',
    entity: 'British Council & Open University',
    category: 'Inglês',
    costType: 'Gratuito',
    duration: '16 horas',
    certificateConfirmed: false,
    certificateDetails: 'Material didático aberto e exercícios de audição e escrita de livre acesso.',
    description: 'Desenvolve vocabulário para entrevistas de emprego, redação de e-mails profissionais em inglês e apresentações formais.',
    platformUrl: 'https://learnenglish.britishcouncil.org/',
    language: 'Inglês / Português',
    level: 'Intermédio',
    isVerified: true
  },
  {
    id: 'curso-5',
    title: 'Design Gráfico com Ferramentas Livres e Canva',
    entity: 'Fundação Bradesco - Escola Virtual',
    category: 'Design Gráfico',
    costType: 'Gratuito com Certificado',
    duration: '20 horas',
    certificateConfirmed: true,
    certificateDetails: 'Certificado emitido digitalmente pela Fundação Bradesco.',
    description: 'Princípios de harmonia de cores, tipografia, composição de cartazes para redes sociais e identidade visual básica para pequenos empreendimentos.',
    platformUrl: 'https://www.ev.org.br/',
    language: 'Português',
    level: 'Iniciante',
    isVerified: true
  },
  {
    id: 'curso-6',
    title: 'HTML, CSS e JavaScript Moderno para a Web',
    entity: 'MDN Web Docs & freeCodeCamp',
    category: 'Programação & Web',
    costType: 'Gratuito com Certificado',
    duration: '300 horas práticas',
    certificateConfirmed: true,
    certificateDetails: 'Certificação de Responsive Web Design verificada pelo freeCodeCamp com projetos reais avaliados.',
    description: 'Currículo passo a passo para construir páginas web responsivas que funcionam em qualquer telemóvel e computador.',
    platformUrl: 'https://www.freecodecamp.org/portuguese/',
    language: 'Português',
    level: 'Iniciante',
    isVerified: true
  },
  {
    id: 'curso-7',
    title: 'Gestão Financeira para Pequenos Negócios e Poupança',
    entity: 'Escola Virtual do Governo / SEBRAE & Parceiros PALOP',
    category: 'Gestão & Negócios',
    costType: 'Gratuito com Certificado',
    duration: '15 horas',
    certificateConfirmed: true,
    certificateDetails: 'Certificado de conclusão emitido após os testes práticos.',
    description: 'Como calcular o preço de venda, separar finanças pessoais do negócio, controlo de caixa diário e gestão de stock.',
    platformUrl: 'https://www.sebrae.com.br/sites/PortalSebrae/cursosonline',
    language: 'Português',
    level: 'Iniciante',
    isVerified: true
  },
  {
    id: 'curso-8',
    title: 'Fotografia e Criação de Conteúdo com Telemóvel',
    entity: 'Hub Juventude Digital 360° (Guia Prático Aberto)',
    category: 'Fotografia & Vídeo',
    costType: 'Gratuito',
    duration: 'Guia Prático e Exercícios',
    certificateConfirmed: false,
    certificateDetails: 'Guia aberto em formato de tutoriais acessíveis com dados móveis baixos.',
    description: 'Técnicas de iluminação natural, enquadramento e edição de vídeo rápida em smartphones populares para destacar produtos locais e reportagens comunitárias.',
    platformUrl: '#guia-fotografia',
    language: 'Português',
    level: 'Iniciante',
    isVerified: true
  }
];

export const INITIAL_ENTREPRENEURSHIP: EntrepreneurshipProgram[] = [
  {
    id: 'ent-1',
    title: 'IdeiaLab - Incubação e Aceleração de Startups em Moçambique',
    organization: 'IdeiaLab Moçambique',
    category: 'Incubadora',
    location: 'Maputo com programas extensivos a outras províncias',
    targetAudience: 'Jovens com ideias inovadoras ou microempresas em fase inicial',
    fundingAmountOrSupport: 'Mentoria intensiva, espaço de trabalho, ligação a investidores e parceiros de negócio',
    description: 'Uma das mais reconhecidas entidades de apoio ao empreendedorismo em Moçambique, com programas como o FemTech e Bootcamps de inovação empresarial.',
    requirements: [
      'Equipa dedicada ou empreendedor motivado',
      'Ideia ou negócio com potencial de resolução de problemas locais',
      'Disponibilidade para sessões presenciais ou híbridas'
    ],
    deadlineOrStatus: 'Inscrições por convocatórias sazonais abertas',
    officialUrl: 'https://www.ideialab.biz/',
    isVerified: true
  },
  {
    id: 'ent-2',
    title: 'Incubadora Standard Bank Moçambique',
    organization: 'Standard Bank Moçambique',
    category: 'Aceleração',
    location: 'Nacional (Plataformas Híbridas)',
    targetAudience: 'Jovens inovadores nas áreas de fintech, agritech e serviços digitais',
    fundingAmountOrSupport: 'Acesso a mentores bancários, rede empresarial e desafios com prémios de capital semente',
    description: 'Espaço desenhado para fomentar o ecossistema empreendedor através de hackathons, capacitação em modelos de receita e acesso ao ecossistema corporativo.',
    requirements: [
      'Projetos com recurso a tecnologia ou modelo de negócio escalável',
      'Apresentação de protótipo ou plano preliminar'
    ],
    deadlineOrStatus: 'Eventos e concursos regulares divulgados no portal do banco',
    officialUrl: 'https://www.standardbank.co.mz/',
    isVerified: true
  },
  {
    id: 'ent-3',
    title: 'FNDS - Fundo Nacional de Desenvolvimento Sustentável (Linhas Rurais e Agrícolas)',
    organization: 'Governo de Moçambique (FNDS / Ministério da Agricultura)',
    category: 'Programa de Financiamento',
    location: 'Zambézia, Nampula, Sofala, Cabo Delgado e outras províncias',
    targetAudience: 'Jovens agro-empreendedores, cooperativas rurais e associações locais',
    fundingAmountOrSupport: 'Subsídios correspondentes e microcrédito orientado para aquisição de equipamentos e insumos agrícolas',
    description: 'Instrumento do Estado moçambicano para financiar iniciativas de conservação sustentável, valorização da cadeia de valor do caju, gergelim, hortícolas e piscicultura.',
    requirements: [
      'Registo legal ou conformidade associativa comunitária',
      'Plano de exploração sustentável',
      'Proposta submetida dentro dos prazos dos editais provinciais'
    ],
    deadlineOrStatus: 'Editais publicados periodicamente no Boletim da República e portal FNDS',
    officialUrl: 'https://www.fnds.gov.mz/',
    isVerified: true
  },
  {
    id: 'ent-4',
    title: 'ANJE Moçambique - Rede de Apoio e Advocacia do Jovem Empreendedor',
    organization: 'Associação Nacional de Jovens Empresários',
    category: 'Incubadora',
    location: 'Sede Nacional e Representações Provinciais',
    targetAudience: 'Jovens até 35 anos que lideram ou pretendem criar negócios formais',
    fundingAmountOrSupport: 'Aconselhamento jurídico para constituição de empresas, certificação e feiras comerciais',
    description: 'Associação que representa a voz dos jovens empresários moçambicanos perante as instituições governamentais e fóruns económicos internacionais.',
    requirements: [
      'Registo de membro jovem empreendedor',
      'Participação ativa nas iniciativas associativas'
    ],
    deadlineOrStatus: 'Filiação contínua aberta',
    officialUrl: 'https://www.facebook.com/anjemocambique/',
    isVerified: true
  }
];

export const INITIAL_TECH_GUIDES: TechToolGuide[] = [
  {
    id: 'tech-1',
    title: 'Guia Prático: Como Usar Inteligência Artificial para Estudo e Trabalho Ético',
    category: 'Inteligência Artificial',
    summary: 'Aprende a tirar proveito de assistentes de IA gratuitos para resumir matérias, treinar para entrevistas e estruturar projetos sem cometer plágio.',
    practicalSteps: [
      '1. Escolhe uma ferramenta gratuita com acesso web (ex: Google Gemini ou ChatGPT na versão básica).',
      '2. Sê específico nos teus pedidos: em vez de pedir "faz um trabalho sobre Moçambique", pede "faz uma lista de 5 tópicos principais sobre o Rio Zambeze para alunos da 10ª classe".',
      '3. Nunca copies e coles respostas sem verificar as fontes em livros ou documentos oficiais.',
      '4. Usa a IA como um professor particular de redação e não como substituto do teu próprio pensamento crítico.'
    ],
    toolUrl: 'https://gemini.google.com/',
    isFree: true,
    difficulty: 'Iniciante'
  },
  {
    id: 'tech-2',
    title: 'Cria o Teu Primeiro Site Gratuito com GitHub Pages ou Netlify',
    category: 'Criação de Sites',
    summary: 'Passo a passo descomplicado para colocar uma página na Internet sem pagar alojamento nem domínio no primeiro ano.',
    practicalSteps: [
      '1. Cria uma conta gratuita no GitHub (github.com).',
      '2. Constrói a tua página em HTML simples ou usa um modelo limpo de apresentação pessoal.',
      '3. Cria um repositório com o nome "omeuprojeto" e faz o envio (upload) dos ficheiros index.html.',
      '4. Vai a Settings > Pages e seleciona a branch "main" para publicar o teu site no endereço nome-utilizador.github.io/omeuprojeto.',
      '5. Para projetos em React ou Vite, liga gratuitamente a tua conta ao Netlify (netlify.com) para compilação automática.'
    ],
    toolUrl: 'https://pages.github.com/',
    isFree: true,
    difficulty: 'Iniciante'
  },
  {
    id: 'tech-3',
    title: 'Segurança na Internet e Proteção contra Golpes em Moçambique',
    category: 'Segurança na Internet',
    summary: 'Dicas cruciais para proteger a tua conta de M-Pesa, e-Mola, contas de Facebook e WhatsApp contra burlas digitais frequentes.',
    practicalSteps: [
      '1. NUNCA partilhes o teu PIN de carteira móvel com ninguém, nem mesmo com supostos agentes de operadoras.',
      '2. Ativa a verificação em dois passos no teu WhatsApp (Definições > Conta > Verificação em duas etapas com código de 6 dígitos).',
      '3. Desconfia de mensagens que prometem "ofertas de emprego com pagamento adiantado para exames médicos" — empresas sérias não cobram para contratar.',
      '4. Verifica sempre o endereço do site antes de introduzir senhas em computadores partilhados de cibercafés.'
    ],
    isFree: true,
    difficulty: 'Iniciante'
  },
  {
    id: 'tech-4',
    title: 'Ferramentas Gratuitas Essenciais para Produtividade e Estudos',
    category: 'Ferramentas Digitais',
    summary: 'Conjunto de aplicações móveis e de computador que funcionam com baixo consumo de dados móveis.',
    practicalSteps: [
      'Google Documentos e Folhas de Cálculo: Trabalha e guarda ficheiros online que podes descarregar em PDF a qualquer momento.',
      'Canva Gratuito: Cria cartões de visita, logotipos para o teu negócio e cartazes informativos sem precisar de computador potente.',
      'Trello: Organiza as tuas tarefas diárias e trabalhos em grupo escolares em cartões visuais simples.',
      'Obsidian ou Google Keep: Mantém as tuas notas de estudo sempre sincronizadas no telemóvel.'
    ],
    toolUrl: 'https://www.canva.com/',
    isFree: true,
    difficulty: 'Iniciante'
  }
];

export const INITIAL_IDEAS: IdeaProject[] = [
  {
    id: 'idea-1',
    projectName: 'Sistema de Alerta Comunitário de Cheias via SMS na Bacia do Licungo',
    area: 'Tecnologia',
    province: 'Zambézia',
    district: 'Mocuba e Maganja da Costa',
    problem: 'Durante a época das chuvas, comunidades ribeirinhas perdem culturas e habitações por falta de aviso antecipado e falhas de sinal de rádio.',
    solution: 'Criação de um sistema simples baseado em sensores artesanais de nível de água que enviam mensagens automáticas de texto (SMS) gratuitas aos líderes comunitários e comités locais de gestão de riscos.',
    targetBeneficiaries: 'Mais de 3.500 famílias e pequenos camponeses ao longo da bacia do Licungo.',
    resourcesNeeded: 'Microcontroladores Arduino/ESP32, baterias solares de 12V, cartões SIM com pacote de dados/SMS e apoio técnico de mentores de telecomunicações.',
    projectPhase: 'Protótipo / Piloto',
    authorName: 'Moisés Nhantumbo & Grupo Jovem Inovador de Mocuba',
    contactEmailOrPhone: 'licungo.alerta@exemplo.org.mz',
    publicConsentGiven: true,
    status: 'aprovada_em_destaque',
    submittedAt: '2026-10-18',
    likesCount: 38
  },
  {
    id: 'idea-2',
    projectName: 'Biblioteca Digital Offline e Estação Solar de Estudo para Escolas de Quelimane',
    area: 'Educação',
    province: 'Zambézia',
    district: 'Quelimane',
    problem: 'Muitos estudantes secundários não têm livros escolares atualizados nem computadores em casa, e o custo dos pacotes de Internet é inacessível para descarregar manuais pesados.',
    solution: 'Instalação de pequenos servidores locais "Raspberry Pi" que transmitem uma rede Wi-Fi local gratuita (sem necessidade de ligação à Internet global), permitindo descarregar livros de domínio público, módulos do IEDA e vídeos educativos.',
    targetBeneficiaries: 'Mais de 1.200 alunos do ensino secundário e candidatos a exames nacionais de admissão.',
    resourcesNeeded: '2 a 3 unidades de mini-computadores Raspberry Pi, cartões de memória de 128GB com acervo curricular aberto e um painel solar de 50W com bateria.',
    projectPhase: 'Pesquisa e Validação',
    authorName: 'Amina Selemane',
    contactEmailOrPhone: 'amina.quelimane@exemplo.org.mz',
    publicConsentGiven: true,
    status: 'aprovada_em_destaque',
    submittedAt: '2026-10-19',
    likesCount: 52
  },
  {
    id: 'idea-3',
    projectName: 'AgroConecta Zambézia: Feira Virtual de Escoamento de Hortícolas e Mandioca',
    area: 'Agricultura & Agronegócio',
    province: 'Zambézia',
    district: 'Nicoadala e Namacurra',
    problem: 'Os pequenos agricultores jovens vendem a preços irrisórios aos intermediários ou perdem produtos perecíveis antes de chegarem aos mercados urbanos de Quelimane.',
    solution: 'Catálogo semanal em formato digital leve (PDF e catálogo WhatsApp) que liga diretamente produtores de Nicoadala a restaurantes, pensões e famílias em Quelimane, com rota partilhada de transporte.',
    targetBeneficiaries: '45 jovens agricultores familiares organizados em associações locais.',
    resourcesNeeded: 'Formação básica em embalagem de produtos, balança digital comunitária e organização logística de transporte conjunto.',
    projectPhase: 'Em Atividade Inicial',
    authorName: 'Celso Martins Cuambe',
    contactEmailOrPhone: 'agroconecta.zambezia@exemplo.org.mz',
    publicConsentGiven: true,
    status: 'aprovada_em_destaque',
    submittedAt: '2026-10-21',
    likesCount: 44
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: 'noticia-1',
    title: 'Governo de Moçambique e Parceiros Reforçam Programas de Competências Digitais para Jovens',
    category: 'Educação',
    imageUrl: '/src/assets/images/digital_skills_coding_students_1792781138961.jpg',
    summary: 'Iniciativas de capacitação tecnológica ganham prioridade nas províncias do centro e norte, focando na empregabilidade e transição verde.',
    content: 'O Ministério da Ciência, Tecnologia e Ensino Superior, em coordenação com instituições de formação profissional (IFP e INEFP), tem vindo a expandir módulos de literacia informática e manutenção de equipamentos em várias províncias moçambicanas, incluindo a Zambézia. A meta é permitir que mais jovens alcancem certificações reconhecidas internacionalmente.',
    publishedAt: '2026-10-22',
    sourceName: 'Portal Oficial do MCTES / Notícias de Moçambique',
    sourceUrl: 'https://www.mctestp.gov.mz/',
    isDemonstration: false
  },
  {
    id: 'noticia-2',
    title: 'Província da Zambézia: Jovens Criadores Apresentam Soluções Comunitárias em Feira Tecnológica',
    category: 'Zambézia & Moçambique',
    imageUrl: '/src/assets/images/ideas_lab_innovation_mozambique_1792781139148.jpg',
    summary: 'Inovadores de Quelimane, Mocuba e Gurúè demonstraram protótipos de energia solar e aproveitamento sustentável de recursos locais.',
    content: 'Durante o encontro juvenil provincial realizado em Quelimane, foram destacados projetos nas áreas de processamento de mandioca, reaproveitamento de biomassa e ferramentas de ensino a distância. A rede Juventude Digital 360° esteve presente a recolher ideias para documentação e apoio comunitário.',
    publishedAt: '2026-10-18',
    sourceName: 'Gabinete de Comunicação da Província da Zambézia / Cobertura Local',
    sourceUrl: 'https://inep.gov.mz/',
    isDemonstration: false
  },
  {
    id: 'noticia-3',
    title: 'Abertura da Temporada de Bolsas Internacionais de Mestrado para o Ano Académico 2027',
    category: 'Oportunidades',
    imageUrl: '/src/assets/images/hero_african_youth_tech_1792781137538.jpg',
    summary: 'Prazos para bolsas prestigiadas como Chevening, DAAD e Fundação Aga Khan entram na fase decisiva de submissão de ensaios e documentação.',
    content: 'Os estudantes moçambicanos finalistas ou já licenciados com intenção de prosseguir estudos de pós-graduação no estrangeiro com cobertura total de custos devem preparar atempadamente os seus certificados de equivalência, cartas de recomendação e projetos de pesquisa. Aconselha-se a verificação direta nos portais oficiais dos programas.',
    publishedAt: '2026-10-14',
    sourceName: 'Avisos Oficiais das Embaixadas e Secretariados de Bolsas',
    sourceUrl: 'https://ibe.gov.mz/',
    isDemonstration: false
  }
];
