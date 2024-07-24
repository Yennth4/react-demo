import { useEffect, useState, createContext } from 'react';
import { getAllUsers } from '../Service/ApiService';

// Create context
const UsersContext = createContext();

// Provider component
const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from context when component mounts
        fetchListUser();
    }, []);

    const fetchListUser = async () => {
        try {
            const response = await getAllUsers();
            console.log(response.data);
            // Check data structure
            if (response && response.data.EC === 0) {
                setUsers(response.data.DT);
            } else {
                console.error('Error fetching users')
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Provide context value
    const value = {
        users,
        fetchListUser
    };

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
};

export { UsersContext, UsersProvider };