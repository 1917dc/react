function List(list) {
    list = []
    return (
        <>
            <ul>
                {list.map((item) => (
                    <li>{ item }</li>
                ))}
            </ul>
        </>
    );
}

export default List;