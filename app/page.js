import React from 'react';
import Link from "next/link";

const CourseInfo = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">
          <a>Week 2 Page</a>
        </Link>
      </p>
    </div>
  );
};

export default CourseInfo;