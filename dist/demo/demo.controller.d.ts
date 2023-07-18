import { DemoService } from './demo.service';
export declare class DemoController {
    private readonly demoService;
    constructor(demoService: DemoService);
    demo(): string;
}
