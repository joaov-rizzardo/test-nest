interface ProductEntityProps {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export class Product {
  private id: number;
  private name: string;
  private description: string;
  private price: number;
  private createdAt: Date;
  private updatedAt: Date;

  constructor({
    id,
    name,
    description,
    price,
    createdAt,
    updatedAt,
  }: ProductEntityProps) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public get getId() {
    return this.id;
  }

  public get getName() {
    return this.name;
  }

  public get getDescription() {
    return this.description;
  }

  public get getPrice() {
    return this.price;
  }

  public get getCreatedAt() {
    return this.createdAt;
  }

  public get getUpdatedAt() {
    return this.updatedAt;
  }

  public toObject() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
