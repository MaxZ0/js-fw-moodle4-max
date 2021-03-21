import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/results">Results</Link>
        <Link href="/about-us">About us</Link>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}
