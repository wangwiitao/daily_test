import { Suspense, useState, lazy } from "react";
// import NewComment from "./NewComment";
// import Comments from "./Comments";
const Comments = lazy(() => wait(1000).then(() => import("./Comments")));
const NewComment = lazy(() => wait(1000).then(() => import("./NewComment")));

export default function App() {
  const [viewComments, setViewComments] = useState(false);
  const isLoggedIn = true;

  return (
    <>
      <article>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        vitae autem fugiat error voluptatem voluptates, veniam cum delectus unde
        quibusdam soluta architecto distinctio. Illum voluptatum numquam natus
        cum non possimus!
      </article>
      {viewComments ? (
        <Suspense fallback="Loading...">
          {isLoggedIn && <NewComment />}
          <Suspense fallback="Loading">
            <Comments />
          </Suspense>
        </Suspense>
      ) : (
        <button onClick={() => setViewComments(true)}>View Comments</button>
      )}
    </>
  );
}

function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
