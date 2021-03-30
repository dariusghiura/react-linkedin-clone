export default function Course({ title, author }) {
  return (
    <div className="right-sidebar-course">
      <h2>{title}</h2>
      <h4>{author}</h4>
    </div>
  );
}
