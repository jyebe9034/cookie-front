import React, { forwardRef } from 'react';

interface Props {
  label: string;
  value: string;
}

function Checkbox({ label, ...props }: Props, ref: React.Ref<HTMLInputElement>) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input
        {...props}
        ref={ref}
        type="checkbox"
        className="hidden"
      />
      <span className="inline-block w-[150px] py-2 bg-gray-100 checked-sibling:bg-red-500 rounded-3xl text-lg text-gray-400 checked-sibling:text-white text-center transition-colors cursor-pointer">
        {label}
      </span>
    </label>
  );
}

export default forwardRef(Checkbox);
