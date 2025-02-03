import { AuthPage } from "../../../components/auth-page";
import { authProviderServer } from "../../../providers/auth-provider/auth-provider.server";
import { redirect } from "next/navigation";

export default async function Login({ params }: { params: { locale: string } }) {
  const data = await getData();

  if (data.authenticated) {
    // Use backticks and params.locale in the template literal
    redirect(data.redirectTo || `/${params.locale}/members`);
  }

  return <AuthPage type="login" />;
}

async function getData() {
  const { authenticated, redirectTo, error } = await authProviderServer.check();

  return {
    authenticated,
    redirectTo,
    error,
  };
}
