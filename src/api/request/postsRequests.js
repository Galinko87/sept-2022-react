import {axiosRequest} from "../../utils/axiosConfig";
import {requestsLinks} from "../endpoints";

export const PostsRequests = () => {
    getPostById: (id) =>axiosRequest.get(requestsLinks.postById(id))
};

