import React from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';
import "./Slider.css";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';


class Card extends React.Component {


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
    
        componentDidMount() {
            const wordPressSiteURL = 'https://bangeco.dezign.id';
            this.setState( { loading: true }, () =>{
                axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts?categories=6&per_page=6` )
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
            const slideLeft =()=> {
                let slider = document.getElementById("slider");
                slider.scrollLeft = slider.scrollLeft - 500;
        
            }
            const slideRight = () => {
                let slider = document.getElementById("slider");
                slider.scrollLeft = slider.scrollLeft + 500;
                
            }
            const { posts, error } = this.state;
            return (
                <React.Fragment>
                    { error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
                { posts.length ? (
                <div id="sliderInfo-container">   
                <MdChevronLeft size={40} className="slider-icon left" onClick ={slideLeft}/>
                <div id="slider">
                        { posts.map( post => (
                                <div className="slider-card" key={ post.id }>
                                   <div className="card-image" style={{backgroundImage:`url(${post.better_featured_image.source_url})`}}> </div>
                                
                                <div className="slider-content">
                                    <p className="title">{renderHTML( post.title.rendered )}</p>
                                    
                                    <p className="description">{renderHTML( post.excerpt.rendered )} </p>
                                    <div className="btn-detail-wrap">
                                    <a href={`/post/${post.id}`}>
                                        <button>Selengkapnya</button>
                                    </a>
                                    </div>
                                </div>
                                
                            </div> 
                        ))}
                    </div>
                    <MdChevronRight size={40} className="slider-icon right" onClick = {slideRight}/>
                    </div>
                ) :  ''}
            </React.Fragment>
            );
        }
}


export default Card;
