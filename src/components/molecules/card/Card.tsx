import React from 'react';
import Text from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Image';
import { Box, Stack } from '@mui/material';
import { useImageContext } from '../../../contexts/ImageContext';


interface CardProps{
    title: string;
    category: string;
    creator: string;
    imageSrc:string;
    url: string;
    label: string;
}

const Card: React.FC<CardProps> = ({title, category, creator,imageSrc,url,label}) => {
    const { setSelectedImage } = useImageContext();

  const handleClick = () => {
    setSelectedImage(title);
    window.open(url, '_blank');
  };

    return(
    <Box sx={{ width: 200,margin: 5 ,borderRadius: 2, overflow: 'hidden', }} onClick={handleClick}>
       <img src={imageSrc} alt={title} height='270'/>
       <Stack direction='row' spacing={2}>
       <Box sx={{ padding: 2 }}>
       <Text variant='body1'>{title}</Text>
       <Text variant='subtitle2'>{creator}</Text>
       <Text variant='subtitle1'>{category}</Text>
       </Box>
       <Box sx={{padding: 2}}>
       <Text variant='subtitle1'>{label}</Text>
       </Box>
       </Stack>
     </Box>
       
    )
}

export default Card;