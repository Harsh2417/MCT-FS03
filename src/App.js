import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingIndicator from './components/LoadingIndicator';
import ProfileCard from './components/ProfileCard';
import EditModal from './components/EditModal';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const usersData = response.data.map(user => ({
          ...user,
          avatar: `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`
        }));
        setUsers(usersData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  const handleLike = (userId) => {
    console.log(`Liked user with ID: ${userId}`);
    toast.success(`Liked user with ID: ${userId}`);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSaveEdit = (editedUser) => {
    setUsers(prevUsers => prevUsers.map(user => user.id === editedUser.id ? editedUser : user));
    setEditingUser(null);
  };

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    }
  };

  return (
    <div className="App">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div className="grid-container">
          {users.map(user => (
            <ProfileCard
              key={user.id}
              user={user}
              onLike={handleLike}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
      {editingUser && (
        <EditModal
          user={editingUser}
          onSave={handleSaveEdit}
          onClose={() => setEditingUser(null)}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
