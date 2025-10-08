import { useEffect, type ReactNode } from "react";
import { useAppSelector } from "../redux/features/hooks";
import { useLocation, useNavigate } from "react-router";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  if (user)
    return (
      <div className="h-[86vh] flex justify-center items-center bg-violet-950">
        <span className="loading loading-bars text-6xl text-blue-500"></span>
      </div>
    );
  return <>{children}</>;
};

export default PublicRoute;
