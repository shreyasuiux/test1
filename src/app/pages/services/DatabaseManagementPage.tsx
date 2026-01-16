import React from 'react';
import { DatabaseManagementPage as DatabaseManagementPageComponent } from '../../components/DatabaseManagementPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function DatabaseManagementPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <DatabaseManagementPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default DatabaseManagementPage;
