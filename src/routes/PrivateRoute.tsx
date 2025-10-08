import { useLocation, useNavigate } from "react-router";
import { useAppSelector } from "../redux/features/hooks";
import { useEffect, type ReactNode } from "react";
// children
const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }
  }, [user, navigate, location]);
  if (!user)
    return (
      <div className="h-[86vh] flex justify-center items-center bg-violet-950">
        <span className="loading loading-bars text-6xl text-blue-500"></span>
      </div>
    );
  return <>{children}</>;
};

export default PrivateRoute;
