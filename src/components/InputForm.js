export default function InputForm(props) {
    const { submit, change, formDate, formDistance } = props;

    return (
        <form className="form" onSubmit={submit}>
            <div className="form__date">
                <label className="form__date-label" htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <input className="form__date-input" type="date" id="date" name="date" onChange={change} value={formDate}></input>
            </div>
            <div className="form__distance">
                <label className="form__distance-label" htmlFor="distance">Пройдено км</label>
                <input className="form__distance-input" type="number" id="distance" name="distance" onChange={change} value={formDistance}></input>
            </div>
            <div className="form__submit">
                <button className="form__submit-button" type="submit">OK</button>
            </div>
        </form>
    )
}