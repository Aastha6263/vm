import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

/* ================= LAZY IMPORTS ================= */
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const SearchResults = lazy(() => import('../pages/SearchResults'));
import CourseDetails from '../pages/CourseDetails';
import AddCourse from '../pages/AddCourse';
import AddInstructor from '../pages/AddInstructor';

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
        <Route path="/course/:courseName" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/admin/add-instructor" element={<AddInstructor />} />
      </Routes>
    </Suspense>
  );
}
