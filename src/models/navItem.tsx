export default class NavItem {

    private name: string
    private path: string
    private title: string
  
    public constructor(name: string, path: string, title: string) {
      this.name = name
      this.path = path
      this.title = title
    }
  
    public get getName(): string {
      return this.name
    }
  
    public get getPath(): string {
      return this.path
    }
  
    public get getTitle(): string {
      return this.title
    }
  }