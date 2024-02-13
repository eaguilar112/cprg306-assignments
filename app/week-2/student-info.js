import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Erwin Aguilar</h1>
      <p>
        <Link href="https://github.com/eaguilar112">
          <a>Link to GitHub Repository</a>
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;