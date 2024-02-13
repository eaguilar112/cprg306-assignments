import React from 'react';

const StudentInfo = () => {
  const githubUrl = 'https://github.com/eaguilar112';
  const yourName = 'Erwin Aguilar';

  return (
    <div>
      <h1>{yourName}</h1>
      <p><a href={githubUrl}>Link to GitHub Repository</a></p>
    </div>
  );
};

export default StudentInfo;