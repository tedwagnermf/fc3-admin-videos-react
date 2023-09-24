import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
    id: string;
    name: string;
    description: null | string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

const category: Category = {
    id: "0ce0e8e0-7f61-11eb-9439-0242ac130002",
    name: "Category 0",
    description: "Category 0 description",
    is_active: true,
    created_at: "2021-03-03T15:00:00.000000Z",
    updated_at: "2021-03-03T15:00:00.000000Z",
    deleted_at: null,
};

const category1: Category = {
    id: "1ce0e8e0-7f61-11eb-9439-0242ac130002",
    name: "Category 1",
    description: "Category 1 description",
    is_active: true,
    created_at: "2021-03-03T15:00:00.000000Z",
    updated_at: "2021-03-03T15:00:00.000000Z",
    deleted_at: null,
};

const category2: Category = {
    id: "2ce0e8e0-7f61-11eb-9439-0242ac130002",
    name: "Category 2",
    description: "Category 2 description",
    is_active: false,
    created_at: "2021-03-03T15:00:00.000000Z",
    updated_at: "2021-03-03T15:00:00.000000Z",
    deleted_at: null,
};

const category3: Category = {
    id: "3ce0e8e0-7f61-11eb-9439-0242ac130002",
    name: "Category 3",
    description: "Category 3 description",
    is_active: true,
    created_at: "2021-03-03T15:00:00.000000Z",
    updated_at: "2021-03-03T15:00:00.000000Z",
    deleted_at: null,
};

export const initialSlice = [
    category,
    category1,
    category2,
    category3,
    // { ...category, id: "2ce0e8e0-7f61-11eb-9439-0242ac130002", name: "Category 2", description: "Category 2 description", is_active: false },
    // { ...category, id: "3ce0e8e0-7f61-11eb-9439-0242ac130002", name: "Category 3", description: "Category 3 description" },
    // { ...category, id: "4ce0e8e0-7f61-11eb-9439-0242ac130002", name: "Category 4", description: "Category 4 description", is_active: false },
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialSlice,
    reducers: {
        createCategory(state, action) {
            state.push(action.payload);
        },
        updateCategory(state, action) {
            // find index on state of category to update
            const index = state.findIndex(
                (category) => category.id === action.payload.id
            );

            //console.log(index);
            // update category on state
            state[index] = action.payload;
        },
        deleteCategory(state, action) {
            // find index on state of category to update
            const index = state.findIndex(
                (category) => category.id === action.payload.id
            );

            //console.log(index);
            // delete category on state
            state.splice(index, 1);
        },
    },
});

export const selectCategories = (state: RootState) => state.categories;
export const selectCategoryById = (state: RootState, id: string) => {
    const category = state.categories.find((category) => category.id === id);

    return category || {
        id: "",
        name: "",
        description: "",
        is_active: false,
        created_at: "",
        updated_at: "",
        deleted_at: "",
    };
};

export default categoriesSlice.reducer;
export const { createCategory, updateCategory, deleteCategory } = categoriesSlice.actions;
