import React from 'react';
import { ERPTestingPage as ERPTestingPageComponent } from '../../components/ERPTestingPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function ERPTestingPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <ERPTestingPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default ERPTestingPage;
