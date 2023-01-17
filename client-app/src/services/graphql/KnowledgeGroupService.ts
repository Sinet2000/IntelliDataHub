import { client } from "./graphql.service";

export class KnowledgeGroupService {
    constructor(private graphQLService: typeof client) {}

    async createKnowledgeGroup(name: string): Promise<CreateKnowledgeGroupResponse> {
        const mutation = `
            mutation CreateKnowledgeGroup($name: String!) {
                createKnowledgeGroup(name: $name) {
                    _id
                    name
                    createdAt
                    updatedAt
                }
            }
        `;

        const variables = {
            name
        };

        try {
            const { data } = await this.graphQLService.mutate(mutation, variables);
            return data.createKnowledgeGroup;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteKnowledgeGroup(id: string): Promise<DeleteKnowledgeGroupResponse> {
        const mutation = `
            mutation DeleteKnowledgeGroup($id: ID!) {
                deleteKnowledgeGroup(id: $id) {
                    _id
                }
            }
        `;

        const variables = {
            id
        };

        try {
            const { data } = await this.graphQLService.mutate(mutation, variables);
            return data.deleteKnowledgeGroup;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateKnowledgeGroup(id: string, name: string): Promise<UpdateKnowledgeGroupResponse> {
        const mutation = `
            mutation UpdateKnowledgeGroup($id: ID!, $name: String!) {
                updateKnowledgeGroup(id: $id, name: $name) {
                    _id
                    name
                    createdAt
                    updatedAt
                }
            }
        `;

        const variables = {
            id,
            name
        };

        try {
            const { data } = await this.graphQLService.mutate(mutation, variables);
            return data.updateKnowledgeGroup;
        } catch (error) {
            throw new Error(error);
        }
    }
}