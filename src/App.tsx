import { DndProvider } from 'react-dnd';
import Column from './components/column/column';
import './App.scss'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from './Redux/store/store';
import { useState } from 'react';
import { actions } from './Redux/actions/actionsCreators';
import { DragDropContext, DragDropContextProps, Droppable, DropResult } from 'react-beautiful-dnd';


const App = () => {

  const columns = useSelector((store: AppStateType) => store.columns)
  const dispatch = useDispatch()

  const addColumn = (title: string) => {
    dispatch(actions.addColumnActionCreator(title))
  }

  const [isColumnAreaOpen, setOpen] = useState(false)
  const [titleFromColumn, setText] = useState('')

  function handleChange(e: any) {
    setText(e.target.value)
  }

  function handleClick() {
    setOpen(!isColumnAreaOpen)

    if (titleFromColumn.match(/[^\s]/)) {
      dispatch(actions.addColumnActionCreator(titleFromColumn))
      setText('')
    }
  }

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result
    // console.log('destination', destination, 'source', source, draggableId)

    if (!destination) return

    if (type === 'column') {
      const newColId = columns

      newColId[source.index].id = destination.index + 1
      newColId[destination.index].id = source.index + 1
      newColId.sort((a, b) => a.id - b.id)
      dispatch(actions.updateColumnPositionActionCreator(newColId))

      console.log(columns)
      return

    }

    const sourceColumns = columns[source.droppableId - 1]
    const destinationColumns = columns[destination.droppableId - 1]
    const draggingCard = sourceColumns.cards.filter((card) => card.id === draggableId)[0] // ? what this

    if (source.droppableId === destination.droppableId) {
      sourceColumns.cards.splice(source.index, 1)
      destinationColumns.cards.splice(destination.index, 0, draggingCard)
      dispatch(actions.updateCardPositionActionCreator(destinationColumns))
    }

    else {
      sourceColumns.cards.splice(source.index, 1)
      destinationColumns.cards.splice(destination.index, 0, draggingCard)
      dispatch(actions.updateCardPositionActionCreator(destinationColumns))

    }

  }

  console.log(columns)


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='App' type='column' direction='horizontal'>
        {(provided) => (
          <div className="app" ref={provided.innerRef} {...provided.droppableProps}>
            {
              columns.map((obj, index) => {
                return (
                  <Column index={index} key={obj.id} id={obj.id} columnTitle={obj.columnTitle} cards={obj.cards} />
                )
              })
            }
            <div className="addColumnWrapper">
              {
                isColumnAreaOpen ?
                  <div>
                    <form>
                      <textarea onChange={handleChange} className="addColumnTextArea" placeholder="Enter the title of this column" ></textarea>
                      <button type="button" onClick={handleClick} className="addColumn">Add new column</button>
                      <img onClick={() => setOpen(!isColumnAreaOpen)} className="cancelColIcon" src="images/cancelIcon.png"></img>
                    </form>
                  </div>
                  : <button type="button" onClick={() => setOpen(!isColumnAreaOpen)} className="addColumn">Add new column</button>
              }
            </div>
            {provided.placeholder}
          </div >
        )}
      </Droppable>
    </DragDropContext >
  );



}

export default App;

