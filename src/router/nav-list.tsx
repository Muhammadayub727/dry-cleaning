
import HomeIcon from '@mui/icons-material/Home';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import {Asosiy , Buyurtmalar , SMSMarketing , Mijozlar , Xizmatlar ,Sozlamalar} from "@pages"

interface navListInterface {
    path: string,
    title :string,
    element: JSX.Element,
    icon: JSX.Element,
}


const navList:navListInterface[] = [
    {
      path:"/main"  ,
      title:"Asosiy",
      element: <Asosiy/> ,
      icon: <HomeIcon />,
    },
    {
        path:"/main/buyurtmalar"  ,
        title:"Buyurtmalar",
        element: <Buyurtmalar/> ,
        icon: <DryCleaningIcon />,
    },
    {
        path:"/main/mijozlar"  ,
        title:"Mijozlar",
        element: <Mijozlar/> ,
        icon: <PeopleAltIcon />,
    },
    {
        path:"/main/sms-marketing"  ,
        title:"SMS Marketing",
        element: <SMSMarketing/> ,
        icon: <MailOutlineIcon />,
    },
    {
        path:"/main/xizmatlar"  ,
        title:"Xizmatlar",
        element: <Xizmatlar/> ,
        icon: <VolunteerActivismIcon />,
    },
    {
        path:"/main/sozlamalar"  ,
        title:"Sozlamalar",
        element: <Sozlamalar/> ,
        icon: <SettingsIcon />,
    }
]

export default navList;