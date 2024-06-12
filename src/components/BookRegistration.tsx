import React, { useState } from "react";
import axios from "axios";

function AddBookForm() {
  const [bookId, setBookId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ahdf3t0dt8.execute-api.ap-northeast-1.amazonaws.com/library-test/POST",
        {
          bookId,
          title,
          author,
        }
      );
      console.log(response.data);
      alert("Book added successfully");
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Book ID:</p>
        <input
          type="text"
          id="bookId"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          required
        />
      </div>
      <div>
        <p>Title:</p>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <p>Author:</p>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
