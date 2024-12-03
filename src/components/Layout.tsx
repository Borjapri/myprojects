import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <h2>Menu</h2>
      <Outlet />
    </>
  );
}
