import { FetchCast } from "components/FetchData";
import { Spinner } from "components/Spinner";
import { CastList } from "components/CastList/CastList";

import { List, Message } from "./CastStyled";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Cast = () => {
    const [castItems, setCastItems] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { movieId } = useParams();

    useEffect(() => {
        setLoading(true);

        const getCast = async () => {
            try {
                const castData = await FetchCast(movieId);
                setCastItems(castData.data.cast);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getCast();
    }, [movieId]);

    return (
        <>
            {error && <p>{error.message}</p>}
            {loading && <Spinner />}
            {castItems.length !== 0 ? (
                <List>
                    <CastList castItems={castItems} />
                </List>
            ) : (
                <Message>We don't have any information about actors</Message>
            )}
        </>
    );
};