import { useState } from "react";
import Button from "./Button";
import { useRef } from "react";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
    setItemText("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        value={itemText}
        autoFocus={true}
        ref={inputRef}
      />

      <Button>Add to list</Button>
    </form>
  );
}
