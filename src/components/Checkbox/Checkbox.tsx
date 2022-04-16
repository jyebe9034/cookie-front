import React, { forwardRef } from 'react';
import classnames from 'classnames';

interface Props {
  label: string;
  value: boolean;
}

function Checkbox({ label, value, ...props }: Props, ref: React.Ref<HTMLInputElement>) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input
        {...props}
        ref={ref}
        type="checkbox"
        defaultChecked={value}
        className="hidden"
      />
      <span className={classnames('inline-block w-[150px] py-2 rounded-3xl text-lg text-center transition-colors cursor-pointer', {
        'bg-gray-100': !value,
        'bg-red-500': value,
        'text-gray-400': !value,
        'text-white': value,
      })}
      >
        {label}
      </span>
    </label>
  );
}

export default forwardRef(Checkbox);
