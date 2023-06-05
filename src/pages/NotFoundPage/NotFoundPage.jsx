import { Navigate } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <>
      <h1>Not Found Page</h1>
      <Navigate to="/" />
    </>
  );
};
export default NotFoundPage;
