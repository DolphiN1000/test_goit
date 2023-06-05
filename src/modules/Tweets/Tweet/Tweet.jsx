// import { useDispatch } from "react-redux";

import Button from "../../../shered/components/Button/Button";
import styles from "./tweet.module.scss";

const Tweet = ({ user, tweets, followers, avatar, id }) => {
  return (
    <li className={styles.wrapper}>
      <img className={styles.avatar} src={avatar} alt={user}></img>

      {/* <div className={styles.data}>   */}
      <p>{tweets.toString().split("").join(",")} &nbsp;TWEETS</p>
      <p>{followers} &nbsp;FOLLOWERS</p>
      <Button
        id={id}
        //   onClick={() => handleClickFollow(id)}
      >
        Follow
      </Button>
      {/* </div> */}
    </li>
  );
};

export default Tweet;
