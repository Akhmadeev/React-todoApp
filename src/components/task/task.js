const Task = ({label, timeOut}) => {
  return (
    <div className='view'>
      <input className='toggle' type="checkbox"></input>
      <label>
        <span className='description'>{label}</span>
        <span className='created'>{timeOut}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  )
}

export default Task;