import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()

export const albumApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAlbums: builder.query({
            query: (id) => `/albums/?userId=${id}`,
            transformResponse: responseData => {
                return usersAdapter.setAll(initialState, responseData)
            },
            providesTags: (result, error, arg) => [
                { type: 'Albums', id: "LIST" },
                ...result.ids.map(id => ({ type: 'Albums', id }))
            ]
        })
    })
})

export const {
   useGetAlbumsQuery
} = albumApiSlice