import "./App.css";
import ProductList from "./components/Product/ProductList";
import ProductProvider from "./components/Product/ProductProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </div>
  );
}

export default App;
