import { useContext, useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../../components/Products/products"

import { CategoriesContext } from "../../contexts/categories.context"

import "./category.style.scss"

const Category = () => {
    const { category } = useParams()
    const { categoriesMap }= useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return(
        <Fragment>
            <h1 className="category-container-title">{category.toUpperCase()}</h1>
            <div className="category-container">
                {products &&
                    products.map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </div>
        </Fragment>
    )
}

export default Category