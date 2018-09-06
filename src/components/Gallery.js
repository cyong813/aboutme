import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
    constructor () {
        super();
    }

    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.src}
                        onClick={(e) => this.openLightbox(i, e)}
                    >
                        <img src={obj.thumbnail} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        return (
            <div>
                {this.renderGallery()}
                <Lightbox
                    images={this.props.images}
                />
            </div>
        );
    }
}

Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;