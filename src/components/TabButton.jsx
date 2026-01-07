export default function TabButton({label, isSelected, ...props}) {
    console.log('Rendering TabButton:');
    return( 
    <li>
        <button className={isSelected ? "active" : undefined} {...props}>{label}</button>
    </li>
        
    );
}