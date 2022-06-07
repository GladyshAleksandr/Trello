type PropsType = {
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    handleClick: () => void
    setColumnAreaOpen: () => void
}

const ColumnAreaOpen: React.FC<PropsType> = ({ handleChange, handleClick, setColumnAreaOpen }) => {
    return (
        <>
            <form>
                <textarea onChange={handleChange} className="addColumnTextArea" placeholder="Enter the title of this column" ></textarea>
                <button type="button" onClick={handleClick} className="addColumn">Add new column</button>
                <img onClick={setColumnAreaOpen} className="cancelColIcon" src="images/cancelIcon.png"></img>
            </form>
        </>
    )
}

export default ColumnAreaOpen