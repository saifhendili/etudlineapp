// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getCour } from '../../actions/Cours';

// function validatecours({ getCour, id }) {
//   const [password, setPassword] = useState('');

//   return (
//     <div className='post-form'>
//       <div className='bg-primary p'>
//         <h3>Say Something...</h3>
//       </div>
//       <form
//         className='form my-1'
//         onSubmit={(e) => {
//           e.preventDefault();
//           getCour({ password, id });
//           setText('');
//         }}
//       >
//         <input
//           type='Password'
//           name='Password'
//           cols='30'
//           rows='5'
//           placeholder='Create a post'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input type='submit' className='btn btn-dark my-1' value='Submit' />
//       </form>
//     </div>
//   );
// }

// validatecours.propTypes = {
//   getCour: PropTypes.func.isRequired,
// };

// export default connect(null, { getCour })(validatecours);
