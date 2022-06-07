import { Ref } from "react"


type PropsType = {
    menuRef: Ref<HTMLDivElement>
    handleDeleteColumn: () => void
}

const ColumnSettingsActive: React.FC<PropsType> = ({ handleDeleteColumn, menuRef }) => {
    return (
        <div ref={menuRef} className="columnSettings__clicked">...
            <ul >
                <li className="TitleOfListLi">Actions with column</li>
                <hr></hr>
                <li onClick={handleDeleteColumn} >delete column</li>
            </ul>
        </div>
    )
}

export default ColumnSettingsActive