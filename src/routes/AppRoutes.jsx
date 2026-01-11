import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

/* ================= LAZY IMPORTS ================= */
const Home = lazy(() => import('../pages/Home'));
//const Course = lazy(() => import('../pages/course'));
const Instructors = lazy(() => import('../pages/Instructors'));
const Testimonials = lazy(() => import('../pages/Testimonials'));
//const Contact = lazy(() => import('../pages/contact'));
const Login = lazy(() => import('../pages/Login'));
//const Registration = lazy(() => import('../pages/Registration'));
const SearchResults = lazy(() => import('../pages/SearchResults'));

<Testimonials />;

/* ================= LOADER ================= */
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <span className="text-gray-500 text-sm">Loading...</span>
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* {<Route path="/course" element={<Course />} />} */}
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Registration />} /> */}
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Suspense>
  );
}
