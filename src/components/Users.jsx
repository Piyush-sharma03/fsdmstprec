import React, { useEffect, useState } from "react";

function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="container">
      <h2>User Directory</h2>

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Users;