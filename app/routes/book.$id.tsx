import { useParams } from '@remix-run/react';

export default
function BookID() {
  const { id } = useParams();
  return <div>Book: {id}</div>;
}
