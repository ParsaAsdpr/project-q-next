interface IUser {
    _id: string;
    email: string;
    username: string;
    password: string;
    profile: {
        name: string;
        avatar: string;
        bio: string;
        occupation: string;
    }
    isOnline: boolean;
    isActive: boolean;
    lastIP: string;
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;
}

export default IUser;