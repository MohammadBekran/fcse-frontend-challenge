import AuthForm from "@/features/auth/components/auth-form";

import { useAuthRedirect } from "@/core/hooks";

const Login: React.FC = () => {
  useAuthRedirect(true);

  return <AuthForm />;
};

export default Login;
