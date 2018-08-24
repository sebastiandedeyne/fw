import React from 'react';
import { Link } from '../../framework/client';

export default ({ title }) => (
  <div>
    <h1>{title}</h1>
    <ul>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </ul>
  </div>
);
