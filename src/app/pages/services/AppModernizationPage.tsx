import React from 'react';
import { AppModernizationPage as AppModernizationPageComponent } from '../../components/AppModernizationPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function AppModernizationPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <AppModernizationPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default AppModernizationPage;
