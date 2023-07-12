import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
    @IsNotEmpty()
    @IsString()
    id!: string;

    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsEmail()
    email!: string;
}
