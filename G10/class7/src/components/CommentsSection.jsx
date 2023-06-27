import useComments from "../common/hooks/useComments";

const CommentsSection = ({ id }) => {
  const comments = useComments(id);

  return (
    <ul className="list-group list-group-flush">
      {comments.map(comment => (
        <li key={comment.id} className="list-group-item">
          <strong>{comment.name}</strong>
          <p>{comment.body}</p>
          <em>Author: {comment.email}</em>
        </li>
      ))}
    </ul>
  );
};

export default CommentsSection;
