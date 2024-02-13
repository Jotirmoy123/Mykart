import {  Grid, styled} from '@mui/material';

const ImageURL = [
    {link:'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50'},
    {link:'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg'},
    {link:'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'}
];

// const Grid = styled(Grid)`
//     display: flex;
//     margin-top: 20px;
//     justify-content: space-between;
// `;

const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid container spacing={2}>
                {
                    ImageURL.map(image => (
                            <Grid item key={image.link} lg={4} md={4} sm={6} xs={12}>
                                <img src={image.link} style={{ width: '100%' }} alt='' />
                            </Grid>
                        // <Grid key={image.link} item={true} lg={4} md={4} sm={6} xs={12}>
                        //     <img src={image.link} style={{ width: '100%' }} alt='' />
                        // </Grid>
                    ))
                }
            </Grid>
            <Image src={url} />
        </>
    )
}

export default MidSection;