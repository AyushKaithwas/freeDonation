import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Posts = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://dev-wewk8tvtqd22qm4z.us.auth0.com/api/v2/",
            scope: "read:messages read:client_grants",
          },
        });
        const response = await fetch("http://localhost:4000/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(await response.json());
      } catch (e) {
        // Handle errors such as `login_required` and `consent_required` by re-prompting for a login
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {posts.map((post, index) => {
        return <li key={index}>{post}</li>;
      })}
    </ul>
  );
};

export default Posts;
