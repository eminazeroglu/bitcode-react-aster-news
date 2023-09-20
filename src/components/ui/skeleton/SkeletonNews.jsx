import React from 'react';
import CompSkeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonNews(props) {
    return (
        <div className="news-item">
            <div className="inner">
                <div className="text">
                    <CompSkeleton count={4} style={{marginBottom: '5px'}} height={14}/>
                </div>
                <div className="photo">
                    <CompSkeleton height={68} width={68}/>
                </div>
            </div>
            <div className="option">
                <div className="info" style={{display: 'block'}}>
                    <CompSkeleton height={10} width={50}/>
                </div>
                <div className="buttons" style={{display: 'block', textAlign: 'right'}}>
                    <CompSkeleton height={10} width={50}/>
                </div>
            </div>
        </div>
    );
}

export default SkeletonNews;
