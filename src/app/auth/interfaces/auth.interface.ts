export interface AuthRequestDTO {
    email: string;
    password: string;
}

export interface AuthResponseDTO {
    token: string;
    refreshToken: string;
    user: UserProfileDTO;
}

export interface UserProfileDTO {
    firstname: string;
    lastname: string;
    alias: string;
    role: string;
    enabled: boolean,
    profileVisible: boolean,
    postVisible: boolean,
    petVisible: boolean
    
}

export interface RegisterRequestDTO {
    firstname: string; // Must contain only letters
    lastname: string;  // Must contain only letters
    alias: string;       // Must be exactly 8 digits
    email: string;     // Must be a valid email format
    password: string; 
    phoneNumber : string; 
    role: string;
}

export interface ResetPassRequestDTO{
    token: string;
    newPassword: string;
}

export interface VerificationRequestDTO{
    email: string;

}