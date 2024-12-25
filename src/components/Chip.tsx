import { ComponentProps, PropsWithChildren } from "react";

export type ChipProps = PropsWithChildren & Omit<ComponentProps<'button'>, 'className'>;

export const Chip = ({ children, ...props }: ChipProps) => {
  return (
    <button className='bg-slate-200 bg-opacity-10 border-green border-slate-400 border rounded-2xl px-2 py-1' {...props}>
      {children}
    </button>
  );
};
