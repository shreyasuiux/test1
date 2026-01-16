import React from 'react';
import { DigitalEngineeringPage as DigitalEngineeringPageComponent } from '../../components/DigitalEngineeringPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function DigitalEngineeringPage() {
  const {
    handleCloseClick,
    handleServiceClick,
    handleAIClick,
    handleProductClick,
    handleGrowWithUsClick,
    handleWhoWeAreItemClick,
    handleLogoClick,
  } = useRouterNavigation();

  return (
    <DigitalEngineeringPageComponent
      onClose={handleCloseClick}
      onServiceClick={handleServiceClick}
      onAIClick={handleAIClick}
      onProductClick={handleProductClick}
      onGrowWithUsClick={handleGrowWithUsClick}
      onWhoWeAreItemClick={handleWhoWeAreItemClick}
      onLogoClick={handleLogoClick}
      onGetStartedClick={() => {}}
    />
  );
}

export default DigitalEngineeringPage;
