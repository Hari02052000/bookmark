import { Controller, Post } from '@nestjs/common'
import { AuthService } from 'src/auth/auth.service';

@Controller('auth')
export class AuthController{

    constructor( private authService : AuthService){}
    
    @Post('signup')
    signup(){
        return this.authService.doSighUp()
    }
    
    @Post('signin')
    signin(){
        return this.authService.doSignIn()
    }

}