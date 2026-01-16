import React from 'react';
import { CaseStudiesPage as CaseStudiesPageComponent } from '../components/CaseStudiesPage';
import { useRouterNavigation } from '../hooks/useRouterNavigation';

function CaseStudiesPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <CaseStudiesPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default CaseStudiesPage;
