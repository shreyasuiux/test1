import React from 'react';
import { BigDataPage as BigDataPageComponent } from '../../components/BigDataPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function BigDataPage() {
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
    <BigDataPageComponent
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

export default BigDataPage;
