import AuthForm from "../components/Auth/AuthForm";
import Layout from "../components/Layout/Layout";
import AuthToken from "../Store/AuthToken";
const AuthPage = () => {
  return (
    <AuthToken>
      <Layout>
        <AuthForm />
      </Layout>
    </AuthToken>
  );
};

export default AuthPage;
