export type Project = {
  _id: string;
  description: string;
  story: string;
  thumbnail: {
    public_id: string;
    url: string;
  };
  tags: string;
  images: {
    public_id: string;
    url: string;
  }[];
  title: string;
  theme: string;
};
