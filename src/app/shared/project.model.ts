export class Project {
    constructor(private name: string, private picturePath: string, private link: string) {}

    public getImagePath() : string {
        return this.picturePath;
    }

    public getName() : string {
        return this.name;
    }

    public getLink() : string {
        return this.link;
    }
}