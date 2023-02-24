import { createSlice } from '@reduxjs/toolkit';
import {
    fetchContacts,
    addContact,
    delContact,
    toggleCompleted,
} from './operations';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: '',
    },

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = payload;
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(addContact.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(payload);
            })
            .addCase(addContact.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(delContact.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(delContact.fulfilled, (state, { payload }) => {
                const index = state.items.findIndex(
                    contact => contact.id === payload.id
                );
                state.isLoading = false;
                state.items.splice(index, 1);
            })
            .addCase(delContact.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(toggleCompleted.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(toggleCompleted.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(
                    contact => contact.id === payload.id
                );
                state.items.splice(index, 1, payload);
            })
            .addCase(toggleCompleted.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const contactsReducer = contactsSlice.reducer;
