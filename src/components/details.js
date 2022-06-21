import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.primary,
}));

export default function details({ activeRep: { district, link, name, office, party, phone, state, } }) {
    const namesSplit = name.split(' ')
  return (
    <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
            <Item>First Name: {namesSplit[0]}</Item>
            <Item>Last Name: {namesSplit[1]}</Item>
            <Item>District: {district}</Item>
            <Item>Phone: {phone}</Item>
            <Item>Office: {office}</Item>
        </Stack>
    </Box>
  )
}
