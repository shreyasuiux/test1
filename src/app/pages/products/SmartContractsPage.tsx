import React from 'react';
import SmartContractsPage as SmartContractsPageComponent from '../../components/SmartContractsPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function SmartContractsPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <SmartContractsPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default SmartContractsPage;
