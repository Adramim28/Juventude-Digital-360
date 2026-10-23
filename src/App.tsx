/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  PageId,
  Opportunity,
  Scholarship,
  Course,
  NewsItem,
  IdeaProject,
  ContactSubmission
} from './types';
import { StorageService } from './services/storage';

// Common Components
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { OfficialLinkModal } from './components/common/OfficialLinkModal';
import { ReportVagaModal } from './components/common/ReportVagaModal';
import { SuggestCourseModal } from './components/common/SuggestCourseModal';

// Pages
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { CoursesPage } from './pages/CoursesPage';
import { EntrepreneurshipPage } from './pages/EntrepreneurshipPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { IdeasLabPage } from './pages/IdeasLabPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { AdminPage } from './pages/AdminPage';

// Interactive Tools
import { CVBuilder } from './components/tools/CVBuilder';
import { BusinessPlanGenerator } from './components/tools/BusinessPlanGenerator';
import { PublishingGuide } from './components/tools/PublishingGuide';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');

  // Application Data States (synced with StorageService)
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [ideas, setIdeas] = useState<IdeaProject[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);

  // Admin Auth state
  const [isAdmin, setIsAdmin] = useState(false);

  // Modals
  const [officialModalData, setOfficialModalData] = useState<{
    isOpen: boolean;
    title: string;
    sourceName: string;
    url: string;
    isExpired?: boolean;
  }>({
    isOpen: false,
    title: '',
    sourceName: '',
    url: '',
    isExpired: false
  });

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);

  // Reload data from local storage
  const loadData = () => {
    setOpportunities(StorageService.getOpportunities());
    setScholarships(StorageService.getScholarships());
    setCourses(StorageService.getCourses());
    setNews(StorageService.getNews());
    setIdeas(StorageService.getIdeas());
    setContacts(StorageService.getContacts());
    setIsAdmin(StorageService.isAdminLoggedIn());
  };

  useEffect(() => {
    loadData();
  }, []);

  // Navigation handler
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open official external link safely with modal
  const handleOpenOfficialLink = (item: {
    title: string;
    sourceName: string;
    url: string;
    isExpired?: boolean;
  }) => {
    setOfficialModalData({
      isOpen: true,
      title: item.title,
      sourceName: item.sourceName,
      url: item.url,
      isExpired: item.isExpired
    });
  };

  const handleLikeIdea = (id: string) => {
    StorageService.likeIdea(id);
    setIdeas(StorageService.getIdeas());
  };

  const handleIdeaSubmitted = (newIdea: IdeaProject) => {
    setIdeas(StorageService.getIdeas());
  };

  const handleOpportunityAdded = (newOpp: Opportunity) => {
    setOpportunities(StorageService.getOpportunities());
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-[#151515]">
      {/* Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} isAdmin={isAdmin} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'inicio' && (
          <HomePage
            onNavigate={handleNavigate}
            opportunities={opportunities}
            scholarships={scholarships}
            courses={courses}
            news={news}
            ideas={ideas}
            onOpenOfficialLink={handleOpenOfficialLink}
            onLikeIdea={handleLikeIdea}
          />
        )}

        {currentPage === 'emprego' && (
          <JobsPage
            opportunities={opportunities}
            onOpenReportModal={() => setIsReportModalOpen(true)}
            onNavigateToCV={() => handleNavigate('criar-cv')}
            onOpenOfficialLink={handleOpenOfficialLink}
          />
        )}

        {currentPage === 'bolsas' && (
          <ScholarshipsPage
            scholarships={scholarships}
            onOpenOfficialLink={handleOpenOfficialLink}
          />
        )}

        {currentPage === 'cursos' && (
          <CoursesPage
            courses={courses}
            onOpenSuggestModal={() => setIsSuggestModalOpen(true)}
            onOpenOfficialLink={handleOpenOfficialLink}
          />
        )}

        {currentPage === 'empreendedorismo' && (
          <EntrepreneurshipPage
            programs={StorageService.getEntrepreneurship()}
            onNavigate={handleNavigate}
            onOpenOfficialLink={handleOpenOfficialLink}
          />
        )}

        {currentPage === 'tecnologia' && (
          <TechnologyPage
            guides={StorageService.getTechGuides()}
            onNavigate={handleNavigate}
            onOpenOfficialLink={handleOpenOfficialLink}
          />
        )}

        {currentPage === 'laboratorio' && (
          <IdeasLabPage
            ideas={ideas}
            onIdeaSubmitted={handleIdeaSubmitted}
            onLikeIdea={handleLikeIdea}
          />
        )}

        {currentPage === 'noticias' && (
          <NewsPage news={news} onOpenOfficialLink={handleOpenOfficialLink} />
        )}

        {currentPage === 'sobre' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'contactos' && <ContactsPage />}

        {currentPage === 'privacidade' && <PrivacyPolicyPage />}

        {currentPage === 'termos' && <TermsPage />}

        {currentPage === 'admin' && (
          <AdminPage
            onNavigate={handleNavigate}
            opportunities={opportunities}
            scholarships={scholarships}
            courses={courses}
            news={news}
            ideas={ideas}
            contacts={contacts}
            onDataChanged={loadData}
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
          />
        )}

        {/* Interactive Tools */}
        {currentPage === 'criar-cv' && (
          <CVBuilder onBack={() => handleNavigate('emprego')} />
        )}

        {currentPage === 'plano-negocio' && (
          <BusinessPlanGenerator onBack={() => handleNavigate('empreendedorismo')} />
        )}

        {currentPage === 'guia-publicacao' && (
          <PublishingGuide onBack={() => handleNavigate('inicio')} />
        )}
      </main>

      {/* Global Modals */}
      <OfficialLinkModal
        isOpen={officialModalData.isOpen}
        onClose={() => setOfficialModalData({ ...officialModalData, isOpen: false })}
        title={officialModalData.title}
        sourceName={officialModalData.sourceName}
        url={officialModalData.url}
        isExpired={officialModalData.isExpired}
      />

      <ReportVagaModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSuccess={handleOpportunityAdded}
      />

      <SuggestCourseModal
        isOpen={isSuggestModalOpen}
        onClose={() => setIsSuggestModalOpen(false)}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
