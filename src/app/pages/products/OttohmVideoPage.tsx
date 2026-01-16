import React from 'react';
import OttohmVideoPage as OttohmVideoPageComponent from '../../components/OttohmVideoPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function OttohmVideoPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <OttohmVideoPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default OttohmVideoPage;
