import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../redux/users/users-operations";
import { getFilteredUsers } from "../../redux/users/users-selectors";
import { useCallback, useEffect, useState } from "react";
import Tweet from "./Tweet/Tweet";

import styles from './tweets.module.scss'

const Tweets = () => {
  const filterdUsers = useSelector(getFilteredUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch] );

  const [page, setPage] = useState(1);

  const loadMore = useCallback( () => {
    setPage(prevPage => prevPage + 1);
    
  }, []);

//   const likeButton = (id) => {setLike(
//     filterdUsers.map((item) =>
//       item.id === id ? { ...item, liked: !item.liked } : item
//     )
//   );
// };
  const elements = filterdUsers.map(
    ({ user, tweets, followers, avatar, id }) => {
      return (
        <Tweet
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
          id={id}
          key={id}
        />
      );
    }
  );

  return <ul className={styles.wrapper}>{elements}</ul>;
};
export default Tweets;
