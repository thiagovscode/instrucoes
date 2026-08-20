export default function Header({ initials, subtitle }) {
  return (
    <header className="mb-10 text-center">
      <h1 className="font-serif text-5xl font-normal text-wedding-green tracking-wide mb-2">
        {initials}
      </h1>
      <p className="text-gray-500 font-light tracking-wider text-base">
        {subtitle}
      </p>
    </header>
  );
}
