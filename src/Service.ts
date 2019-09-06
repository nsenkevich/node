export class Service {
    id: string;
    title: string;
    unit: string;

    constructor(id: string, title: string, unit: string) {
        this.id = id;
        this.title = title;
        this.unit = unit;
    }
}
