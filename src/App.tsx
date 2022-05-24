import Column from './components/column/column';
import './App.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from './Redux/store/store';
import { useEffect, useState } from 'react';
import { actions } from './Redux/actions/actionsCreators';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { getIdForNewCard } from './Redux/utils/utils';


const App = () => {
  const stateData = useSelector((store: AppStateType) => store.columns)

  const columns = stateData.map((column) => {
    let ob = Object.assign({}, column)
    ob.cards = ob.cards.map((card) => {
      return Object.assign({}, card)
    })
    return ob
  })

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

    if (titleFromColumn.match(/[^\s]/)) {
      dispatch(actions.addColumnActionCreatorStart(columns.length + 1, titleFromColumn, columns.length + 1))
      setText('')
    }
  }

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result

    if (!destination) return

    if (type === 'column') {
      const SortedArr = columns
      SortedArr.map((col) => {
        if (source.index > destination.index) {
          if (col.columnId >= destination.index + 1)
            col.columnId += 1
        }

        if (source.index < destination.index) {
          if (col.columnId <= destination.index + 1)
            col.columnId -= 1
        }
        return col
      })
      SortedArr[source.index].columnId = destination.index + 1
      SortedArr.sort((a, b) => a.columnId - b.columnId)
      SortedArr.map((col, index) => {
        col.columnId = index + 1
        col.cards.map((card) => {
          card.columnId = col.columnId
        })
        return col
      })
      dispatch(actions.updateColumnPositionActionCreatorStart(SortedArr))
      return
    }

    const sourceColumns = columns[source.droppableId - 1]
    //destination.index = куда ложат карту source.index откуда ложат карту
    if (source.droppableId === destination.droppableId) {

      if (source.index === destination.index) return
      else if (source.index > destination.index) {
        let sortedAr = sourceColumns.cards.map((card) => {
          let tmpDest = destination.index
          if (card.order >= (++tmpDest)) {
            card.order += 1
            return card
          }
          else return card
        }
        )
        sortedAr[source.index].order = ++destination.index
        sourceColumns.cards = sortedAr
        sortedAr.sort((a, b) => a.order - b.order)
        columns[source.droppableId - 1] = sourceColumns
        dispatch(actions.updateCardPositionActionCreatorStart(columns))
      }
      else if (source.index < destination.index) {
        let sortedAr = sourceColumns.cards.map((card) => {
          let tmpDest = destination.index
          if (card.order <= (++tmpDest)) {
            card.order -= 1
            return card
          }
          else return card
        }
        )
        sortedAr[source.index].order = ++destination.index
        sourceColumns.cards = sortedAr
        sortedAr.sort((a, b) => a.order - b.order)

        columns[source.droppableId - 1] = sourceColumns
        dispatch(actions.updateCardPositionActionCreatorStart(columns))
      }
    }
    else {
      let cardToDrop = columns[source.droppableId - 1].cards.splice(source.index, 1)
      columns[source.droppableId - 1].cards.forEach((card, index) => {
        card.order = index + 1
      })


      columns[destination.droppableId - 1].cards.forEach((card, index) => {
        if (card.order >= destination.index + 1) {
          card.order += 1
        }
      })
      columns[destination.droppableId - 1].cards.splice(destination.index, 0, cardToDrop[0])
      columns[destination.droppableId - 1].cards[destination.index].order = destination.index + 1
      columns.map((col) => {
        col.cards.map((card) => {
          card.columnId = col.columnId
        })
        return col
      })
      dispatch(actions.updateCardPositionActionCreatorStart(columns))
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

