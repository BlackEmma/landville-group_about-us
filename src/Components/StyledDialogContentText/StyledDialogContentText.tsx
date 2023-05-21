import React from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import { styled } from '@mui/system';

interface StyleProps {
  children: React.ReactNode;
}

const MyContentText = styled(DialogContentText)(() => ({
  fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#FFFFFF',
}));

export default function StyledDialogContentText({ children }: StyleProps): JSX.Element {
  return (
    <MyContentText>
      {children}
    </MyContentText>
  );
}
