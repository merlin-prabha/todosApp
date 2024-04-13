// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, onDelete} = props
  const {id, title} = details

  const deleteTodo = () => {
    onDelete(id)
  }
  return (
    <li className="item-container">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
