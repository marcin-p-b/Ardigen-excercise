import React, { useState } from "react";
import Statistics from "./Statistics";
import Details from "./Details";

export default function ShowRepositories({ isLoading, repoData }) {
  // If data loaded and user has any public repositories then display the repositories, otherwise display message "User has no public repositories"
  return (
    <div className="show-repo-container">
      {!isLoading ? (
        repoData.length !== 0 ? (
          repoData.map((repositoryData) => {
            // Map repositories of a user
            return (
              <div key={repositoryData.id}>
                <div className="repo-container">
                  <a
                    href={repositoryData.html_url}
                    rel="noopener"
                    target="_blank"
                  >
                    {repositoryData.name}
                  </a>
                  <Statistics data={repositoryData} />
                </div>
                <Details data={repositoryData} />
                <hr />
              </div>
            );
          })
        ) : (
          <label>User has no public repositories</label>
        )
      ) : null}
    </div>
  );
}
