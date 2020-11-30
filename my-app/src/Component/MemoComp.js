import React from 'react';

const MemoComp = ({totalCart}) =>{
console.log("Memo Component Render");
return <h1>Memo Component</h1>
}

export default React.memo(MemoComp);