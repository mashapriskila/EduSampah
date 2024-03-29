import React from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

class NewsArticle extends React.Component {
  

constructor( props ) {
    super( props );

    this.state = {
        loading:false,
        posts: [],
        error: ''
    }
}

createMarkup = ( data ) => ({
    __html: data
});

// https://bangeco.dezign.id/wp-json/wp/v2/posts?categories=3&per_page=5

    componentDidMount() {
        const newLocal = 'https://blog.bangeco.my.id/';
        const wordPressSiteURL = newLocal;
        this.setState( { loading: true }, () =>{
            axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts?categories=4` )
            .then( res => {
                if ( 200 === res.status ) {
                    if ( res.data.length ) {
                        this.setState( { loading: false, posts: res.data } );
                        console.warn (res.data);
                    } else {
                        this.setState( { loading: false, error: 'No Posts Found' } );
                    }
                }

            } )
            .catch( err => this.setState( { loading: false, error: err } ) );
    } )
}

    render() { 
        // console.warn ( 'state', this.state)
        const { posts, error } = this.state;
        return (

            <React.Fragment>
                { error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
                { posts.length ? (
                <Box margin='100px 100px' sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h1"
					style={{margin: '30px auto', fontSize: 30, fontWeight: 700, textAlign: ''}}
                    >Berita Terkini 
                    </Typography>
                   <Grid container spacing={2}>
                        { posts.map( post => (
                            <Grid item xl={3} md={4} sm={6} xs={12}>
                                {/* <Card key={ post.id } sx={{ maxWidth: 345 }}> */}
                                <Card key={ post.id }  style={{ height: '100%' }}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={post.better_featured_image.source_url}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5">
                                    <a href={`/post/${post.id}`}>
                                        {renderHTML( post.title.rendered )}
                                    </a>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {renderHTML( post.excerpt.rendered )} 
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <a href={`/post/${post.id}`}>
                                        <Button size="small">Selengkapnya</Button>
                                    </a>
                                    </CardActions>
                            </Card> 
                            </Grid>
                        ))}
                    </Grid>
                    </Box>
                       
          
                ) :  ''}
            </React.Fragment>
        );
    }
}
 
export default NewsArticle;