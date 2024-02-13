import React from 'react';
import Link from "next/link";

const CourseInfo = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <li>
        <Link href="/week-2">Week 2 Assignment</Link>
        <Link href="/week-3">Week 3 Assignment</Link>
        <Link href="/week-4">Week 4 Assignment</Link>
      </li>
    </div>
  );
};

export default CourseInfo;