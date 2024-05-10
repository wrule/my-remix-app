import { Outlet } from '@remix-run/react';

export default
function Book() {
  return <div>
    <div>Book</div>
    <div><Outlet /></div>
  </div>;
}
