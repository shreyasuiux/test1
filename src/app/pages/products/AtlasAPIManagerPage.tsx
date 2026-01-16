import React from 'react';
import { AtlasAPIManagerPage as AtlasAPIManagerPageComponent } from '../../components/AtlasAPIManagerPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function AtlasAPIManagerPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <AtlasAPIManagerPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default AtlasAPIManagerPage;
