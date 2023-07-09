import React, { useState } from 'react';

const EditModal = ({ user, onSave, onClose }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedUser);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <h3>Edit Profile</h3>
          <input type="text" name="name" value={editedUser.name} onChange={handleInputChange} />
          <input type="email" name="email" value={editedUser.email} onChange={handleInputChange} />
          <input type="text" name="phone" value={editedUser.phone} onChange={handleInputChange} />
          <input type="text" name="website" value={editedUser.website} onChange={handleInputChange} />
          <input type="text" name="company" value={editedUser.company.name} onChange={handleInputChange} />
          <div className="modal-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
