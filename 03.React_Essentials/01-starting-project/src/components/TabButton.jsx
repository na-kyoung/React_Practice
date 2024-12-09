export default function TabButton({ children, onSelect, isSelected}){
    console.log('TABBUITTON COMPONENT EXECUTING!');
    return (
        <li>
            <button onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}