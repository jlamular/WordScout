import { useState } from "react";

function Dictionary() {
  const [word, setWord] = useState("");
  const [dictionary, setDictionary] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!word.trim()) return;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Word not found");
        }
        return response.json();
      })
      .then((data) => {
        setDictionary(data);
        setError("");
      })
      .catch((err) => {
        setDictionary(null);
        setError(err.message);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {dictionary && (
        <div>
          <h2>{dictionary[0].word}
          <span> ({dictionary[0].meanings[0].partOfSpeech})</span>
          </h2>
          <p>{dictionary[0].meanings[0].definitions[0].definition}</p>
          
        </div>
      )}
    </div>
  );
}

export default Dictionary;