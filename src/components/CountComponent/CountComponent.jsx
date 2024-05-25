import React from 'react';

import { Button } from 'react-bootstrap'; 

const CountComponent = () => {

  const [item, setItem] = React.useState(0);
const handleAddButton = () => {
  setItem(item + 1);
};
const handleRemoveButton = () => {
  if(item === 0) return
  setItem(item - 1);
};  
React.useEffect(() => {
  console.log("useEffect sin dependencias");
});
React.useEffect(() => {
  console.log("useEffect con dependencias");
}, []);
React.useEffect(() => {
  console.log("useEffect con dependencias");
}, [item]);
  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleRemoveButton}>-</Button>
      <span>{item}</span>
      <Button variant="primary" onClick={handleAddButton}>+</Button>
    </React.Fragment>
  );
};

export default CountComponent
