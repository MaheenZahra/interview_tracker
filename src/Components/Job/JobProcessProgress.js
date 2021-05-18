import React from 'react';

const JobProcessProgress=(props)=> {
  return (

      <div class="progress">
       <div class={props.barClass} role="progressbar" style={{width: props.barPercentage}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
     </div>
    
  );
}

export default JobProcessProgress;