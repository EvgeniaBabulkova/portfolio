import { Link } from "react-router-dom";

export default function NotFountPage() {
  return (
    <div>
      <h1>404 Not fooound</h1>
      <Link to="/">Link to home (doesn't cause page rerenders hehe)</Link>
    </div>
  );
}
