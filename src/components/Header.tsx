import TextScramble from "./TextScramble";

export default function Header() {
  const t = "hello fellow kids"
  return (
    <header>
      <nav>
        <ul>System menu:
        <li><TextScramble text={t}/></li>
          <li><a href="#tv">TV top</a></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#">Touch the grass</a></li>
          <li><a href="#">Remove the gravity</a></li>
        </ul>
      </nav>
    </header>
  );
}
