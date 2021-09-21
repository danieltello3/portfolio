export interface IImage {
   _id: string;
   path: string;
   location: string;
   date: number;
   width: number;
   height: number;
   url: string;
   name: string;
}

export type TProyecto = {
   image: {
      _id?: string;
      name: string;
      path: string;
      url: string;
   };
   title: string;
   description: string;
   link?: string;
   githubLinks?: { _id?: string; frontend?: string; backend?: string };
};
