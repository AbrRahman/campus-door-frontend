export type TReview = {
  _id: string;
  user: {
    name: string;
  };
  college: {
    name: string;
  };
  rating: string;
  comment: string;
  createdAt: string;
};
