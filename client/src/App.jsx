import { Navbar, Hero, Footer } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default App;
