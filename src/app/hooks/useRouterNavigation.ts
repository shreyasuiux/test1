/**
 * CUSTOM HOOK FOR ROUTER-BASED NAVIGATION
 * Provides navigation handlers that work with React Router
 */

import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { ROUTES } from '../routes';

export function useRouterNavigation() {
  const navigate = useNavigate();

  const handleServiceClick = useCallback((serviceTitle: string) => {
    const routeMap: Record<string, string> = {
      'Cloud Practice': ROUTES.SERVICES.CLOUD_PRACTICE,
      'Digital & Product Engineering': ROUTES.SERVICES.DIGITAL_ENGINEERING,
      'Big Data': ROUTES.SERVICES.BIG_DATA,
      'App Modernization': ROUTES.SERVICES.APP_MODERNIZATION,
      'Security': ROUTES.SERVICES.SECURITY,
      'Database Management': ROUTES.SERVICES.DATABASE_MANAGEMENT,
      'ERP & Testing': ROUTES.SERVICES.ERP_TESTING,
    };
    const route = routeMap[serviceTitle];
    if (route) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      navigate(route);
    }
  }, [navigate]);

  const handleProductClick = useCallback((productTitle: string) => {
    const routeMap: Record<string, string> = {
      'Agent Studio': ROUTES.PRODUCTS.AGENT_STUDIO,
      'Atlas API Manager': ROUTES.PRODUCTS.ATLAS_API_MANAGER,
      'Ottohm Video': ROUTES.PRODUCTS.OTTOHM_VIDEO,
      'ITSM Ticketing': ROUTES.PRODUCTS.ITSM_TICKETING,
      'AI Ops Platform': ROUTES.PRODUCTS.AI_OPS,
      'Smart Contracts': ROUTES.PRODUCTS.SMART_CONTRACTS,
    };
    const route = routeMap[productTitle];
    if (route) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      navigate(route);
    }
  }, [navigate]);

  const handleAIClick = useCallback((aiTitle?: string) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (aiTitle === 'BFSI Agents') navigate(ROUTES.AI.BFSI_AGENTS);
    else if (aiTitle === 'Brand Management Agents') navigate(ROUTES.AI.BRAND_MANAGEMENT);
    else navigate(ROUTES.AI.ROOT);
  }, [navigate]);

  const handleWhoWeAreItemClick = useCallback((item: string) => {
    const routeMap: Record<string, string> = {
      'Our Team': ROUTES.COMPANY.OUR_TEAM,
      'About Us': ROUTES.COMPANY.ABOUT_US,
      'Partners': ROUTES.COMPANY.PARTNERS,
      'Careers': ROUTES.COMPANY.CAREERS,
      'News': ROUTES.COMPANY.NEWS_UPDATES,
      'News & Updates': ROUTES.COMPANY.NEWS_UPDATES,
    };
    const route = routeMap[item];
    if (route) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      navigate(route);
    }
  }, [navigate]);

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(ROUTES.HOME);
  }, [navigate]);

  const handleGrowWithUsClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(ROUTES.CASE_STUDIES);
  }, [navigate]);

  const handleCloseClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(ROUTES.HOME);
  }, [navigate]);

  return {
    handleServiceClick,
    handleProductClick,
    handleAIClick,
    handleWhoWeAreItemClick,
    handleLogoClick,
    handleGrowWithUsClick,
    handleCloseClick,
    navigate,
  };
}
