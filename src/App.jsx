import AppRoutes from './routes/AppRoutes';
//import Header from './Layout/Header';
//import Footer from './Layout/Footer';
import { ScrollProvider } from './context/ScrollContext';

function App() {
  return (
    <ScrollProvider>
      {/* <Header /> */}
      <AppRoutes />
      {/* <Footer /> */}
    </ScrollProvider>
  );
}

export default App;
