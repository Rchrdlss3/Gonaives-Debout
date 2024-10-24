export default function AccomplishmentCard({title,paragraph}) {
    return (
            <div style = {{
        border: '1px solid',
        borderRadius: '5px',
        width: '400px',
        height: '400px',
        flexShrink: 0,
    }}>
        <h2>{title}</h2>
        <br></br>
        <p>{paragraph}</p>
    </div>
    )
}