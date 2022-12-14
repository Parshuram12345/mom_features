import { AiOutlineHome, AiFillHome, AiOutlineProject, AiFillProject } from "react-icons/ai";
import { MdOutlineContacts, MdContacts, MdOutlineTask, MdTask } from "react-icons/md";
import { RiPencilRuler2Line, RiPencilRuler2Fill, RiBriefcase4Line, RiBriefcase4Fill } from "react-icons/ri";
import { BsChatLeftText, BsChatLeftTextFill } from "react-icons/bs";
import { IoPeopleOutline, IoPeopleSharp } from "react-icons/io5";
export const sideNavLinkArray = [
  {
    label: "Home",
    notSelected: <AiOutlineHome />,
    selected: <AiFillHome />,
    visible: true,
    navigable: true,
    towards: "https://pro.idesign.market/dashboard",
    comingSoon: false,
    childrenLinks: null,
  },
  {
    label: "My Projects",
    notSelected: <AiOutlineProject />,
    selected: <AiFillProject />,
    visible: true,
    navigable: true,
    towards: "https://pro.idesign.market/my-projects",
    comingSoon: false,
    childrenLinks: null,
  },
  {
    label: "LMS",
    notSelected: <MdOutlineContacts />,
    selected: <MdContacts />,
    visible: true,
    navigable: true,
    towards: "https://pro.idesign.market/lead",
    comingSoon: false,
    childrenLinks: null,
  },
  {
    label: "Community",
    notSelected: <IoPeopleOutline />,
    selected: <IoPeopleSharp />,
    visible: true,
    navigable: false,
    towards: "https://pro.idesign.market/community/",
    comingSoon: true,
    childrenLinks: null,
  },
  {
    label: "Chat",
    notSelected: <BsChatLeftText />,
    selected: <BsChatLeftTextFill />,
    visible: true,
    navigable: true,
    towards: "https://pro.idesign.market/secure-chat",
    comingSoon: false,
    childrenLinks: null,
  },
  {
    label: "Services",
    notSelected: <RiPencilRuler2Line />,
    selected: <RiPencilRuler2Fill />,
    visible: false,
    navigable: true,
    towards: "https://pro.idesign.market/services",
    comingSoon: false,
    childrenLinks: null,
  },
  {
    label: "Quotation Tool",
    notSelected: <MdOutlineTask />,
    selected: <MdTask />,
    visible: false,
    navigable: true,
    towards: "https://pro.idesign.market/quotation-tool",
    comingSoon: false,
    childrenLinks: null,
  },
  {
    label: "Vendor Page",
    notSelected: <RiBriefcase4Line />,
    selected: <RiBriefcase4Fill />,
    visible: false,
    navigable: true,
    towards: "https://pro.idesign.market/vendor-page",
    comingSoon: false,
    childrenLinks: null,
  },
];
