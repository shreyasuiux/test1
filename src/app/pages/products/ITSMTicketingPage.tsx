import React from 'react';
import ITSMTicketingPage as ITSMTicketingPageComponent from '../../components/ITSMTicketingPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function ITSMTicketingPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <ITSMTicketingPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default ITSMTicketingPage;
