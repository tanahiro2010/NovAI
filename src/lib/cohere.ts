import { CohereClientV2 } from "cohere-ai";

const cohere = new CohereClientV2({
    token: process.env.AI_API_KEY ?? "",
});

export { cohere };