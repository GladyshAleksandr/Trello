import Column from './components/column/column';
import './App.scss'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { actions } from './Redux/actions/actionsCreators';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { getBiggestColumnIdFromStore, getIdForNewCard } from './Redux/utils/utils';
import { getColumnsSelector } from './Redux/selectors/columnsSelectors';


const App = () => {
  const columns = getColumnsSelector()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getDataFromStorageActionCreatorStart())

  }, [])

  const [isColumnAreaOpen, setOpen] = useState(false)
  const [titleFromColumn, setText] = useState('')

  function handleChange(e: any) {
    setText(e.target.value)
  }

  function handleClick() {
    setOpen(!isColumnAreaOpen)
    const biggestColumnId = getBiggestColumnIdFromStore(columns)
    if (titleFromColumn.match(/[^\s]/)) {
      dispatch(actions.addColumnActionCreatorStart(biggestColumnId + 1, titleFromColumn, columns.length + 1))
      setText('')
    }
  }

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result

    if (!destination) return

    if (type === 'column') {

      const arrToDispatch: Array<ColumnsTypes> = columns.map((col) => {
        if (source.index > destination.index && col.columnId >= destination.index + 1) {
          col.columnId += 1
        }

        if (source.index < destination.index && col.columnId <= destination.index + 1) {
          col.columnId -= 1
        }
        return { ...col }
      })
        .map((column, index) => index === source.index ? { ...column, columnId: destination.index + 1 } : column)
        .sort((a: ColumnsTypes, b: ColumnsTypes) => a.columnId - b.columnId)
        .map((col: ColumnsTypes, index) => {
          return {
            ...col,
            columnId: index + 1,
            cards:
              col.cards.map((card: CardsType) => {
                return {
                  ...card,
                  columnId: col.columnId
                }
              })
          }
        })
      dispatch(actions.updateColumnPositionActionCreatorStart(arrToDispatch))
      return
    }

    const columnsCopy = columns.map((column) => {
      return {
        ...column,
        cards: column.cards.map((card) => ({ ...card }))
      }
    })
    const sourceColumns = columnsCopy[source.droppableId - 1]



    //destination.index = куда ложат карту source.index откуда ложат карту
    if (source.droppableId === destination.droppableId) {
      let sortedAr

      if (source.index === destination.index) return

      if (source.index > destination.index) {
        sortedAr = sourceColumns.cards.map((card) => {
          let tmpDest = destination.index
          if (card.order >= (++tmpDest)) {
            return {
              ...card,
              order: card.order + 1
            }
          }
          else return card
        }
        )
      }
      else if (source.index < destination.index) {
        sortedAr = sourceColumns.cards.map((card) => {
          let tmpDest = destination.index
          if (card.order <= (++tmpDest)) {
            return {
              ...card,
              order: card.order - 1
            }
          }
          else return card
        }
        )

      }
      if (sortedAr) {
        sortedAr[source.index].order = ++destination.index
        sortedAr.sort((a, b) => a.order - b.order)
        sourceColumns.cards = sortedAr
        dispatch(actions.updateCardPositionActionCreatorStart(columnsCopy))
      }
    }
    else {
      const cardToDrop = columnsCopy[source.droppableId - 1].cards.splice(source.index, 1) // ? mutable need to change 

      const arr: Array<ColumnsTypes> = columnsCopy.map((column, index) => index === source.droppableId - 1 ? { ...column, cards: column.cards.map((card, index) => ({ ...card, order: index + 1 })) } : column)
        .map((column, index) => index === destination.droppableId - 1 ? { ...column, cards: column.cards.map((card) => card.order >= destination.index + 1 ? { ...card, order: card.order + 1 } : card) } : column)
      arr[destination.droppableId - 1].cards.splice(destination.index, 0, cardToDrop[0])
      const arrToDispatch = arr.map((column, index) => index === destination.droppableId - 1 ? { ...column, cards: column.cards.map((card, index) => index === destination.index ? { ...card, order: destination.index + 1 } : card) } : column)
        .map((col) => {
          return {
            ...col,
            cards: col.cards.map((card) => ({ ...card, columnId: col.columnId }))
          }
        })

      dispatch(actions.updateCardPositionActionCreatorStart(arrToDispatch))
    }
  }

  let idForNewCard = getIdForNewCard(columns)


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='App' type='column' direction='horizontal'>
        {(provided) => (
          <div className="app" ref={provided.innerRef} {...provided.droppableProps}>
            {
              columns.map((obj, index) => {
                return (
                  <Column countOfCards={idForNewCard} index={index} key={obj.columnId} id={obj.columnId} columnTitle={obj.columnTitle} cards={obj.cards} />
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

