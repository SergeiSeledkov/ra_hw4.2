export default function TableRow(props) {
    const { date, distance, deleteRow } = props;

    return (
        <div className="table__result-wrapper">
            <div className="table__result-date">{date}</div>
            <div className="table__result-distance">{distance}</div>
            <div className="table__result-delete">
                <div className="table__result-delete-after" onClick={deleteRow}></div>
            </div>
        </div>
    )
}