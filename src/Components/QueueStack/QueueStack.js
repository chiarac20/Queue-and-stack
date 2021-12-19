const QueueStack = ({listItems, title}) => {
    return <section>
        <h2>{title}</h2>
        <ul>
            {listItems.map(item => <li key={item}>{item}</li>)}
        </ul>
    </section>   
}

export default QueueStack;