// CategoryContext.jsx
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
export const CategoryData = createContext();
const CategoriesProvider = ({ children }) => {
    // let navigate = useNavigate()
    const [categories, setCategories] = useState([]);
    const [catname, setCatname] = useState("")
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products/categories");
            setCategories(response.data);
            setCatname(response.data)
            console.log(response.data);
            setLoading(false);
        } catch (error) {
            console.error("error fetching peroblem plz try again...leater", error);
            setLoading(false);
        }
    };

    const fetchCategoriesBYProducts = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/category/${catname}`);
            setProducts(response.data.products)
            console.log(response.data.products);
            setLoading(false);
        } catch (error) {
            console.error("error fetching peroblem plz try again...later", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (catname !== "") {
            fetchCategoriesBYProducts();
            console.log("catname :---", catname);
        }
    }, [catname])

    return (
        <CategoryData.Provider value={{ categories, setCategories, loading, catname, setCatname, products }}>
            {children}
        </CategoryData.Provider>
    );
};

export default CategoriesProvider;
