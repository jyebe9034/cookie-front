import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import classnames from 'classnames';

import Avatar from '@mui/material/Avatar';
import IconCancel from '@mui/icons-material/Cancel';

export default function JoinAvatar() {
  const { register, watch, setValue } = useFormContext();
  const avatar = watch('avatar');

  const [avatarPreview, setAvatarPreview] = useState<string | ArrayBuffer | null>('');
  const [isShownAvatarUploadButton, setIsShownAvatarUploadButton] = useState(false);

  // 아바타 미리보기
  useEffect(() => {
    const file = avatar?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);
    }
  }, [avatar]);

  const handleRemoveAvatar = () => {
    setAvatarPreview('');
    setValue('avatar', '');
  };

  return (
    <section className="w-full">
      <div className="relative w-[100px] mx-auto">
        <div
          className="relative overflow-hidden h-[100px] rounded-full"
          onMouseEnter={() => setIsShownAvatarUploadButton(true)}
          onMouseLeave={() => setIsShownAvatarUploadButton(false)}
        >
          <Avatar
            src={typeof avatarPreview === 'string' ? avatarPreview : undefined}
            sx={{
              width: '100px',
              height: '100px',
            }}
          />
          <div className={classnames('absolute left-[50%] bottom-0 w-[90px] -translate-x-1/2 transition-opacity', {
            'opacity-100': isShownAvatarUploadButton,
            'opacity-0': !isShownAvatarUploadButton,
          })}
          >
            <label
              htmlFor="avatar"
              className="block w-full py-1 bg-black bg-opacity-60 text-sm text-white text-center cursor-pointer"
            >
              업로드
            </label>
            <input
              {...register('avatar')}
              id="avatar"
              type="file"
              className="hidden"
            />
          </div>
        </div>
        {avatarPreview && (
          <button
            type="button"
            className="absolute top-0 right-0"
            onClick={handleRemoveAvatar}
          >
            <IconCancel color="action" />
          </button>
        )}
      </div>
    </section>
  );
}
