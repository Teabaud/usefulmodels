import { List, Typography } from "@mui/material"
import { styled } from '@mui/material';
import { Link } from '@remix-run/react';


export const BulletList = styled(List)({
  listStyleType: 'disc',
  paddingLeft: '2ch',
  '& .MuiListItem-root': {
     display: 'list-item',
  },
});


export const Paragraph = styled(Typography)({
  textIndent: '2em',
})


export const RemixLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});
