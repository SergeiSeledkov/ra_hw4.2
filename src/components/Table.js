import TableRow from "./TableRow";
import { nanoid } from 'nanoid';

export default function Table(props) {
    const { table, deleteRow } = props;

    return (
        <div className="table" key={nanoid()}>
            <div className="table__date">Дата (ДД.ММ.ГГ)</div>
            <div className="table__distance">Пройдено км</div>
            <div className="table__action">Действие</div>
            <div className="table__result">
                {table.map(item => <TableRow date={item.date} distance={item.distance} deleteRow={deleteRow} key={nanoid()} />)}
            </div>
        </div>
    )
}