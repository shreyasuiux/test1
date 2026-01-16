import React from 'react';
import { BrandManagementPage as BrandManagementPageComponent } from '../../components/BrandManagementPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function BrandManagementPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <BrandManagementPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default BrandManagementPage;
