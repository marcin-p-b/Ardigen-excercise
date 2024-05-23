import React from "react";
import Statistics from "./Statistics";
import Details from "./Details";

export default function ShowRepositories({ isLoading, data }) {
  // If data loaded and user has any public repositories then display the repositories, otherwise display message "User has no public repositories"
  return (
    <div className="show-repo-container">
      <ul>
        {!isLoading ? (
          data.length !== 0 ? (
            data.map((e) => {
              // Map repositories of a user
              return (
                <div key={e.id}>
                  <div className="repo-container">
                    <li className="show-repo-list">
                      <a href={e.html_url} rel="noopener" target="_blank">
                        {e.name}
                      </a>
                    </li>
                    <Statistics data={e} />
                  </div>
                  <Details data={e} />
                  <hr />
                </div>
              );
            })
          ) : (
            <label>User has no public repositories</label>
          )
        ) : null}
      </ul>
    </div>
  );
}
