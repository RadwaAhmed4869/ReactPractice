export default function TabButton({ children }) {
    function handleClick () {
        console.log(`Hello World from ${children}.`)
    }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
