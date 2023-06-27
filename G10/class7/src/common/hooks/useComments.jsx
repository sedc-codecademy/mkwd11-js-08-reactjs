import { useState, useEffect } from "react";
import axios from "axios";

const useComments = id => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(commentsResponse => {
        setComments(commentsResponse.data);
      });
  }, [id]);

  return comments;
};

export default useComments;
