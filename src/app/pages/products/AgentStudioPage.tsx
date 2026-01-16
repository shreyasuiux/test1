import React from 'react';
import { AgentStudioPage as AgentStudioPageComponent } from '../../components/AgentStudioPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function AgentStudioPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <AgentStudioPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default AgentStudioPage;
