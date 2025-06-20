/*class Product {
    private _productID: string;
    public get productID(): string {
        return this._productID;
    }
    public set productID(value: string) {
        this._productID = value;
    }
    private _productTitle: string;
    public get productTitle(): string {
        return this._productTitle;
    }
    public set productTitle(value: string) {
        this._productTitle = value;
    }
    private _productPrice: number;
    public get productPrice(): number {
        return this._productPrice;
    }
    public set productPrice(value: number) {
        this._productPrice = value;
    }

    public constructor(p_id:string,p_t:string,p_p:number){
        this._productID=p_id;
        this._productTitle=p_t;
        this._productPrice=p_p;
    }
    public printProduct(){
        console.log(`${this.productID} ${this._productTitle} ${this._productPrice}`)
    }
}*/
export class Product {
  public productID: number;
  public productTitle: string;
  public category: string;
  public prouctPrice: number;
  public quantity: number;
  public productImage?: string;

  constructor(
    productID: number,
    productTitle: string,
    prouctPrice: number,
    category: string = '',
    quantity: number = 1,
    productImage?: string
  ) {
    this.productID = productID;
    this.productTitle = productTitle;
    this.prouctPrice = prouctPrice;
    this.category = category;
    this.quantity = quantity;
    this.productImage = productImage;
  }
}
