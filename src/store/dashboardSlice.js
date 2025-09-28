import { createSlice } from "@reduxjs/toolkit";

import dashboardData from "../data/dashboardData.json"


const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        categories: dashboardData,
        searchTerm: ""
    },

    reducers: {
        addWidget: (state, action) => {
            const { categoryName, widget } = action.payload;

            const category = state.categories.find(c => c.category === categoryName);

            if (category) {
                category.widgets.push(widget)
            }
        },
        removeWidget: (state, action) => {
            const { categoryName, widgetId } = action.payload;
            const category = state.categories.find(c => c.category === categoryName);
            if (category) {
                category.widgets = category.widgets.filter(w => w.id !== widgetId);
            }
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
})


export const { addWidget, removeWidget, setSearchTerm } = dashboardSlice.actions;
export default dashboardSlice.reducer;