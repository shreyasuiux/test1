import React from 'react';
import BFSIAgentsPage as BFSIAgentsPageComponent from '../../components/BFSIAgentsPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function BFSIAgentsPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <BFSIAgentsPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default BFSIAgentsPage;
