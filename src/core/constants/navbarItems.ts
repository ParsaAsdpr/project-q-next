import { LiaHomeSolid } from "react-icons/lia";
import { PiArticle } from "react-icons/pi";
import { MdOutlineCategory, MdOutlineQuestionAnswer } from "react-icons/md";

const data = [
  {
    label: "خانه",
    icon: LiaHomeSolid,
    href: "/",
  },
  {
    label: "دنبال شده",
    icon: PiArticle,
    href: "/following",
  },
  {
    label: "دسته بندی",
    icon: MdOutlineCategory,
    href: "/categories",
  },
  {
    label: "پاسخ ها",
    icon: MdOutlineQuestionAnswer,
    href: "/answers",
  },
];

export default data;
