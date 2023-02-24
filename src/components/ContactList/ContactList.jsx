import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { delContact } from 'redux/contacts/operations';
import {
    DeleteButton,
    List,
    ListItem,
    ListContainer,
} from './ContactList.styled';

const getVisibleContacts = (contacts, filter) => {
    if (!filter) {
        return contacts;
    }

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
};

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const visibleContacts = getVisibleContacts(contacts, filter);

    const dispatch = useDispatch();
    const handleDelete = id => dispatch(delContact(id));

    return (
        <ListContainer>
            <List>
                {visibleContacts.map(({ id, name, number }, idx) => (
                    <ListItem key={idx}>
                        {name}: {number}
                        <DeleteButton
                            type="button"
                            onClick={() => handleDelete(id)}
                        >
                            Delete
                        </DeleteButton>
                    </ListItem>
                ))}
            </List>
        </ListContainer>
    );
};
