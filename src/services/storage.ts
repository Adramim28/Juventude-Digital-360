import {
  Opportunity,
  Scholarship,
  Course,
  EntrepreneurshipProgram,
  TechToolGuide,
  IdeaProject,
  NewsItem,
  ContactSubmission,
  UserCV,
  BusinessPlanCanvas
} from '../types';
import {
  INITIAL_OPPORTUNITIES,
  INITIAL_SCHOLARSHIPS,
  INITIAL_COURSES,
  INITIAL_ENTREPRENEURSHIP,
  INITIAL_TECH_GUIDES,
  INITIAL_IDEAS,
  INITIAL_NEWS
} from '../data/initialData';

const KEYS = {
  OPPORTUNITIES: 'jd360_opportunities',
  SCHOLARSHIPS: 'jd360_scholarships',
  COURSES: 'jd360_courses',
  ENTREPRENEURSHIP: 'jd360_entrepreneurship',
  TECH_GUIDES: 'jd360_tech_guides',
  IDEAS: 'jd360_ideas',
  NEWS: 'jd360_news',
  CONTACTS: 'jd360_contacts',
  CV: 'jd360_user_cv',
  BUSINESS_PLAN: 'jd360_business_plan',
  ADMIN_PIN: 'jd360_admin_pin',
  ADMIN_LOGGED: 'jd360_admin_logged'
};

function safeGet<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw);
  } catch (e) {
    console.error(`Error loading ${key} from localStorage`, e);
    return defaultValue;
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage`, e);
  }
}

export const StorageService = {
  // Opportunities
  getOpportunities(): Opportunity[] {
    return safeGet<Opportunity[]>(KEYS.OPPORTUNITIES, INITIAL_OPPORTUNITIES);
  },
  saveOpportunities(items: Opportunity[]): void {
    safeSet(KEYS.OPPORTUNITIES, items);
  },
  addOpportunity(item: Omit<Opportunity, 'id' | 'publishedAt'>): Opportunity {
    const list = this.getOpportunities();
    const newRecord: Opportunity = {
      ...item,
      id: 'opp-' + Date.now(),
      publishedAt: new Date().toISOString().split('T')[0]
    };
    list.unshift(newRecord);
    this.saveOpportunities(list);
    return newRecord;
  },
  deleteOpportunity(id: string): void {
    const list = this.getOpportunities().filter((o) => o.id !== id);
    this.saveOpportunities(list);
  },

  // Scholarships
  getScholarships(): Scholarship[] {
    return safeGet<Scholarship[]>(KEYS.SCHOLARSHIPS, INITIAL_SCHOLARSHIPS);
  },
  saveScholarships(items: Scholarship[]): void {
    safeSet(KEYS.SCHOLARSHIPS, items);
  },
  addScholarship(item: Omit<Scholarship, 'id'>): Scholarship {
    const list = this.getScholarships();
    const newRecord: Scholarship = {
      ...item,
      id: 'bolsa-' + Date.now()
    };
    list.unshift(newRecord);
    this.saveScholarships(list);
    return newRecord;
  },
  deleteScholarship(id: string): void {
    const list = this.getScholarships().filter((s) => s.id !== id);
    this.saveScholarships(list);
  },

  // Courses
  getCourses(): Course[] {
    return safeGet<Course[]>(KEYS.COURSES, INITIAL_COURSES);
  },
  saveCourses(items: Course[]): void {
    safeSet(KEYS.COURSES, items);
  },
  addCourse(item: Omit<Course, 'id'>): Course {
    const list = this.getCourses();
    const newRecord: Course = {
      ...item,
      id: 'curso-' + Date.now()
    };
    list.unshift(newRecord);
    this.saveCourses(list);
    return newRecord;
  },
  deleteCourse(id: string): void {
    const list = this.getCourses().filter((c) => c.id !== id);
    this.saveCourses(list);
  },

  // Entrepreneurship
  getEntrepreneurship(): EntrepreneurshipProgram[] {
    return safeGet<EntrepreneurshipProgram[]>(KEYS.ENTREPRENEURSHIP, INITIAL_ENTREPRENEURSHIP);
  },

  // Tech guides
  getTechGuides(): TechToolGuide[] {
    return safeGet<TechToolGuide[]>(KEYS.TECH_GUIDES, INITIAL_TECH_GUIDES);
  },

  // Ideas Lab
  getIdeas(): IdeaProject[] {
    return safeGet<IdeaProject[]>(KEYS.IDEAS, INITIAL_IDEAS);
  },
  saveIdeas(items: IdeaProject[]): void {
    safeSet(KEYS.IDEAS, items);
  },
  submitIdea(item: Omit<IdeaProject, 'id' | 'submittedAt' | 'likesCount' | 'status'>): IdeaProject {
    const list = this.getIdeas();
    const newIdea: IdeaProject = {
      ...item,
      id: 'idea-' + Date.now(),
      submittedAt: new Date().toISOString().split('T')[0],
      likesCount: 0,
      // If consent is given, set status to highlight so fellow youth can see it, otherwise in revision
      status: item.publicConsentGiven ? 'aprovada_em_destaque' : 'em_revisao'
    };
    list.unshift(newIdea);
    this.saveIdeas(list);
    return newIdea;
  },
  likeIdea(id: string): void {
    const list = this.getIdeas().map((idea) => {
      if (idea.id === id) {
        return { ...idea, likesCount: idea.likesCount + 1 };
      }
      return idea;
    });
    this.saveIdeas(list);
  },
  updateIdeaStatus(id: string, status: 'aprovada_em_destaque' | 'em_revisao' | 'arquivada'): void {
    const list = this.getIdeas().map((idea) => {
      if (idea.id === id) {
        return { ...idea, status };
      }
      return idea;
    });
    this.saveIdeas(list);
  },
  deleteIdea(id: string): void {
    const list = this.getIdeas().filter((i) => i.id !== id);
    this.saveIdeas(list);
  },

  // News
  getNews(): NewsItem[] {
    return safeGet<NewsItem[]>(KEYS.NEWS, INITIAL_NEWS);
  },
  saveNews(items: NewsItem[]): void {
    safeSet(KEYS.NEWS, items);
  },
  addNews(item: Omit<NewsItem, 'id' | 'publishedAt'>): NewsItem {
    const list = this.getNews();
    const newRecord: NewsItem = {
      ...item,
      id: 'noticia-' + Date.now(),
      publishedAt: new Date().toISOString().split('T')[0]
    };
    list.unshift(newRecord);
    this.saveNews(list);
    return newRecord;
  },
  deleteNews(id: string): void {
    const list = this.getNews().filter((n) => n.id !== id);
    this.saveNews(list);
  },

  // Contact / Feedback / Suggestions / Partnerships
  getContacts(): ContactSubmission[] {
    return safeGet<ContactSubmission[]>(KEYS.CONTACTS, []);
  },
  submitContact(item: Omit<ContactSubmission, 'id' | 'submittedAt' | 'isRead'>): ContactSubmission {
    const list = this.getContacts();
    const submission: ContactSubmission = {
      ...item,
      id: 'msg-' + Date.now(),
      submittedAt: new Date().toISOString(),
      isRead: false
    };
    list.unshift(submission);
    safeSet(KEYS.CONTACTS, list);
    return submission;
  },
  markContactRead(id: string): void {
    const list = this.getContacts().map((c) => (c.id === id ? { ...c, isRead: true } : c));
    safeSet(KEYS.CONTACTS, list);
  },
  deleteContact(id: string): void {
    const list = this.getContacts().filter((c) => c.id !== id);
    safeSet(KEYS.CONTACTS, list);
  },

  // CV Builder state
  getSavedCV(): UserCV | null {
    return safeGet<UserCV | null>(KEYS.CV, null);
  },
  saveCV(cv: UserCV): void {
    safeSet(KEYS.CV, cv);
  },

  // Business Model Canvas state
  getSavedBusinessPlan(): BusinessPlanCanvas | null {
    return safeGet<BusinessPlanCanvas | null>(KEYS.BUSINESS_PLAN, null);
  },
  saveBusinessPlan(plan: BusinessPlanCanvas): void {
    safeSet(KEYS.BUSINESS_PLAN, plan);
  },

  // Admin authentication (Local PIN / Password)
  getAdminPin(): string {
    return localStorage.getItem(KEYS.ADMIN_PIN) || 'admin360';
  },
  setAdminPin(pin: string): void {
    localStorage.setItem(KEYS.ADMIN_PIN, pin);
  },
  isAdminLoggedIn(): boolean {
    return sessionStorage.getItem(KEYS.ADMIN_LOGGED) === 'true';
  },
  setAdminLoggedIn(status: boolean): void {
    sessionStorage.setItem(KEYS.ADMIN_LOGGED, status ? 'true' : 'false');
  },

  // Reset to default
  resetAllData(): void {
    localStorage.removeItem(KEYS.OPPORTUNITIES);
    localStorage.removeItem(KEYS.SCHOLARSHIPS);
    localStorage.removeItem(KEYS.COURSES);
    localStorage.removeItem(KEYS.IDEAS);
    localStorage.removeItem(KEYS.NEWS);
    localStorage.removeItem(KEYS.CONTACTS);
  }
};
