import {AppController} from "./app.controller"
import { Controller, Module, Get } from "@nestjs/common";
@Module({
    controllers: [AppController]
})
export class AppModule{}