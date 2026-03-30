'use client'
import { useEffect, useState } from 'react';
import reqresApi from '@/lib/apiClient';
import PostCardUser from '@/components/PostCardUser';

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                // Al llamar a la API, Axios ya envía el x-api-key por ti
                const res = await reqresApi.get('/users?page=2');
                setUsers(res.data.data);
            } catch (err) {
                console.error("Error con la API Key:", err.response?.data || err.message);
            }
        };
        load();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {users.map(u => <PostCardUser user={u} key={u.id} />)}
        </div>
    );
}