/**
 * A continuously moving strip of the stack. Two identical runs sit side by
 * side and the track travels exactly half its own width, so the loop is
 * seamless; the second run is aria-hidden because it is the same list twice.
 * Hovering pauses it, which also lets someone read an item that is passing.
 */
const STACK = [
  "NestJS",
  "Flutter",
  "MySQL",
  "Keycloak",
  "React",
  "FastAPI",
  "Laravel",
  "TypeScript",
  "Dart",
  "MongoDB",
  "Express",
  "Vue",
  "Kotlin",
  "Tailwind CSS",
  "AWS",
  "Git",
];

function Run({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="marquee-run" aria-hidden={hidden || undefined}>
      {STACK.map((item) => (
        <li key={item} className="marquee-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Technologies I work with" role="group">
      <div className="marquee-track">
        <Run />
        <Run hidden />
      </div>
    </div>
  );
}
