export default interface BaseInterface {
  get id(): string;
  get isDeleted(): boolean;
  get createdAt(): Date;
  get updatedAt(): Date;
  get deactivatedAt(): Date;
}
