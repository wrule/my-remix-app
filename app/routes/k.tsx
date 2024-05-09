import {
  Outlet
} from "@remix-run/react";

export default
function K() {
  return <div>
    <div>K</div>
    <div><Outlet /></div>
  </div>;
}
