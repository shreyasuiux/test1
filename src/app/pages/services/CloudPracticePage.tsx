/**
 * CLOUD PRACTICE SERVICE PAGE
 */

import React from 'react';
import { CloudPracticePage as CloudPracticePageComponent } from '../../components/CloudPracticePage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function CloudPracticePage() {
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
    <CloudPracticePageComponent
      onClose={handleCloseClick}
      onServiceClick={handleServiceClick}
      onAIClick={handleAIClick}
      onProductClick={handleProductClick}
      onGrowWithUsClick={handleGrowWithUsClick}
      onWhoWeAreItemClick={handleWhoWeAreItemClick}
      onLogoClick={handleLogoClick}
      onGetStartedClick={() => {/* Handle get started */}}
    />
  );
}

export default CloudPracticePage;