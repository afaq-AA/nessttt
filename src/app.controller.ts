import { Controller, Module, Get, applyDecorators } from "@nestjs/common";
@Controller("app")

export class AppController {

    @Get("/oop")

    getRootRoute(){
        return "hello cutie i am server"
    }

    @Get("/bye")
    byebyeRoute(){
        return "bye bye cutie"
    }
}