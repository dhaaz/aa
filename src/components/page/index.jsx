export default function Page({ title, children }) {
  document.title = `${title} - Daflixx`;

  return <>{children}</>;
}
