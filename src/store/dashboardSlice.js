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
        updateWidget : (state,action) => {
            const { categoryName, selectedWidgetIds } = action.payload;

            const category = state.categories.find(category => category.category === categoryName );

            if(category) {
                category.widgets = category.widgets.filter(widget => !selectedWidgetIds.includes(widget.id))
            }
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
})


export const { addWidget, removeWidget,updateWidget, setSearchTerm } = dashboardSlice.actions;
export default dashboardSlice.reducer;