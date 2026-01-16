import React from 'react';
import NewsUpdatesPage as NewsUpdatesPageComponent from '../../components/NewsUpdatesPage';
import { useRouterNavigation } from '../../hooks/useRouterNavigation';

function NewsUpdatesPage() {
  const { handleCloseClick, handleServiceClick, handleAIClick, handleProductClick, handleGrowWithUsClick, handleWhoWeAreItemClick, handleLogoClick } = useRouterNavigation();
  return <NewsUpdatesPageComponent onClose={handleCloseClick} onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => {}} />;
}

export default NewsUpdatesPage;
