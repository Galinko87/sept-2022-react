import {axiosRequest} from "../../utils/axiosConfig";
import {requestsLinks} from "../endpoints";

export const postsRequests = () => {
    getPostById: (id) =>axiosRequest.get(requestsLinks.postById(id))
};

