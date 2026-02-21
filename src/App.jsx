import { useState, useTransition } from "react";
import { Post } from "./Post";
import Comments from "./Comments";
import { Author } from "./Author";

export default function App() {
  const [tab, setTab] = useState("Post");
  const [isPending, startTransition] = useTransition();
  function setOpenTab(tab) {
    startTransition(() => {
      setTab(tab);
    });
  }
  return (
    <>
      <button onClick={() => setOpenTab("Post")}>View Post</button>
      <button onClick={() => setOpenTab("Comments")}>View Comments</button>
      <button onClick={() => setOpenTab("Author")}>View Author</button>

      {tab === "Post" ? (
        <Post />
      ) : tab === "Comments" ? (
        <Comments />
      ) : (
        <Author />
      )}
    </>
  );
}
