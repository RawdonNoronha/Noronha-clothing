import React from "react";
import './category.styles.scss';
import { useLocation } from "react-router";
// import CollectionItem from "../../components/collection-item/collection-item.component";

const CategoryPage = () => {
    const location= useLocation();
    console.log(location);
    
    return (
    <div className="category-page">
        CATGORY PAGE
    </div>
)}

export default CategoryPage;