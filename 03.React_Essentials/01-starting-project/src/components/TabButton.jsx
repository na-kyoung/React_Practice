export default function TabButton({ children, onSelect, isSelected}){
    console.log('TABBUITTON COMPONENT EXECUTING!');
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}