import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from "../collection-preview/collection-preview";
import './collection-overview.styles.scss'

const CollectionOverview = ({collections}) => (
    <div className= "collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}

    </div>
)

const mapDispatchToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapDispatchToProps)(CollectionOverview);
