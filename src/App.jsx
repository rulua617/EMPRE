import Sidebar from "./components/shared/Sidebar";
import Card from "./components/shared/card";
import Header from "./components/shared/Header";
import productos from "./components/shared/Productos";
function App() {
  const productosList = productos.map((p) => {
    return <Card title={p.name} description={p.description} image={p.image} />;
  });
  return (
    <main className="w-full overflow-x-hidden overflow-hidden ">
      <div>
        <nav>
          <Header />
        </nav>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 m-4">
        {productosList}
      </div>
    </main>
  );
}

export default App;
