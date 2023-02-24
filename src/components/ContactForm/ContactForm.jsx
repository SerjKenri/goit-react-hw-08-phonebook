import React from 'react';
import { useState } from 'react';
import { FormS, InputS, LabelS, ButtonS } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleChangeNumber = e => {
        setNumber(e.target.value);
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;

        if (contacts.some(contact => name === contact.name)) {
            alert(`${name} is already in contacts.`);
        } else {
            dispatch(addContact({ name, number }));
        }

        form.reset();
    };

    return (
        <FormS onSubmit={handleFormSubmit}>
            <LabelS>
                Name
                <InputS
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Enter name"
                    value={name}
                    onChange={handleChangeName}
                />
            </LabelS>
            <LabelS>
                Number
                <InputS
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Enter phone number"
                    value={number}
                    onChange={handleChangeNumber}
                />
            </LabelS>
            <ButtonS type="submit">Add contact</ButtonS>
        </FormS>
    );
};
