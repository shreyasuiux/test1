/**
 * HOME PAGE COMPONENT
 * Wrapper for the home page (Desktop72 main content)
 */

import React from 'react';
import { Footer } from '../components/Footer';
import Desktop72 from '../../imports/Desktop72';
import { useRouterNavigation } from '../hooks/useRouterNavigation';

function HomePage() {
  const {
    handleServiceClick,
    handleProductClick,
    handleWhoWeAreItemClick,
    handleLogoClick,
  } = useRouterNavigation();

  return (
    <div>
      <Desktop72 onSearchClick={() => {}} />
      <Footer 
        onServiceClick={handleServiceClick}
        onProductClick={handleProductClick}
        onWhoWeAreItemClick={handleWhoWeAreItemClick}
        onLogoClick={handleLogoClick}
      />
    </div>
  );
}

export default HomePage;