const initialState = {
    contacts: null,
    contact: {},
    favouriteContacts: null,
    message: '',
    searchedContacts: null,
    searchText: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACTS': 

            if(!state.contacts) {
                for (let contact in action.contacts ) {
                    contact.favourite = false
                } 

                action.contacts.sort((a, b) => {
                    if(a.displayName < b.displayName) { return -1; }
                    if(a.displayName > b.displayName) { return 1; }
                    return 0;
                })
    
                return {
                    ...state,
                    contacts: action.contacts
                }
            }

            return state;

        case 'FAVOURITE_STAR': 
            let newContacts = [...state.contacts]
            let index = newContacts.findIndex(contact => contact.recordID === action.id)
            newContacts[index].favourite = !newContacts[index].favourite

            let favoutiteStars = newContacts.filter(contact => contact.favourite)

            return {
                ...state,
                contacts: newContacts,
                favouriteContacts: favoutiteStars
            };

        case 'DENIED_ACCESS': 
            return {
                ...state,
                message: action.message
            };

        case 'SEARCH_CONTACT': 

            let newContact = []

            if(state.contacts || state.favouriteContacts) {
                console.log('SEARCH_BAR Reducer', 'Ashish')
                if(action.payload.screen === 'main') {
                    console.log('SEARCH_BAR Reducer main', 'Ashish')
                    newContact = state.contacts.filter(contact => {
                        //applying filter for the inserted text in search bar
                        const itemData = contact.displayName ? contact.displayName.toUpperCase() : ''.toUpperCase();
                        const textData = action.payload.text.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                    });
                } else {
                    console.log('SEARCH_BAR Reducer fav', 'Ashish')

                    newContact = state.favouriteContacts.filter(contact => {
                        //applying filter for the inserted text in search bar
                        const itemData = contact.displayName ? contact.displayName.toUpperCase() : ''.toUpperCase();
                        const textData = action.payload.text.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                    });
                }
            }
            
            return {
                ...state,
                searchedContacts: newContact,
                searchText: action.payload.text
            };

        case 'GET_CONTACTS_BY_ID': 
            let contact = {...action.contact}
            contact.favourite = action.fav

            return {
                ...state,
                contact: contact
            };

        case 'CLEAR_CONTACT': 
            return {
                ...state,
                contact: {}
            };


        default:
            return state
    }
}