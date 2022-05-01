import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

const images = [
  {
    url: 'https://source.unsplash.com/5DLBoEX99Cs',
    title: 'Clothes',
    width: '33%',
    pages: '/storeclothes'
  },
  {
    url: 'https://source.unsplash.com/Hcfwew744z4',
    title: 'Eletronics',
    width: '34%',
    pages: '/storeeletronics'
  },
  {
    url: 'https://source.unsplash.com/dVhM3o9BVeg',
    title: 'Sports',
    width: '33%',
    pages: '/storesports'
  },
];

const ImageButton = styled(IconButton)(({ theme }) => ({
  
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export const BannerCategory = () => {
  return (
      <>
        <Typography 
                sx={{mb: 4, mt: 4, fontSize: 30,display: 'flex', justifyContent: 'center', width: '100%'}}
            >
                Category
            </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
            <IconButton
            focusRipple
            href={image.pages}
            key={image.title}
            sx={{ 
                position: 'relative',
                height: 200,
                '&:hover, &.Mui-focusVisible': {
                    zIndex: 1,
                    '& .MuiImageBackdrop-root': {
                    opacity: 0.15,
                    },
                    '& .MuiImageMarked-root': {
                    opacity: 0,
                    },
                    '& .MuiTypography-root': {
                    border: '4px solid currentColor',
                    },
                },
            }}
            style={{
                width: image.width,
                }}
                >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
                </Typography>
            </Image>
            </IconButton>
        ))}
        </Box>
      </>
  );
}
