import FAQ from "./components/FAQ";
import GlobeBox from "./components/GlobeBox";
import Main from "./components/Main";
import Purpose from "./components/Purpose";
import Purpose2 from "./components/Purpose2";

const App = () => {
  return (
    <div>
      <Main />
      <GlobeBox />
      <Purpose
        Text1="Choose Freedom. Build Something."
        Text2="Choose Purpose. Change Everything."
      />
      <FAQ />
      <Purpose2 Text1="Find your purpose, Lead the way" Text2={null} />
    </div>
  );
};

export default App;
