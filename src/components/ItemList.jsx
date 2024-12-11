const initialItems = [
  {
    name: "good mood",
    packed: false,
  },
  {
    name: "passport",
    packed: false,
  },
  {
    name: "phone charger",
    packed: false,
  },
];

export default function ItemList() {
  return (
    <ul>
      {initialItems.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" /> {item.name}
      </label>
    </li>
  );
}
