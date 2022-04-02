import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderLogo() {
  return (
    <Link to="/">
      <h1 className="font-display text-3xl text-red-500">
        tumuto
      </h1>
    </Link>
  );
}
