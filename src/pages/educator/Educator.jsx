import { Outlet } from "react-router-dom";

const Educator = () => {
  return (
    <div>
      <h1 className="">Educator</h1>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Educator;
