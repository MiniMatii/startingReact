export default function Section({tittle, children, ...props}) {
    return( <section {...props}>
        <h2>{tittle}</h2>
        {children}
    </section>)
}