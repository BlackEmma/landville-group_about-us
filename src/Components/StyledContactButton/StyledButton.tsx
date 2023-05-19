/* eslint-disable react/require-default-props */
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

interface StyleProps {
  width: string;
  height: string;
  weight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  padding?: string;
  margin?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton = styled(Button)((props: StyleProps) => ({
  background: '#264EB4',
  borderRadius: '4px',
  fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
  fontStyle: 'normal',
  color: '#FFFFFF',
  textTransform: 'none',
  boxShadow: 'none',
  width: props.width,
  height: props.height,
  fontWeight: props.weight,
  fontSize: props.fontSize,
  lineHeight: props.lineHeight,
  letterSpacing: props.letterSpacing,
  padding: props.padding,
  margin: props.margin,
  '&:hover': {
    backgroundColor: '#3A6AE3',
  }
}));

export default function StyledButton({
  width,
  height,
  weight,
  fontSize,
  lineHeight,
  letterSpacing,
  padding,
  margin,
  children,
  onClick
}: StyleProps): JSX.Element {
  return (
    <MyButton
      height={height}
      width={width}
      weight={weight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      padding={padding}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </MyButton>
  );
}
