import React from 'react';
import Texts from '../../../constants/Texts/Texts';
import Images from '../../../constants/Images/Images';
import Text from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Image';
import Card from '../../molecules/card/Card';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

const CardGrid: React.FC = () => {
    return (
        <Box>
            <Grid container >
            {Texts.templates.map(template => (
                <Grid item xs={12} sm={6} md={4} lg={2.4} key={template.id}>
                <Card
                    key={template.id}
                    title={template.title}
                    creator={template.creator}
                    category={template.category}
                    imageSrc={Images[template.image]}
                    url={template.url}
                    label={template.label}
                />
                 </Grid>
               
            ))}
            </Grid>
        </Box>
    );
};

export default CardGrid;
