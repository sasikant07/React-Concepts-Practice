import { Suspense } from "react";
import Posts from "./Posts";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>use() API</h1>
        <Posts />
      </div>
    </Suspense>
  );
}

export default App;
