/* eslint-disable react/require-default-props */
import React from 'react';
import Input from '@mui/material/Input';

interface StyleProps {
  id: string;
  type: string;
  placeholder: string;
  multiline?: boolean;
  height?: string;
  margin?: string;
  rows?: number;
}

export default function StyledInput({
  id,
  type,
  placeholder,
  multiline,
  rows,
  height,
  margin,
}: StyleProps): JSX.Element {
  return (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      disableUnderline
      multiline={multiline}
      rows={rows}
      sx={{
        '& input': {
          color: '#777777',
        },
        '& .MuiInputBase-inputMultiline': {
          color: '#777777',
        },
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1 solid rgba(255, 255, 255, 0.05)',
        borderRadius: '6px',
        width: '480px',
        height: height || '44px',
        padding: '11px 16px 13px',
        margin: margin || '16px 0 20px',
      }}
    />
  );
}
