import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Category {
    id: string;
    name: string;
    description: null | string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

const category: Category = {
    id: "1ce0e8e0-7f61-11eb-9439-0242ac130002",
    name: "Category 1",
    description: "Category 1 description",
    is_active: true,
    created_at: "2021-03-03T15:00:00.000000Z",
    updated_at: "2021-03-03T15:00:00.000000Z",
    deleted_at: null,
};

export const initialSlice = [
    category,
    { ...category, id: "2ce0e8e0-7f61-11eb-9439-0242ac130002", name: "Category 2", description: "Category 2 description", is_active: false },
    { ...category, id: "3ce0e8e0-7f61-11eb-9439-0242ac130002", name: "Category 3", description: "Category 3 description" },
    { ...category, id: "4ce0e8e0-7f61-11eb-9439-0242ac130002", name: "Category 4", description: "Category 4 description", is_active: false },
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialSlice,
    reducers: {
        createCategory(state, action) { },
        updateCategory(state, action) { },
        deleteCategory(state, action) { },
    },
});

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
