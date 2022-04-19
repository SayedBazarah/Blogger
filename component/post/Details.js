function PostDetails(props) {
  const { data, content } = props.post;
  console.log(data);
  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <date>{data.date}</date>
        <div>
          <ul>
            {data.tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <article dangerouslySetInnerHTML={{ __html: content }}></article>
    </div>
  );
}
export default PostDetails;
