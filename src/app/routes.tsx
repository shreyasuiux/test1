/**
 * CENTRALIZED ROUTING CONFIGURATION
 * ────────────────────────────────────────────────────────────────────────────
 * 
 * DEVELOPER HANDOFF NOTE:
 * Each page must render correctly on initial load when accessed directly by its URL.
 * Routing must be URL-driven, not state-driven.
 * 
 * ────────────────────────────────────────────────────────────────────────────
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load page components for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const CloudPracticePage = React.lazy(() => import('./pages/services/CloudPracticePage'));
const DigitalEngineeringPage = React.lazy(() => import('./pages/services/DigitalEngineeringPage'));
const BigDataPage = React.lazy(() => import('./pages/services/BigDataPage'));
const AppModernizationPage = React.lazy(() => import('./pages/services/AppModernizationPage'));
const SecurityPage = React.lazy(() => import('./pages/services/SecurityPage'));
const DatabaseManagementPage = React.lazy(() => import('./pages/services/DatabaseManagementPage'));
const ERPTestingPage = React.lazy(() => import('./pages/services/ERPTestingPage'));

const AgentStudioPage = React.lazy(() => import('./pages/products/AgentStudioPage'));
const AtlasAPIManagerPage = React.lazy(() => import('./pages/products/AtlasAPIManagerPage'));
const OttohmVideoPage = React.lazy(() => import('./pages/products/OttohmVideoPage'));
const ITSMTicketingPage = React.lazy(() => import('./pages/products/ITSMTicketingPage'));
const AIOpsPage = React.lazy(() => import('./pages/products/AIOpsPage'));
const SmartContractsPage = React.lazy(() => import('./pages/products/SmartContractsPage'));

const AIPage = React.lazy(() => import('./pages/ai/AIPage'));
const BFSIAgentsPage = React.lazy(() => import('./pages/ai/BFSIAgentsPage'));
const BrandManagementPage = React.lazy(() => import('./pages/ai/BrandManagementPage'));

const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));

const OurTeamPage = React.lazy(() => import('./pages/company/OurTeamPage'));
const AboutUsPage = React.lazy(() => import('./pages/company/AboutUsPage'));
const PartnersPage = React.lazy(() => import('./pages/company/PartnersPage'));
const CareersPage = React.lazy(() => import('./pages/company/CareersPage'));
const NewsUpdatesPage = React.lazy(() => import('./pages/company/NewsUpdatesPage'));

/**
 * URL PATH CONSTANTS
 * Use these constants throughout the app for consistency
 */
export const ROUTES = {
  HOME: '/',
  
  // Services
  SERVICES: {
    CLOUD_PRACTICE: '/services/cloud-practice',
    DIGITAL_ENGINEERING: '/services/digital-engineering',
    BIG_DATA: '/services/big-data',
    APP_MODERNIZATION: '/services/app-modernization',
    SECURITY: '/services/security',
    DATABASE_MANAGEMENT: '/services/database-management',
    ERP_TESTING: '/services/erp-testing',
  },
  
  // Products
  PRODUCTS: {
    AGENT_STUDIO: '/products/agent-studio',
    ATLAS_API_MANAGER: '/products/atlas-api-manager',
    OTTOHM_VIDEO: '/products/ottohm-video',
    ITSM_TICKETING: '/products/itsm-ticketing',
    AI_OPS: '/products/ai-ops',
    SMART_CONTRACTS: '/products/smart-contracts',
  },
  
  // AI Solutions
  AI: {
    ROOT: '/ai',
    BFSI_AGENTS: '/ai/bfsi-agents',
    BRAND_MANAGEMENT: '/ai/brand-management',
  },
  
  // Case Studies
  CASE_STUDIES: '/case-studies',
  
  // Company
  COMPANY: {
    OUR_TEAM: '/company/our-team',
    ABOUT_US: '/company/about-us',
    PARTNERS: '/company/partners',
    CAREERS: '/company/careers',
    NEWS_UPDATES: '/company/news-updates',
  },
} as const;

/**
 * Main App Routes Component
 */
export function AppRoutes() {
  return (
    <React.Suspense 
      fallback={
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a0a2e]">
          <div className="text-white">Loading...</div>
        </div>
      }
    >
      <Routes>
        {/* Home */}
        <Route path={ROUTES.HOME} element={<HomePage />} />
        
        {/* Services */}
        <Route path={ROUTES.SERVICES.CLOUD_PRACTICE} element={<CloudPracticePage />} />
        <Route path={ROUTES.SERVICES.DIGITAL_ENGINEERING} element={<DigitalEngineeringPage />} />
        <Route path={ROUTES.SERVICES.BIG_DATA} element={<BigDataPage />} />
        <Route path={ROUTES.SERVICES.APP_MODERNIZATION} element={<AppModernizationPage />} />
        <Route path={ROUTES.SERVICES.SECURITY} element={<SecurityPage />} />
        <Route path={ROUTES.SERVICES.DATABASE_MANAGEMENT} element={<DatabaseManagementPage />} />
        <Route path={ROUTES.SERVICES.ERP_TESTING} element={<ERPTestingPage />} />
        
        {/* Products */}
        <Route path={ROUTES.PRODUCTS.AGENT_STUDIO} element={<AgentStudioPage />} />
        <Route path={ROUTES.PRODUCTS.ATLAS_API_MANAGER} element={<AtlasAPIManagerPage />} />
        <Route path={ROUTES.PRODUCTS.OTTOHM_VIDEO} element={<OttohmVideoPage />} />
        <Route path={ROUTES.PRODUCTS.ITSM_TICKETING} element={<ITSMTicketingPage />} />
        <Route path={ROUTES.PRODUCTS.AI_OPS} element={<AIOpsPage />} />
        <Route path={ROUTES.PRODUCTS.SMART_CONTRACTS} element={<SmartContractsPage />} />
        
        {/* AI Solutions */}
        <Route path={ROUTES.AI.ROOT} element={<AIPage />} />
        <Route path={ROUTES.AI.BFSI_AGENTS} element={<BFSIAgentsPage />} />
        <Route path={ROUTES.AI.BRAND_MANAGEMENT} element={<BrandManagementPage />} />
        
        {/* Case Studies */}
        <Route path={ROUTES.CASE_STUDIES} element={<CaseStudiesPage />} />
        
        {/* Company */}
        <Route path={ROUTES.COMPANY.OUR_TEAM} element={<OurTeamPage />} />
        <Route path={ROUTES.COMPANY.ABOUT_US} element={<AboutUsPage />} />
        <Route path={ROUTES.COMPANY.PARTNERS} element={<PartnersPage />} />
        <Route path={ROUTES.COMPANY.CAREERS} element={<CareersPage />} />
        <Route path={ROUTES.COMPANY.NEWS_UPDATES} element={<NewsUpdatesPage />} />
      </Routes>
    </React.Suspense>
  );
}
