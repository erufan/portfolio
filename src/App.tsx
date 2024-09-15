import data from "./data/data.json";
import Card from "./components/Card";
import CardsLayouts from "./layouts/CardsLayouts";

const App = () => {
  return (
    <CardsLayouts>
      {data.projects.map((p) => (
        <Card
          key={p.title}
          title={p.title}
          images={p.picturs}
          description={p.description}
          code={p.code}
          link={p.link}
        />
      ))}
    </CardsLayouts>
  );
};

export default App;
