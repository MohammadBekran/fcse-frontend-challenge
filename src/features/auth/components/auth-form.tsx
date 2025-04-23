import { ApolloError, useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import {
  EAuthToastLoadingMessageIds,
  EAuthToastMessages,
} from "@/features/auth/core/enums";
import { LOGIN_MUTATION } from "@/features/auth/core/graphql/mutations";
import { useAuth } from "@/features/auth/core/hooks";
import type { TLoginFormData } from "@/features/auth/core/types";
import { loginFormSchema } from "@/features/auth/core/validations";

import CustomField from "@/components/custom-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ERoutes } from "@/core/enums";
import type { TGraphqlErrorExtension } from "@/core/types";
import { toast } from "@/lib/utils";

const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const form = useForm<TLoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [login, { loading }] = useMutation(LOGIN_MUTATION);
  const authLogin = useAuth((state) => state.login);

  const onSubmit = async (values: TLoginFormData) => {
    try {
      toast.loading(EAuthToastMessages.LoginLoading, {
        id: EAuthToastLoadingMessageIds.LoginLoading,
      });

      const { email, password } = values;

      const { data } = await login({
        variables: { identifier: email, password },
      });
      const jwt = data?.login?.jwt;

      if (jwt) {
        toast.success("Logged in successfully");

        authLogin(jwt);
        navigate(ERoutes.Dashboard);
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        const gqlErrors = error?.graphQLErrors;
        const extensions = gqlErrors?.[0]?.extensions as TGraphqlErrorExtension;

        const message =
          extensions?.exception.data?.message?.[0]?.messages[0]?.message ??
          "Something went wrong. Please try again";

        toast.error(message);
      } else {
        toast.error(EAuthToastMessages.UnexpectedError);
      }
    } finally {
      toast.dismiss(EAuthToastLoadingMessageIds.LoginLoading);
    }
  };

  return (
    <div className="w-full max-w-[580px] max-h-[800px] flex flex-col justify-center space-y-7 lg:h-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h1 className="text-[34px] font-bold text-center leading-[42px] text-light-100 lg:text-start">
            Sign In
          </h1>
          <CustomField
            name="email"
            label="Email"
            placeholder="Your email"
            type="text"
            control={form.control}
          />
          <CustomField
            name="password"
            label="Password"
            placeholder="Your password"
            type="password"
            control={form.control}
          />
          <Button type="submit" disabled={loading} className="w-full button">
            {loading ? "Logging in ..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
