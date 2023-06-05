import { useNavigate } from "react-router-dom";
import Tweets from "../../modules/Tweets/Tweets";
import Button from "../../shered/components/Button/Button";

const TweetsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("/")}>Back</Button>
      <Tweets />
    </>
  );
};

export default TweetsPage;
