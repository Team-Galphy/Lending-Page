import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Card from "./components/cardarea/cardarea";
import Home from "./page/service/home";
import Checklist from "./page/service/checklist";
import Library from "./page/service/library";
import Profile from "./page/service/profile";
import Rserve from "./components/reserve";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Card />
      <Home />
      <Checklist />
      <Library />
      <Profile />
      <Rserve />
      <Footer />
    </>
  );
}

export default App;
