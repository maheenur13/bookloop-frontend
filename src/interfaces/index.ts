export type IReadingPlans = {
  book: IBook;
  status: 'in-complete' | 'complete';
};

export type IUser = {
  id: string;
  email: string;
  password: string;
  wishList?: IWishList[];
  readingPlans?: IReadingPlans[];
};

export type IReview = {
  review: string;
  user: IUser;
};

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: IReview[];
  uploadedBy?: IUser;
};

export type IWishList = IBook;
