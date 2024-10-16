import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService{

    doSignIn(){
        return 'this is from signIn'
    }

    doSighUp(){
        return 'this is from signUp'
    }
}