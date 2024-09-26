export default function Tabs({children, content}) {
  return (
    <>
      <menu>{children}</menu>
      {content}
    </>
  );
}
