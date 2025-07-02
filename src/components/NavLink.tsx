type Props = {
    title: string;
    icon?: React.ReactNode;
};

function NavLink({ title, icon }: Props) {
    return (
        <a className="hover:underline text-txt-light dark:text-txt-dark flex flex-row items-center gap-2 cursor-pointer">
            {icon}
            <p>{title}</p>
        </a>
    );
}

export default NavLink;
