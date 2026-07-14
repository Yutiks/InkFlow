import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    createArtist,
    getArtistById,
    updateArtist,
} from "@/api/artists";

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

function ArtistForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = Boolean(id);

    const [form, setForm] = useState({
        name: "",
        slug: "",
        style: "",
        image: "",
    });
    useEffect(() => {
        if (!isEdit) {
            return;
        }

        async function loadArtist() {
            const artist = await getArtistById(id);

            setForm({
                name: artist.name,
                slug: artist.slug,
                style: artist.style,
                image: artist.image,
            });
        }

        loadArtist();
    }, [id, isEdit]);

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (isEdit) {
            await updateArtist(id, form);
        } else {
            await createArtist(form);
        }

        navigate("/admin/artists");
    }

    return (
        <section>
            <h1>
                {isEdit ? "Edit Artist" : "Create Artist"}
            </h1>

            <form onSubmit={handleSubmit}>

                <Input
                    label="Name"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />

                <Input
                    label="Slug"
                    name="slug"
                    placeholder="Slug"
                    value={form.slug}
                    onChange={handleChange}
                />

                <Input
                    label="Style"
                    name="style"
                    placeholder="Style"
                    value={form.style}
                    onChange={handleChange}
                />

                <Input
                    label="Image URL"
                    name="image"
                    placeholder="Image URL"
                    value={form.image}
                    onChange={handleChange}
                />

                <Button type="submit" variant="primary">
                    Save
                </Button>

            </form>
        </section>
    );
}

export default ArtistForm;
