# SPA Routing Architecture Documentation

## ⚠️ CRITICAL DEVELOPER HANDOFF NOTE

**Each page must render correctly on initial load when accessed directly by its URL.**

**Routing must be URL-driven, not state-driven.**

---

## Overview

This application uses **React Router v7** for client-side routing. All navigation is handled through React Router's declarative routing system, ensuring proper SPA behavior including:

- ✅ Deep linking support
- ✅ Browser back/forward buttons work correctly
- ✅ URL updates on every navigation
- ✅ Direct URL access works for all routes
- ✅ Page refresh preserves the current route
- ✅ SEO-friendly URLs with proper hierarchy

---

## Route Structure

### URL Hierarchy

```
/                                    → Home
/services/cloud-practice             → Cloud Practice Service
/services/digital-engineering        → Digital & Product Engineering
/services/big-data                   → Big Data Service
/services/app-modernization          → App Modernization Service
/services/security                   → Security Service
/services/database-management        → Database Management Service
/services/erp-testing                → ERP & Testing Service

/products/agent-studio               → Agent Studio Product
/products/atlas-api-manager          → Atlas API Manager Product
/products/ottohm-video               → Ottohm Video Product
/products/itsm-ticketing             → ITSM Ticketing Product
/products/ai-ops                     → AI Ops Platform Product
/products/smart-contracts            → Smart Contracts Product

/ai                                  → AI Solutions Landing
/ai/bfsi-agents                      → BFSI Agents Solution
/ai/brand-management                 → Brand Management Solution

/case-studies                        → Case Studies Page

/company/our-team                    → Our Team Page
/company/about-us                    → About Us Page
/company/partners                    → Partners Page
/company/careers                     → Careers Page
/company/news-updates                → News & Updates Page
```

---

## Key Files

### 1. `/src/app/routes.tsx`
**Centralized routing configuration.**
- Defines all routes and their components
- Exports `ROUTES` constant for consistent URL references throughout the app
- Uses lazy loading for better performance
- **DO NOT define routes anywhere else in the application**

### 2. `/src/app/hooks/useRouterNavigation.ts`
**Custom hook for navigation.**
- Provides navigation handlers that work with React Router
- Handles scroll-to-top on navigation
- Maps legacy titles/names to proper routes
- **Use this hook in all components that need navigation**

### 3. `/src/app/pages/`
**Page wrapper components.**
- Each page wraps an existing component from `/src/app/components/`
- Connects React Router navigation to component props
- Makes pages independently renderable when accessed via URL
- **DO NOT add business logic here - keep it in `/src/app/components/`**

### 4. `/src/main.tsx`
**Application entry point.**
- Wraps the app with `<BrowserRouter>` from React Router
- **DO NOT remove or modify the BrowserRouter wrapper**

### 5. `/src/app/App.tsx`
**Main app component.**
- Renders `<AppRoutes />` which contains all route definitions
- Manages global state (theme, search modal)
- **DO NOT add conditional rendering for pages here**

---

## Navigation Best Practices

### ✅ DO

```tsx
// Use the useRouterNavigation hook
import { useRouterNavigation } from '@/app/hooks/useRouterNavigation';

function MyComponent() {
  const { handleServiceClick, navigate } = useRouterNavigation();
  
  // Option 1: Use the helper functions
  return <button onClick={() => handleServiceClick('Cloud Practice')}>
    Go to Cloud Practice
  </button>;
  
  // Option 2: Use navigate() directly with ROUTES constants
  return <button onClick={() => navigate(ROUTES.SERVICES.CLOUD_PRACTICE)}>
    Go to Cloud Practice
  </button>;
}
```

```tsx
// Use React Router Link for navigation links
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/routes';

function MyNav() {
  return <Link to={ROUTES.SERVICES.CLOUD_PRACTICE}>
    Cloud Practice
  </Link>;
}
```

### ❌ DON'T

```tsx
// DON'T use useState to show/hide pages
const [showPage, setShowPage] = useState(false);
if (showPage) return <CloudPracticePage />;

// DON'T use window.location
window.location.href = '/services/cloud-practice';  // ❌

// DON'T manually manipulate history
window.history.pushState({}, '', '/services/cloud-practice');  // ❌

// DON'T hardcode URLs
navigate('/services/cloud-practice');  // ❌ Use ROUTES constant instead
navigate(ROUTES.SERVICES.CLOUD_PRACTICE);  // ✅
```

---

## Testing Deep Links

To test that deep linking works correctly:

1. **Direct URL Access Test:**
   - Open browser
   - Navigate directly to: `http://localhost:5173/services/cloud-practice`
   - Page should load correctly without errors

2. **Refresh Test:**
   - Navigate to any page in the app
   - Press F5 or browser refresh button
   - Page should stay on the same route

3. **Back/Forward Button Test:**
   - Navigate: Home → Services → Cloud Practice
   - Press browser back button
   - Should navigate back correctly through history

4. **Bookmark Test:**
   - Navigate to any page
   - Bookmark the page
   - Close browser
   - Open browser and access bookmark
   - Page should load correctly

---

## Deployment Considerations

### For hosting on a static server (e.g., Netlify, Vercel, GitHub Pages):

The server must redirect all requests to `/index.html` to enable client-side routing.

**Netlify** (`/public/_redirects`):
```
/*    /index.html   200
```

**Vercel** (`/vercel.json`):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Apache** (`.htaccess`):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Common Issues & Solutions

### Issue: Page shows 404 on direct URL access
**Solution:** Configure your hosting provider to redirect all requests to `/index.html` (see Deployment Considerations above)

### Issue: Navigation doesn't update the URL
**Solution:** Make sure you're using React Router's `navigate()` or `<Link>` component, not `window.location`

### Issue: State is lost on page refresh
**Solution:** Move state to URL parameters or use persistent storage (localStorage, URL search params). Routing should not depend on runtime state.

### Issue: Component tries to access data that doesn't exist on initial load
**Solution:** Each page component must fetch or initialize its own data. It cannot rely on previous navigation or state from other pages.

---

## Migration from Legacy System

The legacy system used:
- `useState` flags to show/hide pages → ✅ Replaced with React Router routes
- Custom event system (`navigationHelper.ts`) → ✅ Replaced with `useRouterNavigation` hook
- State-based navigation → ✅ Replaced with URL-based navigation

The custom event system (`navigationHelper.ts`) is now DEPRECATED but still exists for backward compatibility. **Do not use it for new code.**

---

## Summary

✅ **Routing is centralized** in `/src/app/routes.tsx`

✅ **Navigation uses React Router** via `useRouterNavigation` hook

✅ **Pages are independently renderable** via URL

✅ **All URLs are explicit and SEO-friendly**

✅ **Deep linking and refresh work correctly**

✅ **Browser back/forward buttons work**

✅ **NO state-based page switching**
