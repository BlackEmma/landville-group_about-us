import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    background: '#27282D',
    width: 540,
    height: 669,
    border: '1 solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 0 40 rgba(0, 0, 0, 0.1)',
    borderRadius: 12,
  },
  '& .MuiDialogActions-root': {
    padding: '0',
  },
}));

export default BootstrapDialog;
