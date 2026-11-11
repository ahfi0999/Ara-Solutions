import { createContext, useContext, useEffect, useState } from 'react';

/** Every page on the site. Unknown paths fall back to the home page. */
export const ROUTES = [
  '/',
  '/company/about',
  '/company/approach',
  '/company/case-studies',
  '/services/corp-to-corp',
  '/services/fulltime-staffing',
  '/services/rpo',
  '/services/training-placement',
  '/training-placement',
  '/training-placement/servicenow',
  '/training-placement/cybersecurity',
  '/training-placement/ai-ml',
  '/services/international-consulting',
  '/careers',
  '/contact',
];

/** Turns a location hash such as "#/contact" into a known route. */
export function resolvePath(hash) {
  const path = hash.replace(/^#/, '');
  if (!path || path === '/') return '/';
  return ROUTES.includes(path) ? path : '/';
}

const RouterContext = createContext(undefined);

const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

/** Hash-based routing (#/contact) so the site works on any static host. */
export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() =>
    typeof window !== 'undefined' ? resolvePath(window.location.hash) : '/',
  );
  useEffect(() => {
    const onHashChange = () => {
      setCurrentPath(resolvePath(window.location.hash));
      scrollToTop();
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  const navigate = (path) => {
    window.location.hash = path === '/' ? '' : path;
    setCurrentPath(path);
    scrollToTop();
  };
  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const router = useContext(RouterContext);
  if (!router) throw new Error('useRouter must be used within a RouterProvider');
  return router;
}
