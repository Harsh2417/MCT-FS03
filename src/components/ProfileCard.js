import React from 'react';

const ProfileCard = ({ user, onLike, onEdit, onDelete }) => {
  const handleLike = () => {
    onLike(user.id);
  };

  const handleEdit = () => {
    onEdit(user);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <div className="profile-card">
      <img src={user.avatar} alt="Avatar" />
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <div className="actions">
        <button onClick={handleLike}>
          <i className="fas fa-heart"></i>
        </button>
        <button onClick={handleEdit}>
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
