import Task from '../task';


const TaskList = ({todos}) => {

  const elements = todos.map(item => {

    return (
      <li className='completed' key={item.id}>
        <Task label={item.label} timeOut={item.timeOut}></Task>
      </li>
    );
  });

  return (
    <section className='main'>
      <ul className='todo-list'>
        {elements}
      </ul>
    </section>
  );
};

export default TaskList;