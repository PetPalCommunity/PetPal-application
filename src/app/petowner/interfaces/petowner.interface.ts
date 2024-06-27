export interface petOwnerProfileDTO {
    alias: string,
    firstname: string,
    lastname: string,
    image: string,
    description: string,
    followed: number
    followers: number,
    age: number,
    sex: string,
    phone: string,
    profileVisible: boolean
    postVisible: boolean,
    petVisible: boolean
    
}

export interface petResponseDTO {
    name: string,
    species: string,
    breed: string,
    age: number,
    sex: string,
    image: string
}