import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: '1rem'
  }
}));

export default BootstrapDialog;