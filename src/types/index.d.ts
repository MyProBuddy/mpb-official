export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[];
    author: string;
    tags: string[];
    date?: string;
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Author = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    social: [
      {
        name: string;
        icon: string;
        link: string;
      },
    ];
  };
  content?: string;
  slug?: string;
};

export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
  heading: string;
};

export type Testimonial = {
  name: string;
  designation: string;
  avatar: string;
  content: string;
  link?: string;
};

export type Call_to_action = {
  slides: any;
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
};

export type Get_your_customers = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
  slides: Array<Slide>;
};

export type Raise_capital = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
  funded: Array<Slide>;
  illustrations: Array<Slide>;
};

export type Slide = {
  name: string;
  image: string;
  description?: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};
