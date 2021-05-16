import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className="container mx-auto max-w-xl">{children}</main>
    </div>
  );
}
