import React from 'react';
import { MetaTags } from 'react-meta-tags';

const  Meta = ({title, desc, url, banner}) => {

    return(

        <>
        <MetaTags>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={desc} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc}/>
            <meta property="og:image" content={banner} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={desc} />
            <meta property="twitter:image" content={banner} />

            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={desc} />
            <meta property="twitter:image" content={banner} />
        </MetaTags>
        </>

    )

}



export default Meta;