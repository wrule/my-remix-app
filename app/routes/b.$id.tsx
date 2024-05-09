import { useParams } from '@remix-run/react';

export default
function BID() {
  const { id } = useParams();
  return <div>B.{id}</div>;
}
