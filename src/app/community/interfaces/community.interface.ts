export interface CommunityResponse {
    id: number;
    name: string;
    description: string;
    countMembers: number;
    tags: string[];
    creationDate: Date;
} 

export interface CommunityRequest {
    name: string;
    description: string;
    tags: string[];
  }