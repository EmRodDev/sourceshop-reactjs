import {useParams} from "react-router-dom";

export default function useQuery(parameters) {
    const param = useParams();
    return param[parameters]
}