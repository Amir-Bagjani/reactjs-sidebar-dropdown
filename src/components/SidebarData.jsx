import {
  ArrowDropDown,
  ArrowDropUp,
  Group,
  Home,
  Help,
  Message,
  Note,
  ShoppingCart,
  Assessment,
} from "@material-ui/icons";
export const SidebarData = [
  {
    id: 1,
    title: `Overview`,
    path: `/overview`,
    icon: <Home />,
    iconOpened: <ArrowDropUp />,
    iconClosed: <ArrowDropDown />,
    subMenu: [
      {
        title: `Users`,
        path: `/overview/users`,
        icon: <Note />,
      },
      {
        title: `Revenue`,
        path: `/overview/revenue`,
        icon: <Note />,
      },
    ],
  },
  {
    id: 2,
    title: `Reports`,
    path: `/reports`,
    icon: <Assessment />,
    iconOpened: <ArrowDropUp />,
    iconClosed: <ArrowDropDown />,
    subMenu: [
      {
        title: `Report1`,
        path: `/reports/report1`,
        icon: <Note />,
      },
      {
        title: `Report2`,
        path: `/reports/report2`,
        icon: <Note />,
      },
      {
        title: `Report3`,
        path: `/reports/report3`,
        icon: <Note />,
      },
    ],
  },
  {
    id: 3,
    title: `Products`,
    path: `/products`,
    icon: <ShoppingCart />,
  },
  {
    id: 4,
    title: `Team`,
    path: `/team`,
    icon: <Group />,
  },
  {
    id: 5,
    title: `Messages`,
    path: `/messages`,
    icon: <Message />,
    iconOpened: <ArrowDropUp />,
    iconClosed: <ArrowDropDown />,
    subMenu: [
      {
        title: `Message1`,
        path: `/messages/message1`,
        icon: <Note />,
      },
      {
        title: `Message2`,
        path: `/messages/message2`,
        icon: <Note />,
      },
      {
        title: `Message3`,
        path: `/messages/message3`,
        icon: <Note />,
      },
    ],
  },
  {
    id: 6,
    title: `Support`,
    path: `/support`,
    icon: <Help />,
  },
];
