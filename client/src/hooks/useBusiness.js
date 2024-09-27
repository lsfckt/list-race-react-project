import { useEffect, useState } from "react";

import requester from "../api/requester";

export const getAll = () => {

    const [business, setBusiness] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await requester.get('http://localhost:3030/jsonstore/business-catalog');

            setBusiness(result);
        })();
    }, []);

    return business;
}