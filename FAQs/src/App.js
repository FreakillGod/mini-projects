import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions And Answer about login</h3>
        <section className="info">
          {questions.map((data) => {
            return <SingleQuestion key={data.id} {...data} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
