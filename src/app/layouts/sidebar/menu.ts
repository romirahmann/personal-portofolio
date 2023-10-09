import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: "Dashboard",
    isTitle: true,
  },
  {
    id: 2,
    label: "Dashboard",
    icon: "ri-dashboard-2-line",
    link: "/admin",
  },
  {
    id: 3,
    label: "Portofolio",
    isTitle: true,
  },
  {
    id: 8,
    label: "Project",
    icon: "ri-apps-2-line",
    subItems: [
      {
        id: 9,
        label: "Web Developer",
        link: "web-dev",
        parentId: 8,
      },
      {
        id: 10,
        label: "Design Graphics",
        link: "design-graphics",
        parentId: 8,
      },
      {
        id: 11,
        label: "Photography",
        parentId: 8,
        link: "/photography",
      },
      {
        id: 12,
        label: "Videography & Animation",
        link: "/videography-animation",
        parentId: 8,
      },
    ],
  },
  {
    id: 54,
    label: "Blog & Articles",
    isTitle: true,
  },
  {
    id: 55,
    label: "Blog",
    icon: "ri-pages-line",
    subItems: [
      {
        id: 56,
        label: "List Post",
        parentId: 49,
        link: "/blog-publish",
      },
      {
        id: 59,
        label: "Add Post",
        parentId: 49,
        link: "/add-blog",
      },
    ],
  },
];
