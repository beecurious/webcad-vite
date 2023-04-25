
type TypeSideNavButton = {
    collapse:boolean;
    icon: string;
    text: string;
    handleOnClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export default function SideNavButton({collapse, icon, text, handleOnClick}:TypeSideNavButton)
{
    return( 
    <div className="smoothAnimate flex flex-row p-3 justify-start items-end hover:bg-grey-100 rounded-lg hover:cursor-pointer" onClick={handleOnClick}>     
    <img src={icon} className="p-1"/>
    {!collapse && <div className="ml-1 p-0 align-bottom font-serif text-black">{text}</div>}
    </div>)
}