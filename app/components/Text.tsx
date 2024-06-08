import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { styled } from '@mui/material';
import { Link } from '@remix-run/react';
import React from 'react'


export const BulletList = styled(List)({
  listStyleType: 'disc',
  paddingLeft: '2ch',
  '& .MuiListItem-root': {
     display: 'list-item',
  },
});

interface TextItemProps {
  children: React.ReactNode;
  [key: string]: any;
}

export function TextItem ( { children, ...props }: TextItemProps ) {
  return (
    <ListItem {...props}>
      <ListItemText {...props}>
        { children }
      </ListItemText>
    </ListItem>
  )
}


export const Paragraph = styled(Typography)({
  textIndent: '2em',
})


export const RemixLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});
