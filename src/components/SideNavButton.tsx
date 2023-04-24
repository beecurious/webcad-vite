
type TypeSideNavButton = {
    collapse:boolean;
    icon: string;
    text: string;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export default function SideNavButton({collapse, icon, text}:TypeSideNavButton)
{
    return( 
    <div className="flex flex-row p-3 justify-start items-end hover:bg-grey-100 rounded-lg">     
    <img src={icon} className="p-1"/>
    {!collapse && <div className="ml-1 p-0 align-bottom font-serif text-black">{text}</div>}
    </div>)
}