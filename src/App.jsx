import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

import { useState } from "react";

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(newItemText) {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  }

  function handleRemoveAllItems() {
    setItems([]);
  }

  function handleResetToInitial() {
    setItems(initialItems);
  }

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
