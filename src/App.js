import React from "react";
import "./styles.css";

function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {description}
      <Button type="button">
        Adopt <strong>{name}</strong>
      </Button>
    </>
  );
}

function Button({ children, type }) {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
}

// function Button({ name }) {
//   return (
//     <button type="button" className="button">
//       Adopt {name}
//     </button>
//   );
// }

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description={<p>Very cute dog!</p>} />
      <Animal emoji="🐈" name="Mittens" description={<p>Very cute cat!</p>} />
      <Animal
        emoji="🐢"
        name="Archie"
        description={
          <>
            <p>Super relaxed turtle</p>
            <ul>
              <li>Eats lettuce all the time</li>
              <li>Can sleep in your fridge</li>
            </ul>
          </>
        }
      />
      <Animal
        emoji="🐣"
        name="Chick Norris"
        description={<p>A very nice chicken!</p>}
      />
    </main>
  );
}
