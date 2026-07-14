import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteArtist, getArtists } from "@/api/artists";
import Button from "@/components/Button/Button";

function AdminArtists() {
    const [artists, setArtists] = useState([]);
    async function loadArtists() {
            const data = await getArtists();
            setArtists(data);
        }

    useEffect(() => {
        loadArtists();
    }, []);

    async function handleDelete(id) {
        const confirmed = window.confirm(
            "Are you sure you want to delete this artist?"
        );

        if (!confirmed) {
            return;
        }

        await deleteArtist(id);

        loadArtists();
    }

    return (
        <section>
            <h1>Manage Artists</h1>

            <Link to="/admin/artists/new">
                <Button variant="ghost">
                    Add Artist
                </Button>
            </Link>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Style</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {artists.map((artist) => (
                        <tr key={artist.id}>
                            <td>{artist.name}</td>
                            <td>{artist.style}</td>

                            <td>
                                <Link to={`/admin/artists/${artist.id}/edit`}>
                                    <Button variant="ghost">
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    variant="danger"
                                    onClick={() => handleDelete(artist.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default AdminArtists;
