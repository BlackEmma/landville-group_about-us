/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';

interface StyleProps {
  height: string;
}

const MyDivider = styled(Divider)((props: StyleProps) => ({
  width: '100%',
  background: 'rgba(255, 255, 255, 0.2)',
  height: props.height
}));

export default function StyledDivider({ height }: StyleProps): JSX.Element {
  return <MyDivider height={height} />;
}
