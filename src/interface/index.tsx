export interface ICourseLandingPage {
  title: string;
  subtitle: string;
  instructor: string;
  role: string;
  bgColor: string;
  textColor: string;
  isSelected: any;
  onClick: () => void;
  bgImage: string;
  avatarUrl: string;
}

export interface IStudyCards {
  icon: any;
  title: string;
  description: string;
}

export interface ICourseCard {
  title: string;
  subtitle: string;
  progress: number;
  color: string;
  bgImage: string;
}

export interface ICourseCarouselTwo {
  category: string;
  title: string;
  description: string;
  instructor: IInstructor;
  bgColor: string;
  textColor: string;
  bgImage: string;
}

interface IInstructor {
  name: string;
  role: string;
  image: string;
}
