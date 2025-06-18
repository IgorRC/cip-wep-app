declare module 'react-input-mask' {
  import * as React from 'react';

  export interface InputMaskProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string;
    maskChar?: string | null;
    alwaysShowMask?: boolean;
    beforeMaskedValueChange?(
      newState: { value: string; selection: { start: number; end: number } },
      oldState: { value: string; selection: { start: number; end: number } }
    ): { value: string; selection: { start: number; end: number } };
    children?: (inputProps: any) => React.ReactNode;
  }

  const InputMask: React.FC<InputMaskProps>;
  export default InputMask;
}
