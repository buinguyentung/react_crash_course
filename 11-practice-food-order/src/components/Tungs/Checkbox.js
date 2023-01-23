import React from 'react';

const LIST_USERS = [
  { name: 'Tung', age: 32 },
  { name: 'Tom', age: 22 },
  { name: 'Thomas', age: 31 },
];

const Checkbox = (props) => {
  return (
    <React.Fragment>
      {LIST_USERS.map((user) => {
        return (
          <div>
            <input type="checkbox" id="fname" name="fname"/>
            <label>{user.name}</label>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Checkbox;
