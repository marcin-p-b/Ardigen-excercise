import { useState, useEffect } from "react";
import axios from "axios";
import ShowRepositories from "./components/ShowRepositories";
import SearchBox from "./components/SearchBox";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, userSearchQuery] = useState("");
  const [query, setQuery] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Endpoint Url stored in .env file
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

  // Handle user input
  const handleChange = (e) => {
    const input = e.target.value;
    userSearchQuery(input);
    setQuery(null);
  };

  // Handle search button
  const handleClick = (e) => {
    e.preventDefault();
    if (query === null) setQuery(searchQuery);
  };

  // Alternative handle search button with keyboard
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setQuery(searchQuery);
    }
  };

  // Effect for fetching data with Github API. Fetch happens when search button clicked
  useEffect(() => {
    // Create Abortcontroller and signal for timeout and error handling
    const abortController = new AbortController();
    const signal = abortController.signal;

    const getData = (user) =>
      axios
        .get(`${GITHUB_URL}${user}/repos`, {
          signal,
          timeout: 5000,
        })
        .then((response) => {
          // Set fetched data as state value <data>
          setData(response.data);
          // Reset error message
          setErrorMessage(null);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            // Abort fetching when error occured
            console.error("Fetch aborted");
            setErrorMessage(error.message);
          } else if (error.code === "ECONNABORTED") {
            // Log error when fetching time is greater than 5s
            console.error("Request timed out");
            setErrorMessage(error.message);
            return;
          } else {
            setErrorMessage(error.message);
            console.error(error.message);
          }
        })
        // Set loading state to false when data fetched
        .finally(() => setIsLoading(false));
    if (query !== null) getData(query);

    // Cleanup: Abort the controller and set loading to true when the component unmounts
    return () => {
      abortController.abort(); // Cancel any ongoing requests
      setIsLoading(true); // Reset loading state
    };
  }, [query]);

  return (
    <div className="main-container">
      <SearchBox
        onHandleChange={handleChange}
        onHandleClick={handleClick}
        onHandleKeyDown={handleKeyDown}
      />
      {/* Display user repository if no error or not invalid name */}
      {query !== null ? (
        errorMessage === null ? (
          <ShowRepositories isLoading={isLoading} repoData={data} />
        ) : (
          <label>An unexpected error has occurred. Please try again</label>
        )
      ) : null}
    </div>
  );
}

export default App;
