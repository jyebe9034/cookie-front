import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import UserInfo from '../UserInfo';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-6">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="font-bold text-2xl text-red-500">
            tumuto
          </h1>
        </Link>
        <ul className="flex gap-2 ml-10">
          <li>
            <Link
              to="/test"
              className="px-4 py-3 text-lg"
            >
              테스트
            </Link>
          </li>
          <li>
            <Link
              to="/board"
              className="px-4 py-3 text-lg"
            >
              게시판
            </Link>
          </li>
        </ul>
      </div>
      <UserInfo />
      {/* <Button
        type="button"
        variant="contained"
        disableElevation
        sx={{ color: '#fff' }}
      >
        로그인
      </Button> */}
    </div>
  );
}
