// CategoryContext.jsx
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const CategoryData = createContext();
const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products/categories");
            setCategories(response.data);
            setLoading(false);
        } catch (error) {
            console.error("error fetching peroblem plz try again...leater", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    console.log(children);
    return (
        <CategoryData.Provider value={{ categories, setCategories, loading }}>
            {children}
        </CategoryData.Provider>
    );
};

export default CategoriesProvider;
